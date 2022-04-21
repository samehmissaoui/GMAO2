import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
 article = new Article(0,'',0,'')
  constructor( private _service:ArticleService,private router:Router) { }

  ngOnInit(): void {
  }
   ajout(){
  this._service.AddArticle(this.article).subscribe(()=>{
    this.redirect()
     })
    }
     redirect(){
       this.router.navigate(['component/article/list']);
   }
 
}
