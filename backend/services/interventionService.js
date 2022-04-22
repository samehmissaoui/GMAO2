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
    const getInterventionByID=(num)=>{
        let qr =`select * from intervention where num_intervention ='${num}'`
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
     operation, type, categorie,id_technicien,status,
      etat, date,departement,NRO,id_agent,id_article,id_photo)
     VALUES ('${intervention.jeton}','${intervention.operation}',
     '${intervention.type}','${intervention.categorie}',
     '${intervention.id_technicien}','${intervention.status}',
     '${intervention.etat}','${intervention.date}',
     '${intervention.departement}','${intervention.NRO}','${intervention.id_agent}',
     '${intervention.id_article}','${intervention.id_photo}')`
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

module.exports={addIntervention,getIntervention ,getClosedIntervention,getInterventionByID}