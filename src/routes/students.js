const express = require('express');

const studentRoutes = express.Router();

const studentsController = require('../controllers/studentsController');

studentRoutes.post('/upload', studentsController.uploadStudents);

module.exports = studentRoutes;