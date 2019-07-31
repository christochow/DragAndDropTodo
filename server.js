var express = require('express');
const path = require('path');
var app = express();

app.use(express.static('./dist/DragAndDropTodo'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/DragAndDropTodo/index.html'))
});

app.listen(process.env.PORT || 3000);
