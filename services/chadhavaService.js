const Chadhava = require("../models/Chadhava");

class ChadhavaService {
  async createChadhava(data) {
    return await Chadhava.create(data);
  }

  async getAllChadhavas() {
    return await Chadhava.find()
      .populate("Temple"); 
  }

  async getChadhavaById(id) {
    return await Chadhava.findById(id)
      .populate("Temple"); 
  }

  async updateChadhava(id, data) {
    return await Chadhava.findByIdAndUpdate(id, data, { new: true })
      .populate("Temple");
  }

  async deleteChadhava(id) {
    return await Chadhava.findByIdAndDelete(id)
      .populate("Temple");
  }
}

module.exports = new ChadhavaService();
