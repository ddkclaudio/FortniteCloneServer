const express = require('express');
const router = express.Router();
const Users = require('../controllers/users');

router.post('/signUp', Users.signUp);
router.post('/signIn', Users.signIn);

module.exports = router;
