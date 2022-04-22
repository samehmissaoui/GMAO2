import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterventionRoutingModule } from './intervention-routing.module';
import { ListInterventionComponent } from './list-intervention/list-intervention.component';
import { AddInterventionComponent } from './add-intervention/add-intervention.component';
import { UpdateInterventionComponent } from './update-intervention/update-intervention.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListInterventionComponent,
    AddInterventionComponent,
    UpdateInterventionComponent
  ],
  imports: [
    CommonModule,
    InterventionRoutingModule,
    FormsModule
  ]
})
export class InterventionModule { }
