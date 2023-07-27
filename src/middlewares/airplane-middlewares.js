const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req, res, next) {
  if (!req.body.modalNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Something went wrong while creating the airplane",
      data: {},
      error: {
        description:
          "modalNumber not found in the incoming request in the correct form",
      },
    });
  }

  next();
}

module.exports = {
  validateCreateRequest,
};
