const { addOperateur, getOperateur, updateOperateur,
    getOperateurByid, deleteOperateur ,countOperateur} = require('../services/operateurService');

get_operateur =async (req,res)=>{
   res.send(await getOperateur())
}
get_operateur_byid =async (req,res)=>{
   let gId=req.params.id
   res.send(await getOperateurByid(gId))
}
add_operateur =async (req,res)=>{
   let operateur=req.body
   res.send (await addOperateur(operateur))
}
update_operateur =async (req,res )=>{
   let operateur =req.body
   //console.log(operateur)
   res.send(await updateOperateur(operateur))}

delete_operateur =async (req,res)=>{
       let gId=req.params.id
       res.send(await deleteOperateur(gId))
   }
 count_operateur = async (req,res)=>{
    console.log('cc');
   res.send(await countOperateur())
}

module.exports={get_operateur,get_operateur_byid,add_operateur,
   update_operateur,delete_operateur,count_operateur}