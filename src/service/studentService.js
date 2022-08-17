const Sequelize = require('sequelize');
const db = require('../../models/index');
const fs = require('fs');
const path = require('path');
const CONSTANTS = require("../shared/constants");

const { Student } = db.sequelize.models;

const uploadStudents = async(req, res) => {
    const getStudents = await Student.findAll({       
        attributes:['id', 'name', 'email', 'result_status']
      }).then(users => users);
      
    if(getStudents.length){
        return {status:CONSTANTS.CUSTOMS.SUCCESS, data: getStudents};
    }else{
        return { status: CONSTANTS.CUSTOMS.NO_DATA_FOUND};
    }  
}

module.exports = {
    uploadStudents
};