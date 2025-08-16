const express = require('express');
const router = express.Router();
const poojaController = require('../controllers/poojaController');
const multer = require("multer");
// const upload = require('../middleware/upload'); 
const upload = multer({ dest: "uploads/" }); 

/**
 * @swagger
 * tags:
 *   name: Poojas
 *   description: Pooja management APIs
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ServiceBrief:
 *       type: object
 *       properties:
 *         lang_type:
 *           type: string
 *           enum: [ENGLISH, HINDI]
 *         title:
 *           type: string
 *         short_desc:
 *           type: string
 *         location:
 *           type: string
 *         tag:
 *           type: string
 *         cta_text:
 *           type: string
 *         mandir_name:
 *           type: string
 *         long_desc:
 *           type: string
 *         short_name:
 *           type: string
 *
 *     Pooja:
 *       type: object
 *       required:
 *         - temple
 *       properties:
 *         slug:
 *           type: string
 *         temple:
 *           type: string
 *           description: Reference to Temple ObjectId
 *         puja_special_tag_hindi:
 *           type: string
 *         puja_special_tag_english:
 *           type: string
 *         duration_in_minutes:
 *           type: integer
 *         logo_image:
 *           type: string
 *           format: binary
 *           description: Single logo image file
 *         ht_logo_image:
 *           type: string
 *           format: binary
 *           description: Single Hindi logo image file
 *         images:
 *           type: array
 *           items:
 *             type: string
 *             format: binary
 *           description: Upload up to 5 images
 *         start_time:
 *           type: string
 *           format: date-time
 *         count:
 *           type: integer
 *         hashtag:
 *           type: array
 *           items:
 *             type: string
 *         redirection_url:
 *           type: string
 *         service_brief:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ServiceBrief'
 */

/**
 * @swagger
 * /api/poojas:
 *   post:
 *     summary: Create a new pooja with file uploads
 *     tags: [Poojas]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Pooja'
 *     responses:
 *       201:
 *         description: Pooja created successfully
 *       400:
 *         description: Bad request
 */
router.post(
  '/',
  upload.fields([
    { name: 'logo_image', maxCount: 1 },
    { name: 'ht_logo_image', maxCount: 1 },
    { name: 'images', maxCount: 5 }
  ]),
  poojaController.create
);

/**
 * @swagger
 * /api/poojas:
 *   get:
 *     summary: Get all poojas
 *     tags: [Poojas]
 *     responses:
 *       200:
 *         description: List of poojas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pooja'
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
 *         description: Pooja ID (MongoDB ObjectId)
 *     responses:
 *       200:
 *         description: Pooja details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pooja'
 *       404:
 *         description: Pooja not found
 */
router.get('/:id', poojaController.getById);

/**
 * @swagger
 * /api/poojas/{id}:
 *   put:
 *     summary: Update a pooja by ID with file uploads
 *     tags: [Poojas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Pooja ID (MongoDB ObjectId)
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Pooja'
 *     responses:
 *       200:
 *         description: Updated pooja details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pooja'
 *       404:
 *         description: Pooja not found
 */
router.put(
  '/:id',
  upload.fields([
    { name: 'logo_image', maxCount: 1 },
    { name: 'ht_logo_image', maxCount: 1 },
    { name: 'images', maxCount: 5 }
  ]),
  poojaController.update
);

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
 *         description: Pooja ID (MongoDB ObjectId)
 *     responses:
 *       200:
 *         description: Pooja deleted successfully
 *       404:
 *         description: Pooja not found
 */
router.delete('/:id', poojaController.delete);

module.exports = router;
