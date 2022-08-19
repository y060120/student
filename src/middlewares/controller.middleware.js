const CONSTANTS = require("../shared/constants");

// Common controller response
const controllerService = async(req, res, parameter) => {
   if (parameter.status === CONSTANTS.CUSTOMS.SUCCESS) {        
        if(parameter.data){
            return res.status(CONSTANTS.RESPONSES.SUCCESS ).json({ msg: parameter.status, data: parameter.data });
        }else{
            return res.status(CONSTANTS.RESPONSES.SUCCESS ).json({ msg: parameter.status});
        }        
    } else {        
        return res.status(CONSTANTS.RESPONSES.UNAUTHORIZE).json({ msg: parameter.status });
    }
}

module.exports = {
    controllerService    
}