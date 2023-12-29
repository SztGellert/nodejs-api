var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
    res.send("Node App is running!");
});

app.get('/api/posts', function (req, res) {
    var obj = JSON.parse(fs.readFileSync('posts.json', 'utf8'));
    res.send(obj);
})

app.listen(3000);