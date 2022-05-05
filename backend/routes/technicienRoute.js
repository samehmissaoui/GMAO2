const express = require ('express')
const {get_technicien,get_technicien_byid,add_technicien,update_technicien,delete_technicien ,count_technicien}
 =require('../controllers/technicienController');


const routeTechnicien = express.Router();

routeTechnicien.get('/',get_technicien);
routeTechnicien.post('/',add_technicien);
routeTechnicien.get('/:id',get_technicien_byid);
routeTechnicien.put('/',update_technicien);
routeTechnicien.delete('/:id',delete_technicien);
routeTechnicien.get('/count/:id',count_technicien);


module.exports = routeTechnicien