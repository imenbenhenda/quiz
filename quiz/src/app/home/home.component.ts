import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importations pour le routage
import { UserService } from '../services/user.service';  // Importer le service UserService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',  // Lien vers le fichier HTML
  styleUrls: ['./home.component.scss'],  // Lien vers le fichier CSS
})
export class HomeComponent {
  username: string = '';
  password: string = '';
  isRegistered: boolean = false;  // Variable d'état pour savoir si l'utilisateur est inscrit

  showUserList: boolean = false;
  users: any[] = [];  // Déclare la variable users comme tableau pour stocker les utilisateurs

  constructor(private router: Router, private userService: UserService) {}

  // Méthode pour l'inscription
  onRegister() {
    if (this.username && this.password) {
      this.userService.register(this.username, this.password).subscribe(
        (response) => {
          console.log('Inscription réussie', response);
          alert('Inscription réussie ! Vous pouvez maintenant commencer le quiz.');
          this.isRegistered = true;  // Marquer l'utilisateur comme inscrit
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

  // Méthode pour commencer le quiz (si l'utilisateur est inscrit)
  onStart() {
    if (this.isRegistered) {
      console.log('Navigating to Categories...');
      this.router.navigate(['/categories']);  // Redirige vers la page des catégories
    } else {
      alert('Vous devez d\'abord vous inscrire pour commencer le quiz.');
    }
  }

  // Méthode pour récupérer les utilisateurs
  
}
