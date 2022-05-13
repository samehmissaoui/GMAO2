import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Operateur } from './operateur';
import { Agent } from '../agent/agent';

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
export class OperateurService {

  baseURL='http://localhost:3000';
  constructor(private _http:HttpClient) { }

  getAllOperateur(): Observable<Operateur[]>{
    return this._http.get<Operateur[]>(`${this.baseURL}/operateur`)
  }
  AddOperateur(data:Operateur): Observable<Operateur>{
    return  this._http.post<Operateur>(`${this.baseURL}/operateur`,data,httpoptions)
   }
  
  updaOperateur(data:Operateur): Observable<Operateur> {
  return this._http.put<Operateur>(`${this.baseURL}/operateur`,data,httpoptions)
  }
  getOperateurByid(id:number): Observable<Operateur[]>{
  return this._http.get<Operateur[]>(`${this.baseURL}/operateur/${id}`)
  }
  deleteOperateur(id:number): Observable<Operateur>{
  return this._http.delete<Operateur>(`${this.baseURL}/operateur/${id}`)
}
getAllAgent(): Observable<Agent[]>{
  return this._http.get<Agent[]>(`${this.baseURL}/agent`)
}
}