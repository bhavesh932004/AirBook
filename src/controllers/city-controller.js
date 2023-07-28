const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

/* POST : /api/v1/cities
   req.body : {name}
*/
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.message = "Successfully created the city";
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/* GET : /api/v1/cities
    req.body : {}
*/
async function getCities(req, res) {
  try {
    const cities = await CityService.getCities();
    SuccessResponse.message = "Successfully fetched all the cities";
    SuccessResponse.data = cities;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/* GET /api/v1/cities/:id
    req.body : {}
    req.params.id : id
*/
async function getCity(req, res) {
  try {
    const city = await CityService.getCity(req.params.id);
    SuccessResponse.message = "Successfully fetched the city";
    SuccessResponse.data = city;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

/* DELETE /api/v1/cities/:id
    req.body : {}
    req.params.id : id
*/
async function deleteCity(req, res) {
  try {
    const data = await CityService.deleteCity(req.params.id);
    SuccessResponse.message = "Successfully deleted the city";
    SuccessResponse.data = data;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

/* PATCH /api/v1/cities/:id
    req.body : {name}
    req.params.id : id
*/
async function updateCity(req, res) {
  try {
    const data = await CityService.updateCity(req.params.id, {
      name: req.body.name,
    });
    SuccessResponse.message = "Successfully updated the city";
    SuccessResponse.data = data;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
  deleteCity,
  updateCity,
};
