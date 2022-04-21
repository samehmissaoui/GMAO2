import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss']
})
export class UpdateArticleComponent implements OnInit {

  article !:Article[]
  id !:number;
  constructor( private _service:ArticleService,private router:Router,private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
    this.article=[{id_article:0,nom_article:'',prix:0,description:''}]
    this.id=Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.getArticleByid()
  }
   update(){
  this._service.updateArticle(this.article[0]).subscribe(()=>{
    this.redirect()
     })
    }
     redirect(){
       this.router.navigate(['component/article/list']);
   }

   getArticleByid(){
     this._service.getArticle(this.id).subscribe((res)=>{
       this.article=res
     })
   }

}
