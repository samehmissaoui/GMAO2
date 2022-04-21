import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicienRoutingModule } from './technicien-routing.module';
import { TechnicienComponent } from './technicien.component';
import { AddTechnicienComponent } from './add-technicien/add-technicien.component';
import { UpdateTechnicienComponent } from './update-technicien/update-technicien.component';
import { ListTechnicienComponent } from './list-technicien/list-technicien.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TechnicienComponent,
    AddTechnicienComponent,
    UpdateTechnicienComponent,
    ListTechnicienComponent
  ],
  imports: [
    CommonModule,
    TechnicienRoutingModule,
    FormsModule
  ]
})
export class TechnicienModule { }
