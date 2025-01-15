import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { QuizComponent } from './quiz/quiz.component';  // Importer QuizComponent
import { provideRouter } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },  // Page d'accueil
  { path: 'categories', component: CategoryListComponent },  // Page des catégories
  { path: 'quiz/:categoryId', component: QuizComponent },  // Route pour le quiz
  { path: '**', redirectTo: '' },  // Redirige vers la page d'accueil pour les routes non trouvées
];
