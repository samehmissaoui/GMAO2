import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../agent';

import { Operateur } from '../operateur';
import { OperateurService } from '../operateur.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
agent!:Agent[]
  operateur = new Operateur (0,'',0)
  constructor(private _service:OperateurService ,private router:Router) { }

  ngOnInit(): void {
    this.getAgent()
  }

  ajout(){
    this._service.AddOperateur(this.operateur).subscribe()
    this.router.navigate(['/component/operateur/list']);
     }
   
     redirect(){
       this.router.navigate(['/component/operateur/list']);
   }
  
   getAgent(){
    this._service.getAllAgent().subscribe((res)=>{
        this.agent=res
        
    })}
    // Change(event:any, op: Operateur){
    //   op.id_agent= event.target.value;
    
    //   }
  }

  