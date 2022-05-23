const connection = require('../database');

const musiciansCtrl = {};

musiciansCtrl.getMusicians = (req, res) => {
    const sql = "SELECT * FROM musician ORDER BY category";

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if(results.length > 0) {
            res.json(results);
        } else {
            res.json({message: "Not found"});
        }
    });
}

module.exports = musiciansCtrl;