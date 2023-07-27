const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");

/* Inheriting the CrudRepository class which contains the generic CRUD operations. The CrudRepository class is solely created for reusability, that's all. */
class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }

  /*    you can write some airplane specific queries here   */
}

module.exports = AirplaneRepository;
