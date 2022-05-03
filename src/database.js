const mysql = require('mysql');

// MySql
const connection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net', // process.env.HOST || 'localhost',
    user: 'b82f601af3f4db', // process.env.USER || 'root',
    password: '2f6c1900', // process.env.PASSWORD || '',
    database: 'heroku_3d8b9dff9129423', // process.env.DATABASE || 'webSeyo'
    // mysql://b82f601af3f4db:2f6c1900@us-cdbr-east-05.cleardb.net/heroku_3d8b9dff9129423?reconnect=true
  });

// Check connect
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
  });

module.exports = connection;