const router = require("express").Router();

const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares/index");

console.log("inside airplane routes");

/* POST /api/v1/airplanes */
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);

/* GET /api/v1/airplanes  */
router.get("/", AirplaneController.getAirplanes);

/* GET /api/v1/airples/:id  */
router.get("/:id", AirplaneController.getAirplane);

/* DELETE /api/v1/airplanes/:id */
router.delete("/:id", AirplaneController.deleteAirplane);

module.exports = router;
