const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// department model
class Department extends Model { }

// create fields/columns for Traveller model
Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 30
            },
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'department'
    }
);

module.exports = Department;
