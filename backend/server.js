const express = require('express');
const app = express();
const PORT = 5000;

// Minimal test route
app.get('/', (req, res) => {
  res.send('BACKEND IS WORKING!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🔥 Server running at http://localhost:${PORT}`);
});