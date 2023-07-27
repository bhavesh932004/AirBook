const { StatusCodes } = require("http-status-codes");

function home(req, res) {
  res.status(StatusCodes.OK).json({
    success: "true",
    message: "API is live, home page",
    error: {},
    data: {},
  });
}

module.exports = home;
