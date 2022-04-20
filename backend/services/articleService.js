const db = require("../db");

const getArticle = () => {
  let qr = `select * from article`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getArticleByid = (gId) => {
  let qr = `select * from article where id_article='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addArticle = (article) => {
  let qr = `INSERT INTO article(nom_article, prix, description)
    VALUES ('${article.nom-article}','${article.prix}',
     '${article.description}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updateArticle = (article) => {
  let qr = `UPDATE article SET
  nom_article='${article.nom_article}',
    prix='${article.prix}'
    ,description='${article.description}'
     where id_article='${article.id_article}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const deleteArticle = (gId) => {
  let qr = `DELETE FROM article WHERE id_article='${gId}'`;
return new Promise((resolve, reject) => {
  db.query(qr, (err, result) => {
    err ? reject(err) : resolve(result);
  });
});
};

module.exports = { addArticle, getArticle, updateArticle, getArticleByid, deleteArticle };
