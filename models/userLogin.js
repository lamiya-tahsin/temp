import { Types } from 'mariadb';
import DataTypes from 'sequelize';
//import { sequelize } from '.';
const Sequelize=require("sequelize");

const user_login= sequelize.define('user_login', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_email_id: {
        type: DataTypes.STRING,
        unique: true,
    },
    password:
    {
        type:DataTypes.STRING,
    }
  }, {
    tableName: 'user_login'
  });

  export default user_login;
  
  

