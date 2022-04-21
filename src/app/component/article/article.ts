export class Article {

    id_article:number;
    nom_article :string;
    prix:number;
    description:string;
    constructor(id_article:number,nom_article:string,prix:number,description:string)
    {  
        this.id_article=id_article;
        this.nom_article=nom_article;
        this.prix=prix;
        this.description = description;
    }
}
