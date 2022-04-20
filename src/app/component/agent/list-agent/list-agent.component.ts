import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.scss']
})
export class ListAgentComponent implements OnInit {
  
  agent !:Agent[];
  constructor( private _service:AgentService,private router:Router) { }

  ngOnInit(): void {
    this.getAgent()
  }
  getAgent(){
    this._service.getAllAgent().subscribe((res)=>{
        this.agent=res
        
    })}

    deleteAgent(id:number){
      this._service.deleteAgent(id).subscribe((res)=>{
        this.getAgent()
        
      })
    }
    redirect(){
      this.router.navigate(['component/agent/list']);
  }

}
