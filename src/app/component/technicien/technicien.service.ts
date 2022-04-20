import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technicien } from './technicien';

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
export class TechnicienService {
  
  baseURL='http://localhost:3000';
  constructor(private _http:HttpClient) { }

  getAllTechnicien(): Observable<Technicien[]>{
    return this._http.get<Technicien[]>(`${this.baseURL}/technicien`)
  }
  AddTechnicien(data:Technicien): Observable<Technicien>{
    return  this._http.post<Technicien>(`${this.baseURL}/technicien`,data,httpoptions)
   }

  updateTechnicien(data:Technicien): Observable<Technicien> {
   return this._http.put<Technicien>(`${this.baseURL}/technicien`,data,httpoptions)
   }
getTechnicienByid(id:number): Observable<Technicien[]>{
  return this._http.get<Technicien[]>(`${this.baseURL}/technicien/${id}`)
}
deleteTechnicien(id:number): Observable<Technicien>{
  return this._http.delete<Technicien>(`${this.baseURL}/technicien/${id}`)
}
}
