
export class Operateur {
    id:number;
    nom_operateur:string;
    id_agent:number;

    constructor(id:number,nom_operateur:string,id_agent:number){
   
      this.id=id;
      this.nom_operateur=nom_operateur;
      this.id_agent=id_agent;
    }
}
