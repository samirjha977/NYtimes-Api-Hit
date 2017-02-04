var express = require('express');
var app = express();
var routes = require('./routes')

app.use('/', routes);


app.get('/', function (req, res) {
  res.send('NYtimes News')
});
app.listen(3000, function () {
  console.log('server running on 3000');
});
