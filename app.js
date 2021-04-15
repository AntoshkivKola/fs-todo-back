const express = require('express');
const router = require('./routes');
const cors = require('cors');
const errorHandler = require('./middlewares/error.handlers');
const userErrorHandler = require('./middlewares/userError.handlers')

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api', router);
app.use(userErrorHandler);
app.use(errorHandler);

module.exports = app;
