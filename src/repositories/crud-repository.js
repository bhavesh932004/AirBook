const { AppError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");

class CrudRepository {
  constructor(_model) {
    this.model = _model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });

    if (!response) {
      throw new AppError("Resource not found", StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async get(data) {
    const response = await this.model.findByPk(data);
    if (!response) {
      throw new AppError("Resource not found", StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  async update(_id, data) {
    const response = await this.model.update(data, {
      where: {
        id: _id,
      },
    });

    if (!response[0]) {
      throw new AppError("Resource not found", StatusCodes.NOT_FOUND);
    }
    return response;
  }
}

module.exports = CrudRepository;
