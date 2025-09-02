const express = require("express");
const router = express.Router();
const chadhavaController = require("../controllers/chadhavaController");

/**
 * @swagger
 * tags:
 *   name: Chadhava
 *   description: Chadhava management APIs
 */

/**
 * @swagger
 * /api/chadhavas:
 *   get:
 *     summary: Get all chadhavas
 *     tags: [Chadhava]
 *     responses:
 *       200:
 *         description: List of all chadhavas
 */
router.get("/", chadhavaController.getAll);

/**
 * @swagger
 * /api/chadhavas/{id}:
 *   get:
 *     summary: Get a chadhava by ID
 *     tags: [Chadhava]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Chadhava ID
 *     responses:
 *       200:
 *         description: A chadhava object
 *       404:
 *         description: Chadhava not found
 */
router.get("/:id", chadhavaController.getById);

/**
 * @swagger
 * /api/chadhavas:
 *   post:
 *     summary: Create a new chadhava
 *     tags: [Chadhava]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               slug:
 *                 type: string
 *               mandir_id:
 *                 type: number
 *               mandir_slug:
 *                 type: string
 *               mandir_name:
 *                 type: string
 *               image:
 *                 type: string
 *               start:
 *                 type: string
 *                 format: date-time
 *               platform:
 *                 type: array
 *                 items:
 *                   type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     image_url:
 *                       type: string
 *               multilingual_data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name: { type: string }
 *                     tag: { type: string }
 *                     short_desc: { type: string }
 *                     desc: { type: string }
 *                     types: { type: string }
 *                     cta_text: { type: string }
 *                     lang_type: { type: string }
 *                     short_name: { type: string }
 *     responses:
 *       201:
 *         description: Chadhava created successfully
 */
router.post("/", chadhavaController.create);

/**
 * @swagger
 * /api/chadhavas/{id}:
 *   put:
 *     summary: Update a chadhava
 *     tags: [Chadhava]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Updated chadhava object
 *       404:
 *         description: Not found
 */
router.put("/:id", chadhavaController.update);

/**
 * @swagger
 * /api/chadhavas/{id}:
 *   delete:
 *     summary: Delete a chadhava
 *     tags: [Chadhava]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Chadhava deleted successfully
 *       404:
 *         description: Not found
 */
router.delete("/:id", chadhavaController.delete);

module.exports = router;
