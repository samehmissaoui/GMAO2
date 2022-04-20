const express = require ('express')
const {get_technicien,get_technicien_byid,add_technicien,update_technicien,delete_technicien ,count_technicien_byagnet}
 =require('../controllers/technicienController');


const routeTechnicien = express.Router();

routeTechnicien.get('/',get_technicien);
routeTechnicien.post('/',add_technicien);
routeTechnicien.get('/:id',get_technicien_byid);
routeTechnicien.put('/',update_technicien);
routeTechnicien.delete('/:id',delete_technicien);
routeTechnicien.get('/technicienByAgent/:id',count_technicien_byagnet);


module.exports = routeTechnicien