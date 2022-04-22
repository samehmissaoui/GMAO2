import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Intervention } from '../intervention';
import { InterventionService } from '../intervention.service';

@Component({
  selector: 'app-update-intervention',
  templateUrl: './update-intervention.component.html',
  styleUrls: ['./update-intervention.component.scss']
})
export class UpdateInterventionComponent implements OnInit {

  intervention ! :Intervention []
  id  :number=0
  constructor(private _service:InterventionService ,private router:Router 
    ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   //this.intervention=[{id_agent:0,nom:'',matricule:0,adresse:'',tel:0,email:'',password:'',role:''}]
    this.id=Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.getInterventionByid()
  }

  redirect(){
    this.router.navigate(['component/intervention/list']);
  }
  getInterventionByid(){
  return this._service.getIntervention(this.id).subscribe((res)=>{  
    this.intervention= res
  })
  
  }
  update(){
  this._service.updateIntervention(this.intervention[0]).subscribe((res)=>{
    
    
    this.redirect()
  })}

}
