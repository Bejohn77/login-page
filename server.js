const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Demo user credentials
const demoUser = {
  username: 'admin',
  password: 'password123'
};

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required.' });
  }

  if (username === demoUser.username && password === demoUser.password) {
    return res.json({ success: true, message: 'Login successful.' });
  }

  return res.status(401).json({ success: false, message: 'Invalid credentials.' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Login microservice listening on port ${port}`);
});