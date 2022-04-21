import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.scss']
})
export class UpdateAgentComponent implements OnInit {

  agent !:Agent[];
  id !:number;
  constructor(private _service:AgentService ,private router:Router ,private activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.agent=[{id_agent:0,nom:'',matricule:0,adresse:'',tel:0,email:'',password:'',role:''}]
      this.id=Number(this.activatedRoute.snapshot.paramMap.get('id'))
      this.getAgentByid()
    }
  
    redirect(){
      this.router.navigate(['component/agent/list']);
    }
    getAgentByid(){
    return this._service.getAgent(this.id).subscribe((res)=>{  
      this.agent= res
    })
    
    }
    update(){
    this._service.updateAgent(this.agent[0]).subscribe((res)=>{
      console.log(this.agent);
      
      this.redirect()
    })}

}
