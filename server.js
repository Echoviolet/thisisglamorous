/**
 * Created by echo on 16/11/10.
 */

var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');
var app =express();
var path =require('path');

app.use(express.static('/' + 'public'));

http.createServer( function (req, res) {
    var pathname = url.parse(req.url).pathname;

    console.log("Request for " + pathname + " received.");

    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);

            res.writeHead(404, {'Content-Type': 'text/html'});
        }else{

            //res.writeHead(200, {'Content-Type': 'text/html'});

            res.write(data);
        }
        res.end();
    });
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');