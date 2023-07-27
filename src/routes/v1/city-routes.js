const router = require("express").Router();

const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");

/* POST /api/v1/cities  */
router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

/* GET /api/v1/cities   */
router.get("/", CityController.getCities);

module.exports = router;
