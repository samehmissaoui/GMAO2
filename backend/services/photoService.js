const db = require("../db");

const getPhoto = () => {
  let qr = `select * from photo`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getPhotoByid = (gId) => {
  let qr = `select * from photo where id='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addPhoto = (photo) => {
  let qr = `insert into photo (url)
     VALUES ('${photo.url}')`;
     return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
const updatePhoto= (photo) => {
  let qr = `UPDATE photo SET 
  url='${photo.url}'where id='${photo.id}'` ;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const deletePhoto = (gId) => {
  let qr = `DELETE FROM photo WHERE id='${gId}'`;

return new Promise((resolve, reject) => {
  db.query(qr, (err, result) => {
    err ? reject(err) : resolve(result);
  });
});
};

module.exports = { addPhoto, getPhoto, updatePhoto,
     getPhotoByid, deletePhoto };
