const express = require('express');
//const cors = require('cors');

const bodyParser = require('body-parser'); 

const app = express();


// SETTINGS:
app.set('port', process.env.PORT || 4000);


// MIDDLEWARES:
//app.use(cors());
app.use(bodyParser.json());


// ROUTES:
app.use('/api/musicians', require('./routes/musicians'));
app.use('/api/clients', require('./routes/clients'));

module.exports = app;