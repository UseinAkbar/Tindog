const express = require('express');
const request = require('request');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.post('/signup', function(req,res) {
  res.sendFile(__dirname + '/signuptindog.html')
})

app.listen(process.env.PORT || 3000, function() {
  console.log('Server running on port 3000');
})
