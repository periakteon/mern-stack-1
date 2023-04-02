const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./config/database');
const dotenv = require('dotenv').config();
const app = express();
const authRouter = require('./routes/auth.js');

app.use (cors());
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/', authRouter);

database();

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
