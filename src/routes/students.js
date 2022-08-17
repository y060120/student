const express = require('express');

const studentRoutes = express.Router();

const studentsController = require('../controllers/studentsController');

studentRoutes.post('/uploads', studentsController.uploadStudents);

module.exports = studentRoutes;