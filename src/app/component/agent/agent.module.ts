import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { UpdateAgentComponent } from './update-agent/update-agent.component';
import { FormsModule } from '@angular/forms';
import { ListAgentComponent } from './list-agent/list-agent.component';


@NgModule({
  declarations: [
    AgentComponent,
    AddAgentComponent,
    UpdateAgentComponent,
    ListAgentComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    FormsModule
  ]
})
export class AgentModule { }
