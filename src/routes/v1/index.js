/* Router object specific to v1 routes */
const router = require("express").Router();

/* const { InfoController, HomeController } = require("../../controllers"); */
const AirplaneRoutes = require("./airplane-routes");

console.log("inside v1 routes");
router.use("/airplanes", AirplaneRoutes);

/*  router.get("/", HomeController);
router.get("/info", InfoController);    */

module.exports = router;
