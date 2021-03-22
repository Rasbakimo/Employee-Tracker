const router = require('express').Router();
const { Department, Employee, Role } = require('../../models');

// GET all 
router.get('/', async (req, res) => {
  try {
    const departmentData = await Department.findAll();
    res.status(200).json(departmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET 
router.get('/:id', async (req, res) => {
  try {
    const departmentData = await Department.findByPk(req.params.id, {
      include: [{ model: Employee}, {model: Role}]
    });

    if (!departmentData) {
      res.status(404).json({ message: 'No department found with this id!' });
      return;
    }

    res.status(200).json(departmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE 
router.post('/', async (req, res) => {
  try {
    const departmentData= await Department.create(req.body);
    res.status(200).json(departmentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE 
router.delete('/:id', async (req, res) => {
  try {
    const departmentData = await Department.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!departmentData) {
      res.status(404).json({ message: 'No department found with this id!' });
      return;
    }

    res.status(200).json(departmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
