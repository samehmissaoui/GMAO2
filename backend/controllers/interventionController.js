const {addIntervention,getIntervention,getInterventionByID,
  getEtatIntervention,updateIntervention ,getRDVIntervention,getTypeIntervention}=require ("../services/interventionService")

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
get_etat_intervention =async (req ,res)=>{
  let etat= req.params.etat
  console.log(etat);
  res.send (await getEtatIntervention(etat))
}
get_rdv_intervention =async (req ,res)=>{
  let rdv= req.params.rdv
  console.log(rdv);
  res.send (await getRDVIntervention())
}
get_type_intervention =async (req ,res)=>{
  let type= req.params.type
  console.log(type);
  res.send (await getTypeIntervention())
}

module.exports ={get_intervention,add_intervention,get_etat_intervention,get_intervention_byid ,update_intervention,get_rdv_intervention,get_type_intervention}