const router = require("express").Router();
const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");

router.post(
  "",
  AirportMiddlewares.validateCreateRequest,
  AirportController.createAirport
);

router.get("", AirportController.getAirports);

module.exports = router;
