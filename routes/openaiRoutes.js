const express = require('express');
const { generateImage } = require('../controllers/openaiController');

const router = express.Router();

router.post('/generateimage', (req, res) => {
  generateImage();
});

module.exports = router;
