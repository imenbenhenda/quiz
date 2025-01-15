import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importer CommonModule pour les directives comme *ngIf
import { FormsModule } from '@angular/forms';   // Importer FormsModule pour pouvoir utiliser ngModel
import { QuizComponent } from './quiz.component';  // Importer le composant Quiz

@NgModule({
  declarations: [
    QuizComponent  // Déclarer le composant ici
  ],
  imports: [
    CommonModule,  // Importer CommonModule pour les directives de base comme *ngIf
    FormsModule    // Ajouter FormsModule pour activer ngModel
  ],
  exports: [
    QuizComponent  // Exporter le composant si nécessaire
  ]
})
export class QuizModule { }

