const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Genre = require('./models/genre');

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/genres', (req, res) => {
  console.log('====================================');
  console.log(Genre);
  console.log('====================================');
  Genre.getGenres((err, genres) => {
    if (err) return console.log('error in genremodel');

    res.json(genres);
  });
});

app.listen(3000, () => {
  console.log('packager is running on port 3000');
});
