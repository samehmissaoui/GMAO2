const db = require("../db");

const getAgent = () => {
  let qr = `select * from agent`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getAgentByid = (gId) => {
  let qr = `select * from agent where id_agent ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addAgent = (agent) => {
  let qr = `INSERT INTO agent(nom, matricule, adresse, tel, email, password, role)
     VALUES ('${agent.nom}','${agent.matricule}',
     '${agent.adresse}','${agent.tel}',
     '${agent.email}','${agent.password}',
     '${agent.role}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updateAgent = (agent) => {
  console.log('servise',agent.id);
  let qr = `UPDATE agent SET nom='${agent.nom}',
    matricule='${agent.matricule}',adresse='${agent.adresse}',
    tel='${agent.tel}',email='${agent.email}'
    ,password='${agent.password}',
    role='${agent.role}' WHERE id_agent=${agent.id_agent}`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
const deleteAgent = (gId) => {
  let qr = `delete from agent WHERE id_agent='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = { addAgent, getAgent, updateAgent, getAgentByid, deleteAgent };
