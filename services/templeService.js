const Temple = require('../models/Temple');

class TempleService {
  async createTemple(data) {
    return await Temple.create(data);
  }

  async getAllTemples() {
    return await Temple.find();
  }

  async getTempleById(id) {
    return await Temple.findById(id);
  }

  async updateTemple(id, data) {
    return await Temple.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteTemple(id) {
    return await Temple.findByIdAndDelete(id);
  }
}

module.exports = new TempleService();
