const {addIntervention,getIntervention,
  getClosedIntervention}=require ("../services/interventionService")

get_intervention = async (req, res )=>{
    res.send (await getIntervention())
}

add_intervention = async (req ,res)=>{
  let intervention =req.body
  res.send (await addIntervention(intervention))

}
get_closed_intervention =async (req ,res)=>{
  res.send (await getClosedIntervention())
}

module.exports ={get_intervention,add_intervention,get_closed_intervention}