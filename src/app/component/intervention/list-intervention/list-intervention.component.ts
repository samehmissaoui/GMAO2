import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intervention } from '../intervention';
import { InterventionService } from '../intervention.service';

@Component({
  selector: 'app-list-intervention',
  templateUrl: './list-intervention.component.html',
  styleUrls: ['./list-intervention.component.scss']
})
export class ListInterventionComponent implements OnInit {

  intervention !:Intervention[];
  constructor( private _service:InterventionService,private router:Router) { }
  ngOnInit(): void {
    this.getIntervention()    
  }
getIntervention(){
  this._service.getAllIntervention().subscribe((res)=>{
   this.intervention=res
  })
}
deleteIntervention(id:number){
this._service.deleteIntervention(id).subscribe((res)=>{
  this.getIntervention
})
}
redirect(){
  this.router.navigate(['component/intervention/list']);
}


}
