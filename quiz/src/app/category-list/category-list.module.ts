import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  declarations: [
    CategoryListComponent  // Déclarer le composant ici
  ],
  imports: [
    CommonModule  // Importer CommonModule pour utiliser *ngFor
  ],
  exports: [
    CategoryListComponent  // Exporter le composant pour l'utiliser dans d'autres modules
  ]
})
export class CategoryListModule { }
