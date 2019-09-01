import { Router } from 'express';
const router = Router();
import {createTask, getTasks, deleteTask, updateTask, getOneTask, getTaskByProject} from '../controllers/task.controller';

//api/tasks/
router.post('/', createTask);
router.get('/', getTasks);

//api/tasks/id
router.delete('/:id',deleteTask);
router.put('/:id', updateTask);
router.get('/:id',getOneTask);

// api/tasts/project/:projectId
router.get('/project/:projectid',getTaskByProject);
export default router;