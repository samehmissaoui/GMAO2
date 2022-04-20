import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTechnicienComponent } from './add-technicien/add-technicien.component';
import { ListTechnicienComponent } from './list-technicien/list-technicien.component';
import { UpdateTechnicienComponent } from './update-technicien/update-technicien.component';

const routes: Routes = [

  {
		path: '',
		children: [
			{
			
				path:'add' ,component:AddTechnicienComponent}
      ]},
      {
			
				path:'list' ,component: ListTechnicienComponent},
      {
			
				path:'update/:id' ,component:UpdateTechnicienComponent }
      ,
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicienRoutingModule { }
