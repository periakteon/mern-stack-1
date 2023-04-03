const mongoose = require('mongoose');


const PostSchema  = new mongoose.Schema({
  user: {
    type: String,
    required: [true, 'Kullanıcı eklemek zorunludur.'],
    trim: true, // boşlukları silmek için
  },
  title: {
    type: String,
    required: [true, 'Başlık eklemek zorunludur.'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description eklemek zorunludur.'],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('Post', PostSchema);