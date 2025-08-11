const express = require('express');
const router = express.Router();
const templeController = require('../controllers/templeController');

/**
 * @swagger
 * tags:
 *   name: Temples
 *   description: Temple management APIs
 */

/**
 * @swagger
 * /api/temples:
 *   post:
 *     summary: Create a new temple
 *     tags: [Temples]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               location:
 *                 type: string
 *               bhagwan:
 *                 type: string
 *                 description: Which god temple is it
 *               templeDescription:
 *                 type: string
 *               longDescription:
 *                 type: string
 *               images:
 *                 type: array
 *                 maxItems: 5
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Temple created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', templeController.create);

/**
 * @swagger
 * /api/temples:
 *   get:
 *     summary: Retrieve all temples
 *     tags: [Temples]
 *     responses:
 *       200:
 *         description: List of temples
 */
router.get('/', templeController.getAll);

/**
 * @swagger
 * /api/temples/{id}:
 *   get:
 *     summary: Get a temple by ID
 *     tags: [Temples]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Temple ID
 *     responses:
 *       200:
 *         description: Temple details
 *       404:
 *         description: Temple not found
 */
router.get('/:id', templeController.getById);

/**
 * @swagger
 * /api/temples/{id}:
 *   put:
 *     summary: Update a temple by ID
 *     tags: [Temples]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Temple ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Updated temple details
 *       404:
 *         description: Temple not found
 */
router.put('/:id', templeController.update);

/**
 * @swagger
 * /api/temples/{id}:
 *   delete:
 *     summary: Delete a temple by ID
 *     tags: [Temples]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Temple ID
 *     responses:
 *       200:
 *         description: Temple deleted successfully
 *       404:
 *         description: Temple not found
 */
router.delete('/:id', templeController.delete);

module.exports = router;
