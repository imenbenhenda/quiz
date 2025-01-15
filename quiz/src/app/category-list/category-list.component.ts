import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories = [
    { id: 1, name: 'Programmation en Java', description: 'Apprenez les bases de la programmation en Java.' },
    { id: 2, name: 'Structures de données et algorithmes', description: 'Maîtrisez les structures de données et les algorithmes essentiels.' },
    { id: 3, name: 'Systèmes d’exploitation', description: 'Étudiez le fonctionnement des systèmes d’exploitation.' },
    { id: 4, name: 'Bases de données', description: 'Explorez les bases de données relationnelles et non relationnelles.' },
    { id: 5, name: 'Réseaux informatiques', description: 'Comprenez les principes fondamentaux des réseaux.' },
    { id: 6, name: 'Développement web', description: 'Créez des applications web modernes avec Angular.' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCategoryClick(category: any) {
    console.log('Category clicked:', category);
    this.router.navigate(['/quiz', category.id]);  // Naviguer vers le quiz en passant l'ID de la catégorie
  }

}  
