const connection = require('../database');

const contactCtrl = {};

contactCtrl.postContact = (req, res) => {
    // I'm missing: Send email and save it in the database if the client allows it
    res.json({message: "mail Guardado: " + req.params});
}

module.exports = contactCtrl;