const {addIntervention,getIntervention,getInterventionByID,
  getokIntervention,updateIntervention ,getNokIntervention}=require ("../services/interventionService")

get_intervention = async (req, res )=>{
    res.send (await getIntervention())
}
get_intervention_byid = async (req, res )=>{
  let num =req.params.id
  res.send (await getInterventionByID(num))
}

add_intervention = async (req ,res)=>{
  let intervention =req.body
  res.send (await addIntervention(intervention))

}
update_intervention = async (req ,res)=>{
  let intervention =req.body
  res.send (await updateIntervention(intervention))

}
get_ok_intervention =async (req ,res)=>{
  console.log('jjjj')
  res.send (await getokIntervention())
}
get_Nok_intervention =async (req ,res)=>{
  
  res.send (await getokIntervention())
}

module.exports ={get_intervention,add_intervention,get_ok_intervention,get_intervention_byid ,update_intervention,get_Nok_intervention}