import express, {json} from 'express';
import morgan from 'morgan';

const app = express();


//Importing routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/proyects',projectRoutes);
app.use('/api/tasks',taskRoutes);

export default app;