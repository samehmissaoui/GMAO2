export class Intervention {
    date;
    jeton;
    operation;
    type;
    categorie;
    id_technicien;
    status;
    etat;
    num_intervention; 
    departement;
    NRO;
    id_article;
    id_agent;
    id_photo;
    RDV;
    constructor( date,
        jeton,
        operation,
        type,
        categorie,
        id_technicien,
        status,
        etat,
        departement,
        NRO,
        id_article,
        id_agent,
        id_photo,RDV){
      this.date=date;
      this.jeton=jeton;
      this.operation= operation;
      this.type= type;
      this.categorie= categorie;
      this.id_technicien= id_technicien;
      this.status= status;
      this.etat= etat
      this.departement=departement;
    this.NRO=NRO;
    this.id_article=id_article;
    this.id_agent=id_agent;
    this.id_photo=id_photo;
    this.RDV=RDV
      
    }
    

}
