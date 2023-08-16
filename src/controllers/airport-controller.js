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

module.exports = {
  createAirport,
  getAirports,
};
