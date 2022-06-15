const db = require("../db");

const getIntervention = () => {
  let qr = `select * from intervention`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

const getInterventionByID = (num) => {
  let qr = `select * from intervention where num_intervention ='${num}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addIntervention = (intervention) => {
  let qr = `INSERT INTO intervention(jeton,
     operation, type, categorie,id_technicien,status,
      etat, date,departement,NRO,id_agent,id_article,id_photo,RDV)
     VALUES ('${intervention.jeton}','${intervention.operation}',
     '${intervention.type}','${intervention.categorie}',
     '${intervention.id_technicien}','${intervention.status}',
     '${intervention.etat}','${intervention.date}',
     '${intervention.departement}','${intervention.NRO}','${intervention.id_agent}',
     '${intervention.id_article}','${intervention.id_photo}','${intervention.RDV}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

const updateIntervention = (intervention) => {
  let qr = `UPDATE intervention SET id_agent=${intervention.id_agent},
    id_technicien=${intervention.id_technicien},id_photo=${intervention.id_photo},
    operation='${intervention.operation}',type='${intervention.type}',
    categorie='${intervention.categorie}',status='${intervention.status}',
    etat='${intervention.etat}',date='${intervention.date}',
    departement='${intervention.departement}',RDV='${intervention.RDV}' ,
    NRO='${intervention.NRO}',jeton=${intervention.jeton},id_article=${intervention.id_article}
    where num_intervention=${intervention.num_intervention}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

const getEtatIntervention = (etat) => {
  let qr = `select * from intervention where etat = '${etat}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getRDVIntervention = (rdv) => {
  let qr = `select * from intervention where RDV =${rdv}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getTypeIntervention = (type) => {
  let qr = `select * from intervention where type ='${type}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const deleteIntervention = (num) => {
  console.log(num);
  let qr = `DELETE FROM intervention WHERE  num_intervention='${num}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const countIntervention = () => {

  let qr = `SELECT COUNT (*) from intervention `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const countInterventionEtat = (etat) => {
    
    let qr = `SELECT COUNT (*) from intervention where etat='${etat}'`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
  

module.exports = {
  addIntervention,
  getIntervention,
  getEtatIntervention,
  getInterventionByID,
  updateIntervention,
  getRDVIntervention,
  getTypeIntervention,
  deleteIntervention,
  countIntervention,
  countInterventionEtat
};
