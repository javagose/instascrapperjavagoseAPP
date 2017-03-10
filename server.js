var express = require('express');
var server = express();

server.use(express.static(__dirname + 'app/'));
server.set('assets', __dirname + 'assets');
server.set('bower_components', __dirname + 'bower_components');
server.set('components', __dirname + 'components');
server.set('page', __dirname + 'page');
server.set('post', __dirname + 'post');
server.set('search', __dirname + 'search');
server.set('template', __dirname + 'template');
server.set('user', __dirname + 'user');

server.get('/', function(req, res){
    res.render('index.ejs');
});

server.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

//the port you want to use
var port = 3006;
server.listen(port, function(){
    console.log('server listening on port' + port)
});