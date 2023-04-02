const express = require('express');
const { register, login } = require('../controllers/auth.js');
const router = express.Router();


// register endpoint'ine gelen istekler için register controller'ını çağırır
router.post('/register', register);

// login endpoint'ine gelen istekler için login controller'ını çağırır
router.post('/login', login);



module.exports = router;