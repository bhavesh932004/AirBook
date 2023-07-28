const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const { AppError } = require("../utils/errors/app-error");
const { STRING } = require("sequelize");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const response = await cityRepository.create(data);
    return response;
  } catch (error) {
    if (error.name == "SequelizeUniqueConstraintError") {
      const explanation = [];
      error.errors.forEach(function (err) {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw error;
  }
}

async function getCities() {
  try {
    const response = await cityRepository.getAll();
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Could not fetch the cities",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCity(id) {
  try {
    const response = await cityRepository.get(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      error.explanation = "The city you requested is not present";
      throw error;
    }

    throw new AppError(
      "Could not fetch the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteCity(id) {
  try {
    const response = await cityRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      error.explanation = "The city you requested to delete is not present";
      throw error;
    }

    throw new AppError(
      "Could not delete the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity(id, data) {
  try {
    const response = await cityRepository.update(id, data);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      error.explanation = "The city you requested to update is not present";
      throw error;
    }

    throw new AppError(
      "Could not update the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
  deleteCity,
  updateCity,
};
