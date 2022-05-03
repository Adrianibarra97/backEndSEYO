const connection = require('../database');

const clientsCtrl = {};

clientsCtrl.getClients = (req, res) => {
    const sql = "SELECT * FROM client";

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if(results.length > 0) {
            res.json(results);
        } else {
            res.json({message: "Not found"});
        }
    });
}

module.exports = clientsCtrl;