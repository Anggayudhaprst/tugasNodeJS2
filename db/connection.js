const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'Ashtray',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database');
});

module.exports = connection;