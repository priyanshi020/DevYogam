const chadhavaService = require("../services/chadhavaService");

class ChadhavaController {
  async create(req, res) {
    try {
      const chadhava = await chadhavaService.createChadhava(req.body);
      res.status(201).json(chadhava);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const chadhavas = await chadhavaService.getAllChadhavas();
      res.json(chadhavas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const chadhava = await chadhavaService.getChadhavaById(req.params.id);
      if (!chadhava) return res.status(404).json({ error: "Not found" });
      res.json(chadhava);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const chadhava = await chadhavaService.updateChadhava(req.params.id, req.body);
      if (!chadhava) return res.status(404).json({ error: "Not found" });
      res.json(chadhava);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const chadhava = await chadhavaService.deleteChadhava(req.params.id);
      if (!chadhava) return res.status(404).json({ error: "Not found" });
      res.json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ChadhavaController();
