const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// API routes
app.get('/', (req, res) => {
  res.send('Mittelstand Platform Backend');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'API response from the backend!' });
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
