import Task from '../models/Task';

export async function createTask(req, res) {
    try {
        const { name, done, projectid } = req.body;
        let newTask = await Task.create(
        {
            name,
            done,
            projectid
        },
        {
            fields:['name', 'done', 'projectid']
         }
     
    );
    if(newTask){
        return res.json({
            messaje: 'Task created succesfully',
        });
    }
    
    } catch (error) {
        console.log(error);
    }
}

export async function getTasks(req, res) {
  const tasks = await Task.findAll({
      attributes: ['id', 'projectid', 'name', 'done'],
      order: [
          ['id', 'DESC']
      ]
  });

  res.json({ tasks});
}

export async function updateTask(req, res) {
  const {id} = req.params;
  const {name, priority, projectid, done} = req.body;
  const task = await Task.findOne({
      attributes:['name','projectid','done','id'],
      where:{id}
  });

  const updateTask = await Task.update({
      name,
      priority,
      done,
      projectid
  },
  {
      where:{id}
  });
  res.json({messaje: "Task update",
    updateTask
});
}

export async function deleteTask(req, res) {
    try {
        const {id} = req.params;
        const count = await Task.destroy({
            where:{id}
        });
      return res.json({messaje:'Task deleted'});
    } catch (error) {
        console.log(error);
    }
  
}

export async function getOneTask(req, res) {
  const {id} = req.params;
  const task = await Task.findOne({
      where:{id},
      fields:['name','done','projectid']
  });
  res.json({task});
}

export async function getTaskByProject(req, res) {
  const {projectid} = req.params;

 const tasks = await Task.findAll({
     attributes:['id','projectid', 'done', 'name'],
      where:{projectid}
  });
  res.json(tasks);
}


