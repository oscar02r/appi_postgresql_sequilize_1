import Sequilize from 'sequelize';
import { sequelize } from '../database/database';
import Task from './Task'; 

const Project = sequelize.define('projects',{
    id:{
        type: Sequilize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequilize.TEXT,
    },
    priority:{
        type: Sequilize.INTEGER
    },
    description:{
        type: Sequilize.TEXT
    },
    deliverydate:{
        type: Sequilize.DATE
    }  
},

{
    timestanmps:false
});

Project.hasMany(Task,{foreingKey:projectId, sourceKey:'id'});
Task.belongsTo(Project,{foreingKey: 'projectId', sourceKey: 'id'});
export default Project;