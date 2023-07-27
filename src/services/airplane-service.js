const { StatusCodes } = require("http-status-codes");

const { AirplaneRepository } = require("../repositories");
const { AppError } = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const response = await airplaneRepository.create(data);
    return response;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const explanation = [];
      error.errors.forEach(function (err) {
        explanation.push(err.message);
      });

      console.log(explanation);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw error;
  }
}

async function getAirplanes() {
  try {
    const response = await airplaneRepository.getAll();
    return response;
  } catch (error) {
    throw new AppError(
      "Could not fetch airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const response = await airplaneRepository.get(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      error.explanation = "Didn't find the airplane you requested";
      throw error;
    }

    throw new AppError(
      "Could not fetch airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteAirplane(id) {
  try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      error.explanation = "Didn't find the airplane you requested to delete";
      throw error;
    }

    throw new AppError(
      "Could not delete the airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateAirplane(id, data) {
  try {
    const response = await airplaneRepository.update(id, data);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      error.explanation = "Didn't find the airplane you requested to update";
      throw error;
    }
    throw new AppError(
      "Could not update the airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
};
