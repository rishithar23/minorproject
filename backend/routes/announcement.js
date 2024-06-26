const express = require('express');
const Announcement = require('../models/Announcement');

const router = express.Router();

// Get All Announcements
router.get('/', async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add an Announcement
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newAnnouncement = new Announcement({ title, content });
    const announcement = await newAnnouncement.save();
    res.json(announcement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
