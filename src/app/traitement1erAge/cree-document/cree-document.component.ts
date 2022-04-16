import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { SuiviDocument } from 'src/app/suivi-document';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cree-document',
  templateUrl: './cree-document.component.html',
  styleUrls: ['./cree-document.component.css']
})
export class CreeDocumentComponent implements OnInit {
  suividocument=new SuiviDocument();
  msg='';
  productForm !: FormGroup; 
  constructor(private _service:SuiviDocumentService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      id:['',Validators.required],
      chapitre_comptable:['',Validators.required],
      numero_document:['',Validators.required],
      nombre_De_pages:['',Validators.required],
   
      date_De_creation_Du_Document:['',Validators.required],
      date_d_entree_Du_Document: ['', Validators.required],
      nombre_De_documents :['', Validators.required],
      limite_de_conservation_1ere_age: ['', Validators.required]
  
  })
  }
  public  onSubmit(){ 
    this._service.createDocument(this.suividocument).subscribe(
      data=>{ 
        console.log(this.suividocument);
        console.log("response received");
},
       error =>{   
       console.log("exception occured");
        this.msg=error.error;
     
       }
    )
  
  }
  opensweetalert(){
           
    Swal.fire(
      'crée!',
      'Votre Direction a été crée',
      'success'
    ).then( result => {
      console.log(result);
      if(result.isConfirmed ){
        
      
      // this.suividocument.date_De_creation_Du_Document=;
        //this.suividocument.chapitre_comptable="";       
      // this.suividocument.nombre_De_pages = 
        //this.suividocument.nombre_De_documents=;
        //this.suividocument.limite_de_conservation_1ere_age = "";

      }
    })
 //   window.location.reload()
   

}
//  retour(){
//  window.location.reload()
//}
retour(){
window.location.reload()
}

}
