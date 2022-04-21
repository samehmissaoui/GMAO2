import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss']
})
export class AddAgentComponent implements OnInit {

  agent = new Agent(0,'',0,'',0,'','','')
  constructor( private _service:AgentService,private router:Router) { }

  ngOnInit(): void {
  }
   ajoutAgent(){
  this._service.AddAgent(this.agent).subscribe(()=>{
    this.redirect()
     })
    }
     redirect(){
       this.router.navigate(['component/agent/list']);
   }
 
}
