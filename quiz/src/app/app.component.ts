import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importer le module du routage

@Component({
  selector: 'app-root',
  standalone: true,  // Marquer le composant comme standalone
  imports: [RouterModule],  // Importer le module du routage
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-app';
}

