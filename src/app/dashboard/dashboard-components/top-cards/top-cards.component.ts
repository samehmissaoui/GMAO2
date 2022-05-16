import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard/dashboard.service';
import {topcard,topcards} from './top-cards-data';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  topcards:topcard[];
nb!:number
  constructor(private _service:DashboardService) { 

    this.topcards=topcards;
  }

  ngOnInit(): void {
  }
countTech(){
  return this._service.countTechnicien().subscribe((res)=>{
    this.nb=res
})
}
}
