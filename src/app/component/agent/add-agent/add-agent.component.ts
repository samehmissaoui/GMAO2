import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'app/auth/auth.service';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss']
})
export class AddAgentComponent implements OnInit {

  agent = new Agent(0,'',0,'',0,'','','')
  constructor( private _service:AgentService,private router:Router){}
    // ,private _authservice:AuthService) { }

  ngOnInit(): void {
  }
   ajoutAgent(){
  this._service.AddAgent(this.agent).subscribe(()=>{
    // this._authservice.SignUp(this.agent.email ,this.agent.password)
    this.redirect()
     })
    }
     redirect(){
       this.router.navigate(['component/agent/list']);
   }
 
}
