// src/app/category-list/category-list.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonModule pour pouvoir utiliser *ngFor
import { CategoryListComponent } from './category-list.component'; // Importer le composant CategoryListComponent

@NgModule({
  declarations: [
    CategoryListComponent  // Déclarer le composant ici
  ],
  imports: [
    CommonModule  // Importer CommonModule pour utiliser des directives comme *ngFor
  ],
  exports: [
    CategoryListComponent  // Exporter le composant pour l'utiliser dans d'autres modules si nécessaire
  ]
})
export class CategoryListModule { }
