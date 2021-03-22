const router = require('express').Router();
const employeeRoutes = require('./employeeRoutes');
const roleRoutes = require('./roleRoutes');
const departmentRoutes = require('./departmentRoutes');

router.use('/employee', employeeRoutes);
router.use('/role', roleRoutes);
router.use('/department', departmentRoutes);    

module.exports = router;