var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send("Node App is running!");
});
app.listen(3000);