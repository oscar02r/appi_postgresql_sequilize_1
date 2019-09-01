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

}

export async function updateTask(req, res) {

}

export async function deleteTask(req, res) {

}

export async function getOneTask(req, res) {

}

export async function getTaskByProject(req, res) {

}


