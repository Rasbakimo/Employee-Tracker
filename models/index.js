const Department = require('./Department');
const Role = require('./Role');
const Employee = require('./Employee');

Employee.hasOne(Role, {
  foreignKey: 'employee_id',
  onDelete: 'CASCADE',
});

Department.hasMany(Employee, {
  foreignKey: 'employee_id',
  onDelete: 'CASCADE',
});


module.exports = { Department, Role, Employee }