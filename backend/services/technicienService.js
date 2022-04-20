const db = require("../db");

const getTechnicien = () => {
  let qr = `select * from technicien`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getTechnicienByid = (gId) => {
  let qr = `select * from technicien where id_technicien='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addTechnicien = (technicien) => {
  let qr = `INSERT INTO technicien(nom, matricule,
     adresse, tel, email, password)
     VALUES ('${technicien.nom}','${technicien.matricule}',
     '${technicien.adresse}','${technicien.tel}',
     '${technicien.email}','${technicien.password}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updateTechnicien = (technicien) => {
  let qr = `UPDATE technicien SET nom='${technicien.nom}',
    matricule=${technicien.matricule},adresse='${technicien.adresse}',
    tel=${technicien.tel},email='${technicien.email}',password='${technicien.password}'
     WHERE id_technicien='${technicien.id_technicien}'`;
     return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
const deleteTechnicien= (gId) => {
  let qr = `DELETE FROM technicien WHERE id_technicien='${gId}'`;

return new Promise((resolve, reject) => {
  db.query(qr, (err, result) => {
    err ? reject(err) : resolve(result);
  });
});
};

const countTechnicienByAgent =(gId) => {
  let qr = `SELECT COUNT (*) FROM technicien where id_agent='${gId}'`
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}

module.exports = { addTechnicien, getTechnicien, updateTechnicien, getTechnicienByid, deleteTechnicien , countTechnicienByAgent};
