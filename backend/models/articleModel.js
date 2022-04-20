export class Article {
    id_article;
    nom_article;
    prix;
    description;
    constructor(id_article,nom_article,prix,description)
    {
        this.id_article=id_article;
        this.nom_article=nom_article;
        this.prix=prix;
        this.description = description;
    }
}