import Sequelize from 'sequelize';

export const sequelise = new Sequelize (
  'prostgres',
  'prostgres',
  '112401',
  {
      host: 'localhost',
      dialect: 'postgres',
      pool:{
          max: 5,
          min: 0,
          require: 30000,
          idlel: 1000,

      },
      logging: false
  }
  
);