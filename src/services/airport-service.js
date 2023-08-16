const { AirportRepository } = require("../repositories");
const { AppError } = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

const airportRepository = new AirportRepository();

function printKeyValuesRecursively(object) {
  for (let key in object) {
    if (typeof object[key] == "object") {
      printKeyValuesRecursively(object[key]);
    } else {
      console.log(key + " : " + object[key]);
    }
  }
}

async function createAirport(data) {
  try {
    const response = await airportRepository.create(data);
    return response;
  } catch (error) {
    console.log(error);
    let errorMessage = "Could not create the airport";

    if (error.name === "SequelizeForeignKeyConstraintError") {
      errorMessage = `Failed to add the airport due to a foreign key constraint violation. City with ${error.fields[0]} : ${error.value} doesn't exist in the referenced table ${error.table}`;
    }
    throw new AppError(errorMessage, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAirports() {
  try {
    const response = await airportRepository.getAll();
    return response;
  } catch (error) {
    console.log("Error : ", error);
    throw new AppError(
      "Could not fetch the airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirport,
  getAirports,
};
