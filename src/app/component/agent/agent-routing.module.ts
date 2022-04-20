import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { UpdateAgentComponent } from './update-agent/update-agent.component';

const routes: Routes = [

  {
		path: '',
		children: [
			{
			
				path:'add' ,component:AddAgentComponent }
      ]},
      {
			
				path:'list' ,component: ListAgentComponent},
      {
			
				path:'update/:id' ,component:UpdateAgentComponent }
      ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
