import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  article! : Article[]
  constructor( private _service:ArticleService,private router:Router) { }

  ngOnInit(): void {
    this.getArticle()
  }
   getArticle(){
  this._service.getAllArticle().subscribe((res)=>{
  this.article=res
     })
    }


    deleteArticle(id:number){
      this._service.deleteArticle(id).subscribe((res)=>{
        this.getArticle()
        
      })
    }
}
