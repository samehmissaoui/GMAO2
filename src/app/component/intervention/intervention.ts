export class Intervention {
    date:Date;
    jeton : number;
    operation:string;
    type:string;
    categorie:string;
    id_technicien:number;
    status:boolean;
    etat:string;
    num_intervention:number; 
    departement;
    NRO:number;
    id_article:number;
    id_agent:number;
    id_photo:string;
    RDV:boolean;
    constructor( date:Date,
        jeton:number,
        operation:string,
        type:string,
        categorie:string,
        id_technicien :number,
        status:boolean,
        etat:string,
        departement:number,
        NRO:number,
        id_article:number,
        id_agent:number,
        id_photo:string,
        num_intervention:number,
        RDV:boolean
        ){
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
    this.num_intervention=num_intervention;
    this.RDV=RDV;
      
    }
    

}
