/* Router object specific to v1 routes */
const router = require("express").Router();

/* const { InfoController, HomeController } = require("../../controllers"); */
const AirplaneRoutes = require("./airplane-routes");
const CityRoutes = require("./city-routes");

console.log("inside v1 routes");
router.use("/airplanes", AirplaneRoutes);
router.use("/cities", CityRoutes);

module.exports = router;
