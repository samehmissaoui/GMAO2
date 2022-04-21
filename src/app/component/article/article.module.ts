import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddArticleComponent,
    UpdateArticleComponent,
    ListArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule
  ]
})
export class ArticleModule { }
