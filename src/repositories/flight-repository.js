const CrudRepository = require("./crud-repository");
const { Flight, Airplane } = require("../models");
const { Op } = require("sequelize");
const { AppError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async createFlight(data) {
    try {
      const airplaneID = data.airplaneID;
      console.log("Inside flight repository, calling sequelize");
      console.log("airplaneID : ", airplaneID);
      const airplanes = await Airplane.findAll({
        attributes: ["capacity"],
        where: {
          id: {
            [Op.eq]: airplaneID,
          },
        },
      });

      console.log("Inside flight repository try, returned from sequelize");
      const seats = airplanes[0].dataValues.capacity;
      console.log("Totalseats : ", seats);
      data = { totalSeats: seats, ...data };
      console.log("Flight data : ", data);

      console.log("Insidte flight repository try, calling Model.create()");
      const flight = await Flight.create(data);
      console.log("Inside flight repository try, returned from Model.create()");
      console.log("Flight : ", flight);
      console.log("Leaving flight repository");
      return flight;
    } catch (error) {
      console.log("Inside flight repository catch, returned from sequelize");
      console.log("Flight repository error : ", error);
      throw error;
    }
  }
}

module.exports = FlightRepository;
