import { time } from "console";

export class Agent{
    id_technicien;
    nom;
    matricule;
    adresse;
    tel;
    email;
    password;
    role;
    constructor(id_technicien,nom,matricule,
        adresse,tel,email,passeword,role)
        {
            this.id_technicien=id_technicien;
            this.nom=nom;
            this.matricule;
            this.adresse=adresse;
            this.tel=tel;
            this.email=email;
            this.password=passeword;
            this.role=role;
        }

}