const Pooja = require('../models/Pooja');

class PoojaService {
  async createPooja(data) {
    return await Pooja.create(data);
  }

  async getAllPoojas() {
    return await Pooja.find();
  }

  async getPoojaById(id) {
    return await Pooja.findById(id);
  }

  async updatePooja(id, data) {
    return await Pooja.findByIdAndUpdate(id, data, { new: true });
  }

  async deletePooja(id) {
    return await Pooja.findByIdAndDelete(id);
  }
}

module.exports = new PoojaService();
