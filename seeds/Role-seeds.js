const { Role } = require('../models');
const roleData = [
    {
       role_id:1,
        title:"Web Developer",
        salary: 80000,
        department_id: 1,
    },
    {
       role_id:2,
        title:"Manager",
        salary:85000 ,
        department_id: 2
    },
    {
       role_id:3,
        title:"Engineer",
        salary:75000 ,
        department_id: 3
    },
    
];

const seedRole = () => Role.bulkCreate(roleData);

module.exports = seedRole;