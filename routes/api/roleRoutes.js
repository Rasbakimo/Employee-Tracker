const router = require('express').Router();
const { Department, Employee, Role } = require('../../models');

// GET all 
router.get('/', async (req, res) => {
  try {
    const roleData = await Role.findAll();
    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET 
router.get('/:id', async (req, res) => {
  try {
    const roleData = await Department.findByPk(req.params.id, {
      include: [{ model: Employee}, {model: Department}]
    });

    if (!roleData) {
      res.status(404).json({ message: 'No role found with this id!' });
      return;
    }

    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE 
router.post('/', async (req, res) => {
  try {
    const roleData = await Role.create(req.body);
    res.status(200).json(roleData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE 
router.delete('/:id', async (req, res) => {
  try {
    const departmentData = await Role.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!departmentData) {
      res.status(404).json({ message: 'No role found with this id!' });
      return;
    }

    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;