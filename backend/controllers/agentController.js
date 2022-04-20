const {addAgent,getAgent,updateAgent,getAgentByid,deleteAgent} = require('../services/agentService');

get_agent =async (req,res)=>{
    res.send(await getAgent())
}
get_agent_byid =async (req,res)=>{
    let gId=req.params.id
    res.send(await getAgentByid(gId))
}
add_agent =async (req,res)=>{
    let agent=req.body
  
    res.send (await addAgent(agent))
}
update_agent =async (req,res )=>{
    let agent =req.body
    console.log('contoller',this.agent);
    res.send(await updateAgent(agent))}

 delete_agent =async (req,res)=>{
        let gId=req.params.id
        res.send(await deleteAgent(gId))
    }

module.exports={get_agent,get_agent_byid,add_agent,update_agent,delete_agent}