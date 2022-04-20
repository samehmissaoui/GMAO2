import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperateurRoutingModule } from './operateur-routing.module';
import { OperateurComponent } from './operateur.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { UpdateOperateurComponent } from './update-operateur/update-operateur.component';
import { ListOperateurComponent } from './list-operateur/list-operateur.component';


@NgModule({
  declarations: [
    OperateurComponent,
    AddComponent,
    UpdateOperateurComponent,
    ListOperateurComponent
  ],
  imports: [
    CommonModule,
    OperateurRoutingModule,
    FormsModule
  ]
})
export class OperateurModule { }
