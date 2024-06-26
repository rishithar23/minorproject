// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.json());

// const db = 'your_mongodb_connection_string';

// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// app.get('/', (req, res) => res.send('API Running'));

// // Define Routes
// app.use('/api/users', require('./routes/users'));
// app.use('/api/grades', require('./routes/grades'));
// app.use('/api/announcements', require('./routes/announcement'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/api/users/register', (req, res) => {
  const { email, password } = req.body;
  // Simulate a registration process
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  // Further processing and saving to database...
  res.status(200).json({ message: 'User registered successfully' });
});

app.post('/api/users/login', (req, res) => {
  const { email, password } = req.body;
  // Simulate a login process
  if (email === 'test@example.com' && password === 'password') {
    return res.status(200).json({ message: 'Login successful' });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

app.get('/api/grades', (req, res) => {
  // Simulate fetching grades
  res.status(200).json({ grades: [90, 85, 88] });
});

app.get('/api/announcements', (req, res) => {
  // Simulate fetching announcements
  res.status(200).json({ announcements: ['Test announcement 1', 'Test announcement 2'] });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
