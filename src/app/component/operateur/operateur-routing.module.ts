import { UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListOperateurComponent } from './list-operateur/list-operateur.component';
import { UpdateOperateurComponent } from './update-operateur/update-operateur.component';

const routes: Routes = [

  {
		path: '',
		children: [
			{
			
				path:'add' ,component:AddComponent }
      ]},
      {
			
				path:'list' ,component:ListOperateurComponent }
      ,	
      {
			
				path:'update/:id' ,component:UpdateOperateurComponent }
      ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperateurRoutingModule { }
