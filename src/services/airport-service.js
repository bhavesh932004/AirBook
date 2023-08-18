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

async function getAirport(id) {
  try {
    const response = await airportRepository.get(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      error.explanation = `404 - Airport with id ${id} not found!`;
      throw error;
    }

    throw new AppError(
      `Could not fetch the airport`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteAirport(id) {
  try {
    const response = await airportRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      error.explanation = `Could not delete the aiport with id ${id}. 404 - Airport not found!`;
      throw error;
    }

    throw new AppError(
      "Could not delete the airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateAirport(id, data) {
  try {
    const response = await airportRepository.update(id, data);
    return response;
  } catch (error) {
    console.log("Update Error : ", error);

    let errorMessage = "Could not update the airport",
      statusCode = StatusCodes.INTERNAL_SERVER_ERROR;

    if (error.name == "SequelizeForeignKeyConstraintError") {
      errorMessage = `Failed to update the airport with id ${id} due to a foreign key constraint violation. City with requested cityID doesn't exist in the referenced table ${error.table}`;
    }

    if (error.statusCode == StatusCodes.NOT_FOUND) {
      error.explanation = `Could not update the airport with id ${id}. 404 - Airport not found!`;
      statusCode = error.statusCode;
    }

    throw new AppError(errorMessage, statusCode);
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  deleteAirport,
  updateAirport,
};
