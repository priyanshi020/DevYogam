const poojaService = require('../services/poojaService');

class PoojaController {
  async create(req, res) {
    try {
      const pooja = await poojaService.createPooja(req.body);
      res.status(201).json(pooja);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const poojas = await poojaService.getAllPoojas();
      res.json(poojas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const pooja = await poojaService.getPoojaById(req.params.id);
      if (!pooja) return res.status(404).json({ message: 'Pooja not found' });
      res.json(pooja);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const pooja = await poojaService.updatePooja(req.params.id, req.body);
      if (!pooja) return res.status(404).json({ message: 'Pooja not found' });
      res.json(pooja);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const pooja = await poojaService.deletePooja(req.params.id);
      if (!pooja) return res.status(404).json({ message: 'Pooja not found' });
      res.json({ message: 'Pooja deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new PoojaController();
