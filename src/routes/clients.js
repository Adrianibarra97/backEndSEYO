const { Router } = require('express');
const router = Router();

const { getClients } = require('../controllers/clients.controllers');

router.route('/')
    .get(getClients);

module.exports =  router;