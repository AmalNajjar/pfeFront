import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


import { CompteUtilisateurComponent } from './crudCompteUtilisateur/compte-utilisateur/compte-utilisateur.component';
import { ConsulterCompteComponent } from './crudCompteUtilisateur/consulter-compte/consulter-compte.component';
import { DeleteCompteComponent } from './crudCompteUtilisateur/delete-compte/delete-compte.component';
import { GestionParametragesComponent } from './crudCompteUtilisateur/gestion-parametrages/gestion-parametrages.component'
import { UpdateCompteComponent } from './crudCompteUtilisateur/update-compte/update-compte.component'



import { CreerStructureComponent } from './crudStructure/creer-structure/creer-structure.component';
import { GestionStructureComponent } from './crudStructure/gestion-structure/gestion-structure.component'
import { DeleteStructureComponent } from './crudStructure/delete-structure/delete-structure.component'
import { ConsulterStructureComponent } from './crudStructure/consulter-structure/consulter-structure.component'
import { UpdateStructureComponent } from './crudStructure/update-structure/update-structure.component'

import { DestructionDocumentComponent } from './traitement1erAge/destruction-document/destruction-document.component';
import { AjouteDateDestructionComponent } from './traitement1erAge/ajoute-date-destruction/ajoute-date-destruction.component';



const routes: Routes = [
  {
    path:'compte-utilisateur',
    component:CompteUtilisateurComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'consulter-compte/:id',
    component:ConsulterCompteComponent
  },
  {
    path:'gestion-parametrages',
    component:GestionParametragesComponent
  },
  {
    path:'update-compte/:id',
    component:UpdateCompteComponent
  },
  {
    path:'delete-compte/:id',
    component:DeleteCompteComponent
  }, 
  { path:'creer-structure',
  component: CreerStructureComponent
  },
   {
    path:'gestion-structure',
    component: GestionStructureComponent
  },
  {
    path:'delete-structure/:id',
    component: DeleteStructureComponent
  },
  {
    path:'consulter-structure/:id',
    component: ConsulterStructureComponent
  },
  {
    path:'update-structure/:id',
    component:UpdateStructureComponent
  },
  {
   path:'destruction-document',
   component: DestructionDocumentComponent
 },{
  path:'ajoute-date-destruction',
  component: AjouteDateDestructionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
