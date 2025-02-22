// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that accepts POST requests
app.post('/comments', (req, res) => {
  res.send('You made a POST request to /comments');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});