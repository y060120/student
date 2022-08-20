const Sequelize = require("sequelize");
const db = require("../../models/index");
const fs = require("fs");
const path = require("path");
const CONSTANTS = require("../shared/constants");
const csv = require("csv-parser");

const { Student } = db.sequelize.models;

const uploadStudents = async (req, res) => {
  if (req.files) {
    const { uploadCsv } = req.files;
    const results = [];

    const getExistingData = await Student.findAll({
      // check for existing datas
      attributes: ["id", "email"],
    });
    if (getExistingData.length) {
      return { status: CONSTANTS.CUSTOMS.DATA_FOUND };
    }
    var uploadFile = path.resolve(__dirname, "../uploads/", "student-data.csv"); // init storage path
    var uploadFolder = path.resolve(__dirname, "../uploads/");
    if (!fs.existsSync(uploadFolder)) {
      // create directory if not
      fs.mkdirSync(uploadFolder);
    }
    uploadCsv.mv(uploadFile, function (err) {
      // move uploaded file to folder
      if (err) {
        console.log(err);
      }
    });

    const csvProcessing = (uploadFile) =>
      new Promise((resolve, reject) => {
        try {
          fs.createReadStream(uploadFile)
            .pipe(csv())
            .on("data", (data) => {
              if (data.email !== "") {
                data.createdAt = new Date(); // adding timestamps
                data.updatedAt = new Date();
                Object.keys(data).forEach((key) => {
                  // removing empty values
                  if (data[key] === "") {
                    delete data[key];
                  }
                });
                results.push(data); // pushing to global array
              }
            })
            .on("end", () => {
              console.log("CSV file successfully processed");
              resolve();
            });
        } catch (error) {
          console.log(error);
          reject(error);
        }
      });

    await csvProcessing(uploadFile).then(() => {}); // process csv

    await Student.bulkCreate(results) // save in db
      .then(() => console.log("Users data have been saved"))
      .catch(function (err) {
        return { status: CONSTANTS.CUSTOMS.ERROR, data: err };
      });

    return { status: CONSTANTS.CUSTOMS.IMPORT_SUCCESS };
  } else {
    return { status: CONSTANTS.CUSTOMS.NO_FILE_FOUND };
  }
};

const getStudentById = async (req, res) => {
  const studentId = req.params.id;

  const getStudentbyId = await Student.findOne({
    where: { id: studentId }
  });

  if (getStudentbyId != null && Object.keys(getStudentbyId).length) {
    return { status: CONSTANTS.CUSTOMS.SUCCESS, data: getStudentbyId };
  } else {
    return { status: CONSTANTS.CUSTOMS.NO_DATA_FOUND };
  }
};

const getResultStatus = async (req, res) => {
  const status = req.params.resultStatus;
  const getStudentbyResult = await Student.findAll({
    where: { result_status: status }
  });

  if (getStudentbyResult.length) {
    return { status: CONSTANTS.CUSTOMS.SUCCESS, data: getStudentbyResult };
  } else {
    return { status: CONSTANTS.CUSTOMS.NO_DATA_FOUND };
  }
};

const clearAllData = async (req, res) => {
  Student.destroy({
    where: {},
    truncate: true,
  });
  return { status: CONSTANTS.CUSTOMS.CLEARED };
};

module.exports = {
  uploadStudents,
  getStudentById,
  getResultStatus,
  clearAllData,
};
