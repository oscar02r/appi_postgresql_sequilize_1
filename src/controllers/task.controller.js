import Task from '../models/Task';

export async function createTask(req, res) {
    const { name, done, projectid } = req.body;
    const newTask = await Task.create(
        {
            name,
            done,
            projectid
        },
        {
            fields:['name', 'done', 'projectid']
         }
     
    );

    res.json({
        messaje: 'Task created succesfully',
    });
}

export async function getTasks(req, res) {

}

export async function updateTask(req, res) {

}

export async function deleteTask(req, res) {

}

export async function getOneTask(req, res) {

}

export async function getTaskByProject(req, res) {

}


