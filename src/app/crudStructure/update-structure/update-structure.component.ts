import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureService } from 'src/app/service/structure.service';
import { Structure } from 'src/app/structure';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-structure',
  templateUrl: './update-structure.component.html',
  styleUrls: ['./update-structure.component.css']
})
export class UpdateStructureComponent implements OnInit {
  id :any;
  structure:any;
  constructor(private _service:StructureService,private _router:Router,private route:ActivatedRoute
   , private location: Location , @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  this.structure= new Structure();
  if(  this.id=this.route.snapshot.params['id']){
    this._service.getStructureById(this.id).subscribe(
      data=>{console.log(data)
      this.structure=data;},
      error=>console.log(error));
  }}
  enregStructure(){
    
    this._service.updateStructure(this.data.id,this.data.structure).subscribe(
      data=>console.log(data),error=>console.error());
      this.structure= new Structure();
  }

 
  opensweetalert(){
    Swal.fire({
      title:'Êtes-vous sûre?',
      text: "Vous ne pourrez pas récupérer ce fichier imaginaire?",
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'oui,modifiez-le!',
      cancelButtonText:'Non,gardez-le'
        
    }).then((result) => {
      console.log(result)
      if(result.isConfirmed){
        this.enregStructure();
      }
      if (result.value) {
        Swal.fire(
          'modifié!',
          'Votre fichier imaginaire a été modifié',
          'success'
        )
      window.location.reload()
      }else if (result.dismiss==Swal.DismissReason.cancel){
      Swal.fire(
        'Annulé',
        'Votre fichier imaginaire est en sécurité :)',
        'error'
      )
      }
    })
 

  }
  retour(){
    window.location.reload()
  }
  
}

