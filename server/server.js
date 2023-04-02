const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./config/database');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
const authRouter = require('./routes/auth.js');


const startApp = async () => {
  try {
    await database();
    app.listen(PORT, () => {
      console.log(`Uygulama ${PORT} portunda çalışıyor.`);
    });
  } catch (err) {
    console.log("Uygulama başlatılırken bir hata oluştu:", err);
  }
};

startApp();

app.use (cors());
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use('/', authRouter);