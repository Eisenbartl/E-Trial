const express = require('express');
const path = require('path');
const port = 3000;
const db = require('../database/db.js');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.post('/juror', (req, res) => {
  let body = req.body.jurorId;

  db(body, (err, data) => {
    if (err) {
      res.end();
    } else {
      res.send(data[0]);
    }
  });
});

app.listen(port, () => console.log('Server running on port ', port));
