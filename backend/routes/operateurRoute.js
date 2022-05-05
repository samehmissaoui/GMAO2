const express = require ('express')
const {get_operateur,get_operateur_byid,add_operateur
    ,update_operateur,delete_operateur,count_operateur} =require('../controllers/operateurController');


const routeOperateur = express.Router();

routeOperateur.get('/',get_operateur);
routeOperateur.post('/',add_operateur);
routeOperateur.get('/:id',get_operateur_byid);
routeOperateur.put('/',update_operateur);
routeOperateur.delete('/:id',delete_operateur);
routeOperateur.get('/count',count_operateur);

module.exports = routeOperateur