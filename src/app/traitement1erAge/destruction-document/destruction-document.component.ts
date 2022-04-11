import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StructureService } from 'src/app/service/structure.service';
import { AjouteDateDestructionComponent } from '../ajoute-date-destruction/ajoute-date-destruction.component';
@Component({
  selector: 'app-destruction-document',
  templateUrl: './destruction-document.component.html',
  styleUrls: ['./destruction-document.component.css']
})
export class DestructionDocumentComponent implements OnInit {

  searchValue!:string;
 
  displayedColumns: string[] = ['chapitre_comptable','code_doc','numero_ordre','date_creation','date_destruction','libelle_direction','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 constructor(private service:StructureService ,private _router:Router,private dialog:MatDialog) { }

 ngOnInit(): void {
   this.service.getStructures().subscribe(
   data=>{ console.log("response recieved");
            this.dataSource=new MatTableDataSource(data) ;
            this.dataSource.paginator=this.paginator;
            this.dataSource.sort=this.sort
   },
   error=>console.log("exception occured")
   
   )
   }
  
  updateStructure(id:number){
    this._router.navigate(['update-structure',id]);
  }
 consulterStructure(id:number){
   this._router.navigate(['consulter-structure',id]);
  }
  deleteStructure(id:number){
   this._router.navigate(['delete-structure',id]);
  }
 
 openDialog() {
   this.dialog.open(AjouteDateDestructionComponent, {
    width:'35%'
   });
 }
/*
 openDialogg(item : any) { 

   this.dialog.open(DeleteStructureComponent, {
     width:'41%',
     data : {
       structure : item
     }
   });   
 }

 
 openDialoggg(item : any) {  
   this.dialog.open(ConsulterStructureComponent, {
     width:'41%',
     data : {
       structure : item
     }
   });
 }

   openDialogggg(item : any) {  
     this.dialog.open(UpdateStructureComponent, {
       width:'45%',
       data : {
         structure : item
       }
     });

   }*/
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }
 
}




