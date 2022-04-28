const express = require ('express');
const { get_intervention ,add_intervention,get_intervention_byid,
    get_etat_intervention,update_intervention,get_rdv_intervention,
    get_type_intervention,delete_intervention} = require('../controllers/interventionController');

const routeIntervention = express.Router();

routeIntervention.get('/',get_intervention);
routeIntervention.post('/',add_intervention);
routeIntervention.put('/',update_intervention);
routeIntervention.get('/:id',get_intervention_byid);
routeIntervention.delete('/:id',delete_intervention);
routeIntervention.get('/etat/:etat',get_etat_intervention);
routeIntervention.get('/rdv/:rdv',get_rdv_intervention);
routeIntervention.get('/type/:type',get_type_intervention);

module.exports = routeIntervention
