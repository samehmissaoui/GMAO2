import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intervention } from '../intervention';
import { InterventionService } from '../intervention.service';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.scss']
})
export class AddInterventionComponent implements OnInit {

  intervention = new Intervention(new Date(),0,'','','',0,true,'',0,0,0,0,'',0,true)
  constructor( private _service:InterventionService,private router:Router) { }

  ngOnInit(): void {
  }
  ajoutIntervention(){
    this._service.AddIntervention(this.intervention).subscribe(()=>{
      this.redirect()
       })
      }
       redirect(){
         this.router.navigate(['component/intervention/list']);
     }
}
