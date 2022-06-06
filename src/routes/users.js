const express = require('express');
const router = express.Router();
const Users = require('../controllers/users');

router.post('/signUp', Users.signUp);

module.exports = router;
