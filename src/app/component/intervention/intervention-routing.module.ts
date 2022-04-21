import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInterventionComponent } from './add-intervention/add-intervention.component';
import { ListInterventionComponent } from './list-intervention/list-intervention.component';
import { UpdateInterventionComponent } from './update-intervention/update-intervention.component';

const routes: Routes = [
  
  {
		path: '',
		children: [
			{
			
				path:'add' ,component:AddInterventionComponent }
      ]},
      {
			
				path:'list' ,component:ListInterventionComponent }
      ,	
      {
				path:'update/:id' ,component:UpdateInterventionComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterventionRoutingModule { }
