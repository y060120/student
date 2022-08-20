const express = require('express');
const studentRoutes = express.Router();

const studentsController = require('../controllers/studentsController');

studentRoutes.post('/uploads', studentsController.uploadStudents);

studentRoutes.get('/getStudentById/:id', studentsController.getStudentById);

studentRoutes.get('/getResultStatus/:resultStatus', studentsController.getResultStatus);

studentRoutes.get('/clearAllData', studentsController.clearAllData);

module.exports = studentRoutes;