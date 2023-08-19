const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils/errors/app-error");

async function validateCreateRequest(req, res, next) {
  let validationErrors = [];

  if (!req.body.flightNumber) {
    validationErrors.push("flightNumber not found in the request body");
  }

  if (!req.body.airplaneID) {
    validationErrors.push("airplaneID not found in the request body");
  }

  if (!req.body.departureAirportID) {
    validationErrors.push("departureAirportID not found in the request body");
  }

  if (!req.body.arrivalAirportID) {
    validationErrors.push("arrivalAirportID not found in the request body");
  }

  if (!req.body.departureTime) {
    validationErrors.push("departureTime not found in the request body");
  }

  if (!req.body.arrivalTime) {
    validationErrors.push("arrivalTime not found in the request body");
  }

  if (!req.body.price) {
    validationErrors.push("price not found in the request body");
  }

  if (req.body.departureTime && req.body.arrivalTime) {
    let departureTime = new Date(req.body.departureTime),
      arrivalTime = new Date(req.body.arrivalTime);

    if (departureTime.getTime() > arrivalTime.getTime())
      validationErrors.push("departureTime cannot be greater than arrivalTime");
  }

  if (validationErrors.length) {
    ErrorResponse.message = "Could not complete the request";
    ErrorResponse.error = new AppError(
      validationErrors,
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  console.log("Inside flight middlewares, calling flight controller");
  next();
}

module.exports = {
  validateCreateRequest,
};
