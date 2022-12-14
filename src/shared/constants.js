const CONSTANTS     = {};
CONSTANTS.CUSTOMS   = {};
CONSTANTS.RESPONSES = {};

CONSTANTS.CUSTOMS.EMAIL_REGISTERED  = 'Email already Registered';
CONSTANTS.CUSTOMS.EXCEPTION_ERROR   = 'Some Error occured';
CONSTANTS.CUSTOMS.SUCCESS           = 'success';
CONSTANTS.CUSTOMS.ERROR             = 'error';
CONSTANTS.CUSTOMS.NO_FILE_FOUND     = 'Kindly Upload a File';
CONSTANTS.CUSTOMS.NO_DATA_FOUND     = 'No Datas found';
CONSTANTS.CUSTOMS.ERROR             = 'error';
CONSTANTS.CUSTOMS.DATA_RETRIEVED    = 'Data retrieved';
CONSTANTS.CUSTOMS.SOMETHING_WRONG   = "Something Wrong";
CONSTANTS.CUSTOMS.DATA_FOUND        = "Existing Datas Found Clear it Before Proceeding";
CONSTANTS.CUSTOMS.CLEARED           = "Data Cleared Successfully";
CONSTANTS.CUSTOMS.IMPORT_SUCCESS    = "Data Imported Successfully";
// RESPONSE CODES
CONSTANTS.RESPONSES.SUCCESS             = 200;
CONSTANTS.RESPONSES.BAD_REQUEST         = 400;
CONSTANTS.RESPONSES.UNAUTHORIZE         = 401;
CONSTANTS.RESPONSES.PAYMENT_REQUIRED    = 402;
CONSTANTS.RESPONSES.FORBIDDEN           = 403;
CONSTANTS.RESPONSES.NOT_FOUND           = 404;
CONSTANTS.RESPONSES.METHOD_NOT_ALLOWED  = 405;
CONSTANTS.RESPONSES.TIMED_OUT           = 408;
CONSTANTS.RESPONSES.INTERNAL_SERVER     = 500;
CONSTANTS.RESPONSES.NOT_IMPLEMENTED     = 501;
CONSTANTS.RESPONSES.BAD_GATEWAY         = 502;


module.exports = CONSTANTS;