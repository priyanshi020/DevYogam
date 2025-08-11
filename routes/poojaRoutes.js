const express = require('express');
const router = express.Router();
const poojaController = require('../controllers/poojaController');

/**
 * @swagger
 * /api/poojas:
 *   get:
 *     summary: Retrieve all poojas
 *     tags: [Poojas]
 *     responses:
 *       200:
 *         description: List of poojas
 */
/**
 * @swagger
 * /api/poojas:
 *   post:
 *     summary: Create a new pooja
 *     tags: [Poojas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               subtitle:
 *                 type: string
 *               location:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               benefits:
 *                 type: array
 *                 maxItems: 3
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 *               aboutTemple:
 *                 type: string
 *               images:
 *                 type: array
 *                 maxItems: 5
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Pooja created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', poojaController.create);

/**
 * @swagger
 * /api/poojas:
 *   get:
 *     summary: Get all poojas
 *     tags: [Poojas]
 *     responses:
 *       200:
 *         description: List of poojas
 */
router.get('/', poojaController.getAll);

/**
 * @swagger
 * /api/poojas/{id}:
 *   get:
 *     summary: Get a pooja by ID
 *     tags: [Poojas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Pooja ID
 *     responses:
 *       200:
 *         description: Pooja details
 *       404:
 *         description: Pooja not found
 */
router.get('/:id', poojaController.getById);

/**
 * @swagger
 * /api/poojas/{id}:
 *   put:
 *     summary: Update a pooja by ID
 *     tags: [Poojas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Pooja ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Updated pooja details
 *       404:
 *         description: Pooja not found
 */
router.put('/:id', poojaController.update);

/**
 * @swagger
 * /api/poojas/{id}:
 *   delete:
 *     summary: Delete a pooja by ID
 *     tags: [Poojas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Pooja ID
 *     responses:
 *       200:
 *         description: Pooja deleted successfully
 *       404:
 *         description: Pooja not found
 */
router.delete('/:id', poojaController.delete);

module.exports = router;
