const router = require("express").Router();
const { FlightMiddlewares } = require("../../middlewares");
const { FlightController } = require("../../controllers");

/* POST /api/v1/flights */
router.post(
  "",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

module.exports = router;
