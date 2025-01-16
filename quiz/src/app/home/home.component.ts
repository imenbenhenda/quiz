import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';  // Importation du service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  username: string = '';
  password: string = '';
  isRegistered: boolean = false;  // Indicateur de l'état d'inscription

  constructor(private router: Router, private userService: UserService) {}

  // Méthode pour l'inscription
  onRegister() {
    if (this.username && this.password) {
      this.userService.register(this.username, this.password).subscribe(
        (response) => {
          console.log('Inscription réussie', response);
          alert('Inscription réussie ! Vous pouvez maintenant commencer le quiz.');
          this.isRegistered = true;  // Marque l'utilisateur comme inscrit
        },
        (error) => {
          console.error('Erreur lors de l\'inscription', error);
          alert('Erreur lors de l\'inscription. Veuillez réessayer.');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  // Méthode pour démarrer le quiz
  onStart() {
    if (this.isRegistered) {
      console.log('Navigation vers les catégories...');
      this.router.navigate(['/categories']);
    } else {
      alert('Vous devez d\'abord vous inscrire pour commencer le quiz.');
    }
  }
}
