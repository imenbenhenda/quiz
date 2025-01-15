import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';  // Importation du module pour les tests de routage
import { MatButtonModule } from '@angular/material/button';  // MatButtonModule pour les tests de boutons
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,  // Ton composant Home
        MatButtonModule,  // MatButtonModule pour le bouton
        RouterTestingModule  // Module pour gérer le routage dans les tests
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Vérifie que le composant est bien créé
  });
});
