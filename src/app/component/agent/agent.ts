export class Agent {

    id_agent:number;
    nom:string;
    matricule:number;
    adresse:string;
    tel:number;
    email:string;
    password:string;
    role:string;
    
 constructor(id_agent:number,nom:string,matricule:number,
   adresse:string,tel:number,
   email:string,password:string,role:string){
     this.id_agent=id_agent;
     this.nom=nom;
     this.matricule=matricule;
     this.adresse=adresse;
     this.tel=tel;
     this.email=email;
     this.password=password;
     this.role=role;

 }   
}
