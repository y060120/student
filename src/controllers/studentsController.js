const studentService = require('../service/studentService');
const CONSTANTS = require('../shared/constants');

const uploadStudents = async(req, res)=>{
    console.log('test');
    return res.status(200).json({ "hai":"welcome" });
}

module.exports = {uploadStudents};