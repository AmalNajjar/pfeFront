import { Component, Input , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StructureService } from 'src/app/service/structure.service';
import { Structure } from 'src/app/structure';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { LieuArchive } from 'src/app/lieu-archive';

@Component({
  selector: 'app-creer-structure',
  templateUrl: './creer-structure.component.html',
  styleUrls: ['./creer-structure.component.css']
})
export class CreerStructureComponent implements OnInit {
  
  structure= new Structure();
  //em:string="";
   msg='';
  productForm !: FormGroup;
  lieux!:LieuArchive[];
  var!:number;
  var1!:number;

  constructor(private location:Location , private _service:StructureService,private _router:Router,private formBuilder : FormBuilder) { }
  ngOnInit(): void {
   
    this.getLieu();
  }
  
 
 public enregStructure(){     
      let j=new Structure();
       j=this.structure
       
      this._service.getLieuById(this.structure.lieu_archivage1ereAge).subscribe(
       res=>j.lieu_archivage1ereAge=res
      
      )  
      this._service.getLieuById(this.structure.lieu_archivage2emeAge).subscribe(
        res=>j.lieu_archivage2emeAge=res
       )
       console.log("hiiii",this.structure);
       console.log(j);
       this._service.registrerCompteFromRemoteS(this.structure).subscribe(     

        data =>{
        console.log("reponse received");  
       },
       error =>{
         console.log("exception occured");
         this.msg=error.error;
       }
    )
  }
 

  getLieu(){
  this._service.getLieu().subscribe(
  res=>this.lieux=res
  )
  }
 
  opensweetalert(){    
    console.log(this.structure.code);    
       Swal.fire(
          'crée!',
          'Votre Compte a été crée :)',
          'success'
         ).then( result => {
          console.log(result);
          if(result.isConfirmed ){
            this.structure.code = "";
            this.structure.libelle = "";       
          /*  this.structure.lieu_archivage1ereAge =""; 
            this.structure.lieu_archivage2emeAge=""; */
          }
        })
  }
  retour(){
    window.location.reload()
  }
}



