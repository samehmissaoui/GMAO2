const db =require ('../db')

const getIntervention=()=>{
    let qr =`select * from intervention`
    return new Promise((resolve,reject)=>{
        db.query(qr,(err,result)=>{
    (err)?
        reject(err):
        resolve(result);
      
    })
    })
    
}
const addIntervention=(intervention)=>{
    let qr=`INSERT INTO intervention( jeton,
     operation, type, categorie,status,
      etat, date,departement,NRO)
     VALUES ('${intervention.jeton}','${intervention.operation}',
     '${intervention.type}','${intervention.categorie}',
     '${intervention.technicien}','${intervention.status}',
     '${intervention.etat}','${intervention.date}','${intervention.departement}','${intervention.NRO}')`
    return new Promise((resolve,reject)=>{
        db.query(qr,(err,result)=>{
    (err)?
        reject(err):
    
        resolve(result);
         
    })
    })
    
}

const getClosedIntervention=()=>{
    let qr=`select * from intervention where etat = 1`

    return new Promise((resolve,reject)=>{
        db.query(qr,(err,result)=>{
    (err)?
        reject(err):
    
        resolve(result);
         
    })
    })
}

module.exports={addIntervention,getIntervention ,getClosedIntervention}