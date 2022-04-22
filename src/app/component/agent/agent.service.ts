import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from './agent';

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
export class AgentService {

  baseURL='http://localhost:3000';
  constructor(private _http:HttpClient) { }

  getAllAgent(): Observable<Agent[]>{
    return this._http.get<Agent[]>(`${this.baseURL}/agent`)
  }
  AddAgent(data:Agent): Observable<Agent>{
    return  this._http.post<Agent>(`${this.baseURL}/agent`,data,httpoptions)
   }
  updateAgent(data:Agent): Observable<Agent> {
    return this._http.put<Agent>(`${this.baseURL}/agent`,data,httpoptions)
  }
  getAgent(id:number): Observable<Agent[]>{
    return this._http.get<Agent[]>(`${this.baseURL}/agent/${id}`)
  }
  deleteAgent(id:number): Observable<Agent>{
    return this._http.delete<Agent>(`${this.baseURL}/agent/${id}`)
  }
}


