const { addArticle, getArticle, updateArticle,
     getArticleByid, deleteArticle} = require('../services/articleService');

get_article =async (req,res)=>{
    res.send(await getArticle())
}
get_article_byid =async (req,res)=>{
    let gId=req.params.id
    res.send(await getArticleByid(gId))
}
add_article =async (req,res)=>{
    let article=req.body
    res.send (await addArticle(article))
}
update_article =async (req,res )=>{
    let article =req.body
    res.send(await updateArticle(article))}

 delete_article =async (req,res)=>{
        let gId=req.params.id
        res.send(await deleteArticle(gId))
    }

module.exports={get_article,get_article_byid,add_article,update_article,delete_article}