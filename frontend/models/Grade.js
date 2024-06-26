const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  marks: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Grade', GradeSchema);
