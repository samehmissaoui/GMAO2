const {addIntervention,getIntervention,getInterventionByID,
  getEtatIntervention,updateIntervention ,getRDVIntervention,
  getTypeIntervention ,deleteIntervention}=require ("../services/interventionService")

get_intervention = async (req, res )=>{
    res.send (await getIntervention())
}
delete_intervention = async (req, res )=>{
  let num =req.params.id
  console.log('fffn',num);
  res.send (await deleteIntervention(num))
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
  res.send (await getEtatIntervention(etat))
}
get_rdv_intervention =async (req ,res)=>{
  let rdv= req.params.rdv
  res.send (await getRDVIntervention(rdv))
}
get_type_intervention =async (req ,res)=>{
  let type= req.params.type
  res.send (await getTypeIntervention(type))
}

module.exports ={get_intervention,add_intervention,get_etat_intervention,get_intervention_byid
   ,update_intervention,get_rdv_intervention,get_type_intervention,delete_intervention}