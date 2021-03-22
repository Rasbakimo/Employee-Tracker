const { Department } = require('../models');
const departmentData = [
    {
        department_name:"Information Systems and Technology",
        department_id:1,
    },
    {
        department_name:"Finance",
        department_id:2,
    },
    {
        department_name:"Sales",
        department_id:3,
    }
];

const seedDepartment = () => Department.bulkCreate(departmentData);

module.exports = seedDepartment;