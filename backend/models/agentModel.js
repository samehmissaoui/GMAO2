
export class Agent{
    id_agent;
    nom;
    matricule;
    adresse;
    tel;
    email;
    password;
    role;
    constructor(id_agent,nom,matricule,
        adresse,tel,email,passeword,role)
        {
            this.id_agent=id_agent;
            this.nom=nom;
            this.matricule;
            this.adresse=adresse;
            this.tel=tel;
            this.email=email;
            this.password=passeword;
            this.role=role;
        }

}