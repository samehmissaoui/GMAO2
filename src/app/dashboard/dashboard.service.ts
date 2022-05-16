import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
export class DashboardService {
  baseURL='http://localhost:3000';
  
  constructor(private _http:HttpClient) { }

  countTechnicien(): Observable<number>{
    return this._http.get<number>(`${this.baseURL}/technicien/count/`)
  }
}
