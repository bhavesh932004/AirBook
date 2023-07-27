const { StatusCodes } = require("http-status-codes");

const { AirplaneRepository } = require("../repositories");
const { AppError } = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
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
  console.log("inside service");
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    if ((error.name = "TypeError")) {
      throw new AppError(
        "Interner serverl error, typeError",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw error;
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
};
