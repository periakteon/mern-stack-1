const PostSchema = require('../models/post.js');

const getPosts = async (req, res) => {
  try {
    const posts = await PostSchema.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { user, title, description } = req.body;
    const newPost = await PostSchema.create({ user, title, description });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await PostSchema.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(update);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await PostSchema.findByIdAndRemove(id);
    res.status(200).json({ message: 'Post başarıyla silindi.' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


module.exports = { getPosts, createPost, updatePost, deletePost };