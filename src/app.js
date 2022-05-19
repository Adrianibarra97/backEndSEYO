const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const app = express();


// SETTINGS:
app.set('port', process.env.PORT || 8000);


// MIDDLEWARES:
app.use(bodyParser.json());
app.use(cors());


// ROUTES:
app.use('/api/musicians', require('./routes/musicians'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/contact', require('./routes/contact'));

module.exports = app;