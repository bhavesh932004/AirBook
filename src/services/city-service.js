const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const { AppError } = require("../utils/errors/app-error");

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

module.exports = {
  createCity,
  getCities,
};
