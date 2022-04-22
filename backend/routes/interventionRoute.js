const express = require ('express');
const { get_intervention ,add_intervention,get_intervention_byid,
    get_ok_intervention,update_intervention,get_Nok_intervention} = require('../controllers/interventionController');

const routeIntervention = express.Router();

routeIntervention.get('/',get_intervention);
routeIntervention.post('/',add_intervention);
routeIntervention.get('/ok',get_ok_intervention);
routeIntervention.get('/Nok',get_Nok_intervention);
routeIntervention.get('/:id',get_intervention_byid);
routeIntervention.put('/',update_intervention);

module.exports = routeIntervention
