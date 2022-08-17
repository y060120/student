const studentService = require('../service/studentService');
const CONSTANTS = require('../shared/constants');
const controllerMiddleware = require("../middlewares/controller.middleware");

const uploadStudents = async(req, res)=>{        
    try{
        const studentData = await studentService.uploadStudents(req, res);     
        controllerMiddleware.controllerService(req, res, studentData);    
    }catch(err){
        logger.error(err);
        return res.status(CONSTANTS.RESPONSES.UNAUTHORIZE).json({"error":CONSTANTS.CUSTOMS.EXCEPTION_ERROR, err});
    }    
}

module.exports = {uploadStudents};