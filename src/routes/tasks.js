import { Router } from 'express';
const router = Router();
import {createTask, getTasks, deleteTask} from '../controllers/task.controller';

//api/tasks/
router.post('/', createTask);
router.get('/', getTasks);

//api/tasks/id
router.delete('/:id',deleteTask);

export default router;