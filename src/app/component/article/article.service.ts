import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';


const httpoptions = { headers :new HttpHeaders
  (
    {
      'Content-Type' : 'application/json'
    }
  )
  } 


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseURL='http://localhost:3000';
  constructor(private _http:HttpClient) { }

  getAllArticle(): Observable<Article[]>{
    return this._http.get<Article[]>(`${this.baseURL}/article`)
  }
  AddArticle(data:Article): Observable<Article>{
    return  this._http.post<Article>(`${this.baseURL}/article`,data,httpoptions)
   }
  updateArticle(data:Article): Observable<Article> {
    return this._http.put<Article>(`${this.baseURL}/article`,data,httpoptions)
  }
  getArticle(id:number): Observable<Article[]>{
    return this._http.get<Article[]>(`${this.baseURL}/article/${id}`)
  }
  deleteArticle(id:number): Observable<Article>{
    return this._http.delete<Article>(`${this.baseURL}/article/${id}`)
  }
}


