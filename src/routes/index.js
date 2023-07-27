const express = require("express");

/* router specifc to all the api routes */
const router = express.Router();

const v1Routes = require("./v1");

console.log("inside api routes");
router.use("/v1", v1Routes);

module.exports = router;
