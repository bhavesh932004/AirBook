const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

/*  POST : /api/v1/airports
    req.body : {name, code, cityID, address}
*/
async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      cityID: req.body.cityID,
      address: req.body.address,
    });

    SuccessResponse.message = "Successfully created the airport";
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

/*  GET : /api/v1/airports
    req.body : {}
*/
async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.message = "Successfully retreived all airports";
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

/*  GET : /api/v1/airports/:id
    req.body : {}
    req.params.id : id
*/
async function getAirport(req, res) {
  try {
    console.log("GET request parameters : ", req.params);
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.message = "Successfully retreived the airport";
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

/*  DELETE : /api/v1/aiports/:id
    req.body : {}  
    req.params.id : id
*/
async function deleteAirport(req, res) {
  try {
    console.log("DELETE request parameters : ", req.params);
    const data = await AirportService.deleteAirport(req.params.id);
    SuccessResponse.message = `Successfully deleted the airport ${id}`;
    SuccessResponse.data = data;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

/*  PATCH : /api/v1/airports/:id
    req.body : {name, code, cityID, address}
    req.params.id : id
*/
async function updateAirport(req, res) {
  try {
    let body = { address: req.body.address };
    if (req.body.name) body.name = req.body.name;
    if (req.body.code) body.code = req.body.code;
    if (req.body.cityID) body.cityID = req.body.cityID;

    const data = await AirportService.updateAirport(req.params.id, body);

    SuccessResponse.message = `Successfully updated the airport ${req.params.id}`;
    SuccessResponse.data = data;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  deleteAirport,
  updateAirport,
};
