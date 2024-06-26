const express = require('express');
const Grade = require('../models/Grade');

const router = express.Router();

// Get All Grades
router.get('/', async (req, res) => {
  try {
    const grades = await Grade.find();
    res.json(grades);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add a Grade
router.post('/', async (req, res) => {
  const { subject, marks } = req.body;
  try {
    const newGrade = new Grade({ subject, marks });
    const grade = await newGrade.save();
    res.json(grade);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
