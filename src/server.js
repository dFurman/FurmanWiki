const express = require('express');
const path = require('path');
const mysql = require('mysql');
var cors = require('cors')

// Create Connection
const db = mysql.createConnection({
  host: 'localhost',
  port: '3300',
  user: 'wikiUser',
  password: 'wikiPassword',
  database: 'wiki',
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySql Connected... :)');
});
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/articles', (req, res) => {
  let sql = 'SELECT * FROM articles'
  db.query(sql, (err, result) => {
    if(err) throw err;
    // console.log(result)
    res.send(JSON.stringify(result));

  })
})

const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});
