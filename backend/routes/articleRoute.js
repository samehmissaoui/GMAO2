const express = require ('express')
const {get_article,get_article_byid,add_article,update_article,
    delete_article} =require('../controllers/articleController');


const routeArticle = express.Router();

routeArticle.get('/',get_article);
routeArticle.post('/',add_article);
routeArticle.get('/:id',get_article_byid);
routeArticle.put('/',update_article);
routeArticle.delete('/:id',delete_article);

module.exports = routeArticle