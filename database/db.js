const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log('Connection established');
  }
});

const getJuror = (id, cb) => {
  connection.query(`SELECT * FROM jurors WHERE id="${id}";`, (err, data) => {
    if (err) {
      console.log('Error, ', err);
    } else {
      cb(null, data);
    }
  });
};

module.exports = getJuror;
