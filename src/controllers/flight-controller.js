const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/*  POST : /api/v1/flights
    req.body : {
        flightNumber, airplaneID, departureAirportID, arrivalAirportID, departureTime, arrivalTime, price, boardingGate, totalSeats
    }
*/
async function createFlight(req, res) {
  try {
    const data = {
      flightNumber: req.body.flightNumber,
      airplaneID: req.body.airplaneID,
      departureAirportID: req.body.departureAirportID,
      arrivalAirportID: req.body.arrivalAirportID,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
    };

    console.log("Inside flight controller try, calling flight service");
    const flight = await FlightService.createFlight(data);
    console.log(
      "Inside flight controller try, returned from flight service, flight : ",
      flight
    );
    SuccessResponse.message = "Sucessfully created the flight";
    SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log("Inside flight controller catch, returned from flight service");
    console.log("Flight controller Error : ", error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createFlight,
};
