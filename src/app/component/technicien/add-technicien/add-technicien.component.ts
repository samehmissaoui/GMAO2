import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technicien } from '../technicien';
import { TechnicienService } from '../technicien.service';

@Component({
  selector: 'app-add-technicien',
  templateUrl: './add-technicien.component.html',
  styleUrls: ['./add-technicien.component.scss']
})
export class AddTechnicienComponent implements OnInit {

  technicien = new Technicien (0,'',0,'',0,'','',0)
  constructor(private _service:TechnicienService ,private router:Router) { }

  ngOnInit(): void {
  }

  ajout(){
    this._service.AddTechnicien(this.technicien).subscribe()
    this.redirect()
     }
   
     redirect(){
       this.router.navigate(['component/technicien/list']);
   }
}
