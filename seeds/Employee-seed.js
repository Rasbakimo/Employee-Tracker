const { Employee } = require('../models');
const employeeData = [
    {
        employee_id:1,
        first_name:"Mike",
        last_name:"Jones",
        role_id:1 ,
        manager_id:1,
    },
    {
        employee_id:2,
        first_name:"Aaron",
        last_name:"Roger",
        role_id:2 ,
        manager_id:2,
    },
    {
        employee_id:3,
        first_name:"Serena",
        last_name:"Williams",
        role_id:3 ,
        manager_id:3,
    },
    
];

const seedEmployee = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployee;