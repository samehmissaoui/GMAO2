export class Technicien {
    id_technicien:number;
    nom:string;
    matricule:number;
    adresse:string;
    tel:number;
    email:string;
    password:string;
    id_agent:number;  
 constructor(id_technicien:number,nom:string,matricule:number,
   adresse:string,tel:number,
   email:string,password:string , id_agent:number){
     this.id_technicien=id_technicien;
     this.nom=nom;
     this.matricule=matricule;
     this.adresse=adresse;
     this.tel=tel;
     this.email=email;
     this.password=password;
     this.id_agent =id_agent
 } 
}
