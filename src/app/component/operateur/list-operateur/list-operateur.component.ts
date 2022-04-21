import { Component, OnInit } from '@angular/core';
import { Operateur } from '../operateur';
import { OperateurService } from '../operateur.service';

@Component({
  selector: 'app-list-operateur',
  templateUrl: './list-operateur.component.html',
  styleUrls: ['./list-operateur.component.scss']
})
export class ListOperateurComponent implements OnInit {

  operateur!:Operateur[];
  constructor( private _service:OperateurService){}


  ngOnInit(): void {
    this.getOperateur()   
  }

  getOperateur(){
    this._service.getAllOperateur().subscribe((res)=>{
                this.operateur=res
            })
    }

    deleteAgent(id:number){
      this._service.deleteOperateur(id).subscribe((res)=>{
        this.getOperateur()
      })}

}
