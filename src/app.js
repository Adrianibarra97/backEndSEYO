const express = require('express');
const cors = require('cors');

const app = express();


// SETTINGS:
app.set('port', process.env.PORT || 4000);


// MIDDLEWARES:
app.use(cors());
app.use(express.json());


// ROUTES:
app.use('/api/musicians', require('./routes/musicians'));
app.use('/api/clients', require('./routes/clients'));

module.exports = app;