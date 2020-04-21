let mongoose = require('mongoose');

//Articles Schema
let articleSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required:true
    },
    body:{
        type: String,
        required:true
    }
});

let Articles = module.exports = mongoose.model('Article', articleSchema);
