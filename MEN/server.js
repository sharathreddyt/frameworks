const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

var db;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
  'mongodb://sharathreddy:Sharath123@ds263408.mlab.com:63408/men',
  (err, client) => {
    if (err) return console.log(err);
    db = client.db('men'); // whatever your database name is
    app.listen(3000, () => {
      console.log('listening on 3000');
    });
  },
);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  });
});
