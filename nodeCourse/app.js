//comandos interessantes 
//instalar com npm 
//ex: npm install --save express
const express = require('express');
const path = require('path')

//adicionar mongoose
//Para Connectar Servidor Node Com Mongo_db DB
const mongoose = require('mongoose');

//Body-Parser
var bodyParser = require('body-parser')

//conectar a base de dados
mongoose.connect('mongodb://localhost/nodekb', { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => console.log("Mongodb connected")) //Check Connection nodekb
.catch(err => console.log(err)); //Check for DB errors
let db = mongoose.connection;

//init App
const app = express();

//Bring in modules
let Article = require('./models/article');

//Load View Engine
//app.render vai utilizar este codigo para aceder a index.pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Body-Parser Midleware 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Home Route
app.get('/', function(req, res){
    Article.find({}, function(err, articles){
        if(err){
            console.log(err);
        }else{

            // enviar para o browser
            //render refere-se ao pug
            res.render('index', {

                //titulo passado para pug lido em index como, #{title}
                title: 'Title  js app ',
                articles: articles
            });
        }
        
    });
});

//Add route(/articles/add)
//articles/add refere se ao dns que se deve utilizar para
//aceder ao html ou pug "add_articles"
app.get('/articles/add', function(req, res){

    console.log('hello')
    //add_article referese ao nome do ficheiro html que se quer abrir
    res.render('add_article', {
        title:'Articles'
    });
    

});

//Add Submit POST route
app.post('/articles/add', function(req, res){

    let article = new Article();
    article.title = req.body.title;
    article.body = req.body.body;
    article.author = req.body.author;
    console.log(article.author);

    article.save(function(err){
        if(err){
            console.log(err);
            return;
        }else{

            res.redirect('/');
        }
    });
});

//informacao do inicio do servidor node
app.listen(3000, function(){
    console.log('Server started on port 3000');
})