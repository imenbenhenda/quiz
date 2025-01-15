import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { CategoryListModule } from './category-list/category-list.module';
import { QuizComponent } from './quiz/quiz.component'; // Importer le QuizComponent
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
export const appConfig: ApplicationConfig = {


  providers: [provideRouter(appRoutes),
    provideHttpClient(withFetch())
  ], 
};

