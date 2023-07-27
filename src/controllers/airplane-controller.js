const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

const { ErrorResponse, SuccessResponse } = require("../utils/common");

/*  POST : /api/v1/airplanes
    req.body : {modalNumber, copacity}
*/
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modalNumber: req.body.modalNumber,
      capacity: req.body.capacity,
    });

    SuccessResponse.message = "Successfully created an airplane";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

/*  GET : /api/v1/airplanes
    req.body : {}
*/
async function getAirplanes(req, res) {
  console.log("inside controller");
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.message = "Successfully retrieved all airplanes";
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

/*  GET : /api/v1/airplanes/:id
    req.body : {}
    req.params.id : id
*/
async function getAirplane(req, res) {
  console.log("inside controller");
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.message = "Successfully retrieved the airplane";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

/*  DELETE : /api/v1/airplanes/:id
    req.body : {}
    req.params.id : id
*/
async function deleteAirplane(req, res) {
  console.log("inside controller");
  try {
    const airplane = await AirplaneService.deleteAirplane(req.params.id);
    SuccessResponse.message = "Successfully deleted the airplane";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

/*  PATCH : /api/v1/airplanes/:id
    req.body : {capacity}
    req.params.id : id
*/
async function updateAirplane(req, res) {
  console.log("inside controller");
  try {
    const airplane = await AirplaneService.updateAirplane(req.params.id, {
      capacity: req.body.capacity,
    });

    SuccessResponse.message = "Successfully updated the airplane";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
};
