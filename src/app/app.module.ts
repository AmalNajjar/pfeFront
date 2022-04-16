import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchfilterPipe } from './searchfilter.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


import { CompteUtilisateurComponent } from './crudCompteUtilisateur/compte-utilisateur/compte-utilisateur.component';
import { ConsulterCompteComponent } from './crudCompteUtilisateur/consulter-compte/consulter-compte.component';
import { GestionParametragesComponent } from './crudCompteUtilisateur/gestion-parametrages/gestion-parametrages.component';
import { UpdateCompteComponent } from './crudCompteUtilisateur/update-compte/update-compte.component';
import { DeleteCompteComponent } from './crudCompteUtilisateur/delete-compte/delete-compte.component';

import { CreerStructureComponent } from './crudStructure/creer-structure/creer-structure.component';
import { DeleteStructureComponent } from './crudStructure/delete-structure/delete-structure.component';
import { UpdateStructureComponent } from './crudStructure/update-structure/update-structure.component';
import { ConsulterStructureComponent } from './crudStructure/consulter-structure/consulter-structure.component';
import { GestionStructureComponent } from './crudStructure/gestion-structure/gestion-structure.component';

import { DestructionDocumentComponent } from './traitement1erAge/destruction-document/destruction-document.component';
import { AjouteDateDestructionComponent } from './traitement1erAge/ajoute-date-destruction/ajoute-date-destruction.component';
import { ListeDemandeVersementComponent } from './traitement1erAge/liste-demande-versement/liste-demande-versement.component';
import { TraiterDemandeComponent } from './traitement1erAge/traiter-demande/traiter-demande.component';
import { CreeDocumentComponent } from './traitement1erAge/cree-document/cree-document.component';
import { TriDocumentComponent } from './traitement1erAge/tri-document/tri-document.component';
import { SuiviDocumentComponent } from './traitement1erAge/suivi-document/suivi-document.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    CompteUtilisateurComponent,
    ConsulterCompteComponent,
    GestionParametragesComponent,
    UpdateCompteComponent,
    SearchfilterPipe,
    DeleteCompteComponent,
    CreerStructureComponent,
    DeleteStructureComponent,
    UpdateStructureComponent,
    ConsulterStructureComponent,
    GestionStructureComponent,
    DestructionDocumentComponent,
    AjouteDateDestructionComponent,
    ListeDemandeVersementComponent,
    TraiterDemandeComponent,
    CreeDocumentComponent,
    TriDocumentComponent,
    SuiviDocumentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
