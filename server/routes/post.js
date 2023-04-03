const express = require('express');
const { register, login } = require('../controllers/auth.js');
const router = express.Router();
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/post.js');


// /getPosts endpoint'ine gelen istekler için getPosts controller'ını çağırır
router.get('/getPosts', getPosts);

// /createPost endpoint'ine gelen istekler için createPost controller'ını çağırır
router.post('/createPost', createPost);

// /createPost/:id endpoint'ine gelen istekler için updatePost controller'ını çağırır
router.patch('/updatePost/:id', updatePost);

// /deletePost/:id endpoint'ine gelen istekler için deletePost controller'ını çağırır
router.delete('/deletePost/:id', deletePost);



module.exports = router;