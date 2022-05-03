const { Router } = require('express');
const router = Router();

const { getMusicians } = require('../controllers/musicians.controllers');

router.route('/')
    .get(getMusicians);

module.exports =  router;