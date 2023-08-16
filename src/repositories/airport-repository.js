const CrudRepository = require("./crud-repository");
const { Airport } = require("../models/");

/* Inheriting the CrudRepository class which contains the generic CRUD operations. The CrudRepository class is solely created for reusability, that's all. */
class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }

  /*    you can write some airport specific queries here   */
}

module.exports = AirportRepository;
