const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const database = () => {
  mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('mongoDB bağlantısı başarılı!');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = database;
