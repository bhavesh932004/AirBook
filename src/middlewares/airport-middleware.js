const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req, res, next) {
  let validationErrors = [];
  if (!req.body.name) {
    validationErrors.push("name not found in the request");
  }

  if (!req.body.code) {
    validationErrors.push("code not found in the request");
  }

  if (!req.body.cityID) {
    validationErrors.push("cityID not found in the request");
  }

  if (validationErrors.length) {
    ErrorResponse.message = "Could not complete the request";
    ErrorResponse.error = new AppError(
      validationErrors,
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateCreateRequest,
};
