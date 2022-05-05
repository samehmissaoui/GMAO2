import { Component, OnInit } from '@angular/core';
import { Technicien } from '../technicien';
import { TechnicienService } from '../technicien.service';

@Component({
  selector: 'app-list-technicien',
  templateUrl: './list-technicien.component.html',
  styleUrls: ['./list-technicien.component.scss']
})
export class ListTechnicienComponent implements OnInit {
  technicien!:Technicien[];
  constructor(private _service:TechnicienService) { }

  ngOnInit(): void {
    this.getTechnicein()

    
  }

  getTechnicein(){
    this._service.getAllTechnicien().subscribe((res)=>{
                this.technicien=res
            })
    }


  deleteTech(id:number){
      this._service.deleteTechnicien(id).subscribe((res)=>{
        this.getTechnicein()
      })}
}
