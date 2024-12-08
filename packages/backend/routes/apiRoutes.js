const express = require('express');
const router = express.Router();

// Example route
router.get('/example', (req, res) => {
  res.json({ message: 'Example route data' });
});

module.exports = router;
