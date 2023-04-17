var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Happy coding!');
});
var port=80
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
