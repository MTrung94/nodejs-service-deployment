const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const APP_MESSAGE = process.env.APP_MESSAGE || 'Node.js Service Deployed via CI/CD!';

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: APP_MESSAGE,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
