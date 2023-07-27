const router = require("express").Router();

const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares/index");

console.log("inside airplane routes");
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);
router.get("/", AirplaneController.getAirplanes);

module.exports = router;
