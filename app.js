var express = require('express');
var app = express();
var fs = require('fs');
var _ = require("underscore");
app.use(express.static('./'))

app.get('/', function (req, res) {
    res.send("Node App is running!");
});



app.get('/api/posts/:id?/:comments?', function (req, res) {
    const posts = JSON.parse(fs.readFileSync('posts.json', 'utf8'));

    const _id = req.params.id;

    if (_id && typeof _id !== "undefined") {
        const filtered = _.where(posts, {id: Number(_id)});

        if (filtered.length === 0) {
            res.status(400).send('Post doesn\'t exist with the given id');
            return;
        }
        if (req.url.indexOf("comments") > -1) {
            const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
            res.send(comments);
            return
        }

        res.send({"data": filtered});
        return
    }

    res.send({"data": posts});
})

app.get('/api/tags/:name?', function (req, res) {
    const posts = JSON.parse(fs.readFileSync('posts.json', 'utf8'));

    const _name = req.params.name;

    if (_name && typeof _name !== "undefined") {
        const filtered = posts.filter(post =>
            post.tags.filter(t => t.toLowerCase() === _name.toLowerCase()).length > 0
        );
        res.send({"data": filtered});
        return
    }

    res.send({"data": posts});
})

app.listen(3000);