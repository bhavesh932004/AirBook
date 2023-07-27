const router = require("express").Router();

const { CityController } = require("../../controllers");

router.post("/", CityController.createCity);
router.get("/", CityController.getCities);

module.exports = router;
