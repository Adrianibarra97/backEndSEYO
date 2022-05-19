const { Router } = require('express');
const router = Router();

const { postContact } = require('../controllers/contact.controllers');

router.route('/')
    .post(postContact);

module.exports =  router;