import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';  // Pour tester le routage
import { CategoryListComponent } from './category-list.component';  // Importation de votre composant
import { By } from '@angular/platform-browser';  // Pour interagir avec le DOM
import { Router } from '@angular/router';  // Pour tester la navigation

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],  // Module de test de routage
      declarations: [CategoryListComponent],  // Déclaration de votre composant à tester
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);  // Injection du service Router pour tester la navigation
    fixture.detectChanges();  // Détection des changements
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Vérification que le composant a bien été créé
  });

  it('should display categories', () => {
    const categoryElements = fixture.debugElement.queryAll(By.css('li'));  // Sélectionne les éléments li
    expect(categoryElements.length).toBe(component.categories.length);  // Vérifie que le nombre d'éléments li correspond à la liste des catégories
  });

  it('should navigate to quiz when a category is clicked', () => {
    spyOn(router, 'navigate');  // Espionner la méthode de navigation du Router
    const categoryElement = fixture.debugElement.query(By.css('li'));  // Sélectionner le premier élément li
    categoryElement.triggerEventHandler('click', null);  // Simuler un clic sur l'élément
    expect(router.navigate).toHaveBeenCalledWith(['/quiz', component.categories[0]]);  // Vérifie que la navigation a eu lieu avec le bon paramètre
  });
});
