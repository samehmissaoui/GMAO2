import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technicien } from '../technicien';
import { TechnicienService } from '../technicien.service';

@Component({
  selector: 'app-update-technicien',
  templateUrl: './update-technicien.component.html',
  styleUrls: ['./update-technicien.component.scss']
})
export class UpdateTechnicienComponent implements OnInit {
  technicien !: Technicien [];
  id!:number;
    // technicien = new Technicien (0,'',0,'',0,'','')
    constructor(private _service:TechnicienService ,private router:Router ,private activatedRoute: ActivatedRoute) { }
    ngOnInit(): void {
     this.technicien=[{id_technicien:0,nom:'',matricule:0,adresse:'',tel:0,email:'',password:'', id_agent:0}]
    this.id=Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.getTechnicienByid()
    
    }
    
    getTechnicienByid(){
      return this._service.getTechnicienByid(this.id).subscribe((res)=>{  
        this.technicien= res
        console.log(this.technicien);
      })
     }
  
       redirect(){
         this.router.navigate(['component/technicien/list']); 
     }
  
     update(){
       this._service.updateTechnicien(this.technicien[0]).subscribe((res)=>{
         this.redirect()
       })
     }
     
    }