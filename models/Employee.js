const { UUIDV4, Model, DataTypes } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model { }

// create fields/columns for Traveller model
Employee.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 30
            },
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 30
            },
        },
        role_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'role',
                key: 'id',

            },
        },
        manager_id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee'
    }


);

module.exports = Employee;
