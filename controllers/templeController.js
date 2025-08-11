const templeService = require('../services/templeService');

class TempleController {
  async create(req, res) {
    try {
      const temple = await templeService.createTemple(req.body);
      res.status(201).json(temple);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const temples = await templeService.getAllTemples();
      res.json(temples);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const temple = await templeService.getTempleById(req.params.id);
      if (!temple) return res.status(404).json({ message: 'Temple not found' });
      res.json(temple);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const temple = await templeService.updateTemple(req.params.id, req.body);
      if (!temple) return res.status(404).json({ message: 'Temple not found' });
      res.json(temple);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const temple = await templeService.deleteTemple(req.params.id);
      if (!temple) return res.status(404).json({ message: 'Temple not found' });
      res.json({ message: 'Temple deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new TempleController();
