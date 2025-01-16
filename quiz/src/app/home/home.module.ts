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
    HomeComponent,  // Déclare le composant HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Nécessaire pour ngModel
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule, // Pour les requêtes HTTP
  ],
  exports: [HomeComponent],  // Exporte HomeComponent pour une utilisation ailleurs
})
export class HomeModule {}
