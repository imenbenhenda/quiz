import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeComponent  // Déclare le composant HomeComponent
  ],
  imports: [
    CommonModule,  // Contient des directives Angular de base comme *ngIf, *ngFor
    FormsModule, // Nécessaire pour utiliser ngModel dans le formulaire
    MatInputModule,       // Import du module MatInput pour <input matInput>
    MatButtonModule,      // Import du module MatButton pour <button mat-raised-button>
    MatFormFieldModule, // Import du module MatFormField pour <mat-form-field>
    HttpClientModule, 

  ],
  exports: [
    HomeComponent  // Exporte HomeComponent pour être utilisé ailleurs
  ]
})
export class HomeModule { }
