import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { Operateur } from '../operateur';
import { OperateurService } from '../operateur.service';

@Component({
  selector: 'app-update-operateur',
  templateUrl: './update-operateur.component.html',
  styleUrls: ['./update-operateur.component.scss']
})
export class UpdateOperateurComponent implements OnInit {

  operateur !:Operateur[];
  id !:number
  //operateur=[{ id:0, nom_operateur:'', id_agnet:0}]
  constructor(private _service:OperateurService ,private router:Router ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.operateur=[{ id:0, nom_operateur:'', id_agent:0}]
    this.id=Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.getOperateurByid()

  }
     getOperateurByid(){
    return this._service.getOperateurByid(this.id).subscribe((res)=>{  
      this.operateur= res
      console.log(this.operateur);
      
    })
   }
     redirect(){
      this.router.navigate(['/component/operateur/list']);

   }
   update(){
     this._service.updaOperateur(this.operateur[0]).subscribe((res)=>{
       this.redirect()
     })

   }
}
