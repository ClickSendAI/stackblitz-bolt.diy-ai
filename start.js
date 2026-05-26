const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build/client')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/client', 'index.html'));
});

app.listen(5173, '0.0.0.0', () => {
  console.log('Server running on 0.0.0.0:5173');
});
