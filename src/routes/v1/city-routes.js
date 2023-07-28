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

/* GET /api/v1/cities/:id */
router.get("/:id", CityController.getCity);

/* DELETE /api/v1/cities/:id  */
router.delete("/:id", CityController.deleteCity);

/* PATCH /api/v1/cities/:id */
router.patch("/:id", CityController.updateCity);

module.exports = router;
