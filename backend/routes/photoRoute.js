const express = require ('express')
const {get_photo,get_photo_byid,add_photo,update_photo,delete_photo}
 =require('../controllers/photoController');


const routePhoto = express.Router();

routePhoto.get('/',get_photo);
routePhoto.post('/',add_photo);
routePhoto.get('/:id',get_photo_byid);
routePhoto.put('/',update_photo);
routePhoto.delete('/:id',delete_photo);

module.exports = routePhoto