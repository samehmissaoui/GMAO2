const express = require ('express');
const { get_intervention ,add_intervention,
    get_closed_intervention} = require('../controllers/interventionController');

const routeIntervention = express.Router();

routeIntervention.get('/',get_intervention);
routeIntervention.post('/',add_intervention);
routeIntervention.get('/closed',get_closed_intervention);


module.exports = routeIntervention