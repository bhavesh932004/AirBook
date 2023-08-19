const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const { AppError } = require("../utils/errors/app-error");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    console.log("Inside flight service try, calling flight repository");
    const response = await flightRepository.createFlight(data);
    console.log(
      "Inside flight service try, returned from flight repository, response : ",
      response
    );
    return response;
  } catch (error) {
    console.log("Inside flight service catch, returned from flight repository");
    console.log("Error : ", error);

    throw new AppError(
      "Could not create the flight",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight,
};
