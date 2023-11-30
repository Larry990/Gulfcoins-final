const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Simple in-memory storage for user data
const users = [];

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Validate email and password (add more validation as needed)
  if (!email || !password) {
    return res.status(400).send('Invalid email or password');
  }

  // Simulate email verification (in a real app, this would involve sending an email)
  const verificationToken = Math.random().toString(36).substring(7);
  const user = { email, password, verified: false, verificationToken };
  users.push(user);

  return res.status(201).json({ message: 'Thank you! Please verify your email.' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
