var express = require('express')
var path = require('path');

var app = express();

//app.use(express.static(__dirname + '/src'));
app.use('/build', express.static(__dirname + '/build'));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(3000, '127.0.0.1', () => {
  console.log('started http://localhost:3000')
})