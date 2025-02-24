const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', (req, res) => {res.sendFile(path.join(__dirname, '..', 'views', 'main.html'));});

router.get('/free_time', (req, res) => {res.sendFile(path.join(__dirname, '..', 'views', 'free_time.html'));});

router.get('/work_experience', (req, res) => {res.sendFile(path.join(__dirname, '..', 'views', 'work_experience.html'));});

router.get('/city', (req, res) =>{res.sendFile(path.join(__dirname, '..', 'views', 'city.html'));});

module.exports = router;
