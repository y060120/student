const express = require('express');
const studentRoutes = require('./students');

const apiRouter = express.Router();

apiRouter.use(studentRoutes);

module.exports = apiRouter;