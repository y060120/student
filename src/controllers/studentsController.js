const studentService = require("../service/studentService");
const CONSTANTS = require("../shared/constants");
const controllerMiddleware = require("../middlewares/controller.middleware");

const uploadStudents = async (req, res) => {
  try {
    const studentData = await studentService.uploadStudents(req, res);
    controllerMiddleware.controllerService(req, res, studentData);
  } catch (err) {
    return res
      .status(CONSTANTS.RESPONSES.UNAUTHORIZE)
      .json({ error: CONSTANTS.CUSTOMS.EXCEPTION_ERROR, err });
  }
};

const getStudentById = async (req, res) => {
  try {
    const getStudent = await studentService.getStudentById(req, res);
    controllerMiddleware.controllerService(req, res, getStudent);
  } catch (err) {
    return res
      .status(CONSTANTS.RESPONSES.UNAUTHORIZE)
      .json({ error: CONSTANTS.CUSTOMS.EXCEPTION_ERROR, err });
  }
};

const getResultStatus = async (req, res) => {
  try {
    const getResult = await studentService.getResultStatus(req, res);
    controllerMiddleware.controllerService(req, res, getResult);
  } catch (err) {
    return res
      .status(CONSTANTS.RESPONSES.UNAUTHORIZE)
      .json({ error: CONSTANTS.CUSTOMS.EXCEPTION_ERROR, err });
  }
};

const clearAllData = async (req, res) => {
  try {
    const clearData = await studentService.clearAllData(req, res);
    controllerMiddleware.controllerService(req, res, clearData);
  } catch (err) {
    return res
      .status(CONSTANTS.RESPONSES.UNAUTHORIZE)
      .json({ error: CONSTANTS.CUSTOMS.EXCEPTION_ERROR, err });
  }
};

module.exports = {
  uploadStudents,
  getStudentById,
  getResultStatus,
  clearAllData,
};
