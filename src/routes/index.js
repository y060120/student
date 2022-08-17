const express = require('express');
const studentRoutes = require('./students');

const apiRouter = express.Router();

apiRouter.get('/healthcheck', (req, res) => {
  const greeting = 'healthcheck.ok';
  res.json(greeting);
});

apiRouter.use('/user', studentRoutes);


module.exports = apiRouter;