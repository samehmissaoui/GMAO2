const express = require ('express')
const{get_agent,get_agent_byid,add_agent,update_agent,delete_agent}
 =require('../controllers/agentController');


const routeAgent = express.Router();

routeAgent.get('/',get_agent);
routeAgent.post('/',add_agent);
routeAgent.get('/:id',get_agent_byid);
routeAgent.put('/',update_agent);
routeAgent.delete('/:id',delete_agent);


module.exports = routeAgent