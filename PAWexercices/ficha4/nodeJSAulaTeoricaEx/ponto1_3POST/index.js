const express = require("express");
const url = require("url");
const fs = require("fs");
const querystring = require("querystring");

const app = express();

app.get('/', function(req, res){
    fs.readFile('./index.html', function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
      }
    );
});

app.post('/resposta', function(req, res){
    var data = "";
    req.on('data', function(chunk){ data += chunk})
    req.on('end', function(){
        req.rawBody = data;
        req.jsonBody = querystring.parse(data);
        console.log(req.rawBody);
        console.log(req.jsonBody);
        res.send(`<h1> ${req.jsonBody.nome} foi processado </h1>`);
    })
});

app.listen(3000, () => {
    console.log('Servidor a correr em: http://localhost:3000');
});