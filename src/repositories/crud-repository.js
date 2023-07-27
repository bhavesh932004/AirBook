class CrudRepository {
  constructor(_model) {
    this.model = _model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      log("delete");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      log("get");
      throw error;
    }
  }

  async getAll() {
    console.log("inside crud repository calling findAll");
    const response = await this.model.findAll();
    return response;
  }

  async update(_id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: _id,
        },
      });
      return response;
    } catch (error) {
      log("update");
      throw error;
    }
  }
}

function log(text, error) {
  console.log(`Something went wrong in the CrudRepository : ${text}`, error);
}

module.exports = CrudRepository;
