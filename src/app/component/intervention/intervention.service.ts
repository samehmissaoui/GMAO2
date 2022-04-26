import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intervention } from './intervention';


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
export class InterventionService {
  baseURL='http://localhost:3000';
  constructor(private _http:HttpClient) { }

  getAllIntervention(): Observable<Intervention[]>{
    return this._http.get<Intervention[]>(`${this.baseURL}/intervention`)
  }
  AddIntervention(data:Intervention): Observable<Intervention>{
    return  this._http.post<Intervention>(`${this.baseURL}/intervention`,data,httpoptions)
   }
  updateIntervention(data:Intervention): Observable<Intervention> {
    return this._http.put<Intervention>(`${this.baseURL}/intervention`,data,httpoptions)
  }
  getIntervention(id:number): Observable<Intervention[]>{
    return this._http.get<Intervention[]>(`${this.baseURL}/intervention/${id}`)
  }
  deleteIntervention(id:number): Observable<Intervention>{
    return this._http.delete<Intervention>(`${this.baseURL}/intervention/${id}`)
  }
  getEtat(etat: boolean):Observable<Intervention[]>{
    return this._http.get<Intervention[]>(`${this.baseURL}/intervention/etat/${etat}`)
  }
  getRdv(rdv:boolean):Observable<Intervention[]>{
  return this._http.get<Intervention[]>(`${this.baseURL}/intervention/rdv`)
  }
  getType(type:string):Observable<Intervention[]>{
    return this._http.get<Intervention[]>(`${this.baseURL}/intervention/Type`)
    }
}

