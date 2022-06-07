const express = require('express');
const Users = require('../controllers/users');

const router = express.Router();

router.post('/signUp', Users.signUp);
router.post('/signIn', Users.signIn);

module.exports = router;
