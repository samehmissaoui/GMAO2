const {  addPhoto, getPhoto, updatePhoto,
    getPhotoByid, deletePhoto} = require('../services/photoService');

get_photo =async (req,res)=>{
   res.send(await getPhoto())
}
get_photo_byid =async (req,res)=>{
   let gId=req.params.id
   res.send(await getPhotoByid(gId))
}
add_photo =async (req,res)=>{
   let photo=req.body
   res.send (await addPhoto(photo))
}
update_photo =async (req,res )=>{
   let photo =req.body
   res.send(await updatePhoto(photo))}

delete_photo =async (req,res)=>{
       let gId=req.params.id
       res.send(await deletePhoto(gId))
   }

module.exports={get_photo,get_photo_byid,add_photo,update_photo,delete_photo}