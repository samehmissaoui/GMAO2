const { addTechnicien, getTechnicien, updateTechnicien, getTechnicienByid, deleteTechnicien ,countTechnicien}
 = require('../services/technicienService');

get_technicien =async (req,res)=>{
    res.send(await getTechnicien())
}
get_technicien_byid =async (req,res)=>{
    let gId=req.params.id
    res.send(await getTechnicienByid(gId))
}
add_technicien =async (req,res)=>{
    let technicien=req.body
    res.send (await addTechnicien(technicien))
}
update_technicien =async (req,res )=>{
    let technicien =req.body
    res.send(await updateTechnicien(technicien))}



 delete_technicien =async (req,res)=>{
        let gId=req.params.id
        res.send(await deleteTechnicien(gId))
    }

 count_technicien =async (req,res)=>{
let gId=req.params.id
    //   console.log('countTechnicien');
        res.send(await countTechnicien())
}

module.exports={get_technicien,get_technicien_byid,add_technicien,update_technicien,delete_technicien ,count_technicien}