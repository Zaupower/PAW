//comandos interessantes 
//instalar com npm 
//ex: npm install --save express
const express = require('express');
const path = require('path')

//init App
const app = express();
//Load View Engine
//app.render vai utilizar este codigo para aceder a index.pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', function(req, res){
    let articles = [
        {
            id:1,
            title:'Article One',
            author:'Marcelo Carvalho',
            body:'This is article one',
        },
        {
            id:2,
            title:'Article Two',
            author:'Marcelo Carvalho',
            body:'This is article two',
        },
        {
            id:3,
            title:'Article Three',
            author:'Marcelo Carvalho',
            body:'This is article three',
        }
    ]
    // enviar para o browser
    //render refere-se ao pug
    res.render('index', {
        //titulo passado para pug lido em index como, #{title}
        title: 'Title  js app ',
        articles: articles
    });
});

//Add route
//articles/add refere se ao dns que se deve utilizar para
//aceder ao html ou pug "add_articles"
app.get('/articles/add', function(req, res){

    //add_article referese ao nome do ficheiro html que se quer abrir
    res.render('add_article', {
        title:'Articles'
    });
});
app.listen(3000, function(){
    console.log('Server started on port 3000');
})