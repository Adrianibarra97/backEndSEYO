const mysql = require('mysql');

// MySql
const connection = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'webSeyo'
});

// Check connect
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
  });

module.exports = connection;