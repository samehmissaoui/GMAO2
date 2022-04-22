const {addIntervention,getIntervention,getInterventionByID,
  getClosedIntervention}=require ("../services/interventionService")

get_intervention = async (req, res )=>{
    res.send (await getIntervention())
}
get_intervention_byid = async (req, res )=>{
  let num =req.params.id
  res.send (await getInterventionByID())
}

add_intervention = async (req ,res)=>{
  let intervention =req.body
  res.send (await addIntervention(intervention))

}
get_closed_intervention =async (req ,res)=>{
  res.send (await getClosedIntervention())
}

module.exports ={get_intervention,add_intervention,get_closed_intervention,get_intervention_byid}