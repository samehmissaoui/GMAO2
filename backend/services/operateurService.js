const db = require("../db");

const getOperateur = () => {
  let qr = `select * from operateur`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getOperateurByid = (gId) => {
  let qr = `select * from operateur where id='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addOperateur = (operateur) => {
  let qr = `INSERT INTO operateur( nom_operateur, id_agent) VALUES ('${operateur.nom_operateur}',${operateur.id_agnet})`;
     return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
const updateOperateur = (operateur) => {
  let qr = `UPDATE operateur SET 
  nom_operateur='${operateur.nom_operateur}' ,
    id_agent='${operateur.id_agent}' where id=${operateur.id}`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
const deleteOperateur = (gId) => {
  let qr = `DELETE FROM operateur WHERE id='${gId}'`;

return new Promise((resolve, reject) => {
  db.query(qr, (err, result) => {
    err ? reject(err) : resolve(result);
  });
});
};

module.exports = { addOperateur, getOperateur, updateOperateur,
     getOperateurByid, deleteOperateur };
