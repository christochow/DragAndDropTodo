var express = require('express');
const path = require('path');
var app = express();

app.use(express.static(__dirname + 'dist/drag-and-drop-todo'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/drag-and-drop-todo/index.html'))
});

app.listen(process.env.PORT || 3000,function () {
  console.log('success');
});
