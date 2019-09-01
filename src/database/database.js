import Sequelize from 'sequelize';

export const sequelize = new Sequelize (
  'postgres', //db
  'postgres', // username
  '112401', //pass
  {
      host: 'localhost',
      dialect: 'postgres',
      pool:{
          max: 5,
          min: 0,
          require: 30000,
          idle: 1000,

      },
      logging: false
  }
  
);