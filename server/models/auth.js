const mongoose = require('mongoose');


const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Kullanıcı adı eklemek zorunludur.'],
    unique: true,
    minlength: 3,
    trim: true, // boşlukları silmek için
  },
  email: {
    type: String,
    required: [true, 'Email adresi eklemek zorunludur.'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Şifre eklemek zorunludur.'],
    minlength: 6,
    select: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('Auth', AuthSchema);