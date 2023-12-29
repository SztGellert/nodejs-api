var express = require('express');
var app = express();
var fs = require('fs');
var _ = require("underscore");

app.get('/', function (req, res) {
    res.send("Node App is running!");
});

app.get('/api/posts/:id?', function (req, res) {
    var posts = JSON.parse(fs.readFileSync('posts.json', 'utf8'));

    var _id = req.params.id;

    if (_id && typeof _id !== "undefined") {
        var filtered = _.where(posts, {id: Number(_id)});
        res.send(filtered);
        return
    }

    res.send(obj);
})

app.listen(3000);