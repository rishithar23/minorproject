const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware for parsing JSON body
app.use(bodyParser.json());

// Connection URI and Database Name
const uri = 'mongodb+srv://rishitha23:rishitha23@cluster0.zhcukbz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI
const dbName = 'test'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Use the specified database
    const db = client.db(dbName);

    // Example route for handling login
    app.post('/login', async (req, res) => {
      const { username, password } = req.body;

      try {
        // Query MongoDB for user with matching username and password
        const query = { username, password };
        const user = await db.collection('users').findOne(query);

        if (!user) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Example: Generate a token (for demonstration)
        const token = 'dummy-token'; // Replace with your actual token generation logic

        // Respond with token
        res.json({ token });

      } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

  } finally {
    // Ensure the client is closed
    // await client.close();
    // console.log('Disconnected from MongoDB server');
  }
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

run().catch(console.error);
