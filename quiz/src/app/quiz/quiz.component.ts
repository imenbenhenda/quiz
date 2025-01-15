import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  categoryId!: number; // ID de la catégorie
  questions: {
    question: string,
    options: string[],
    answer: string,
    selected?: string,
    isCorrect?: boolean,
    answered?: boolean
  }[] = []; // Questions de la catégorie
  score: number = 0;  // Score de l'utilisateur

  // Définir les questions pour chaque catégorie
 // src/app/quiz/quiz.component.ts
categories = {
  'Programmation en Java': [
    { question: 'Quelle est la syntaxe correcte pour déclarer une variable en Java ?', options: ['int x;', 'x = int;', 'var int x;'], answer: 'int x;' },
    { question: 'Quel mot-clé est utilisé pour créer une classe en Java ?', options: ['class', 'create', 'object'], answer: 'class' },
    { question: 'Quel est le bon moyen de déclarer un tableau en Java ?', options: ['int[] arr;', 'arr[] int;', 'array[] int;'], answer: 'int[] arr;' },
    { question: 'Qu\'est-ce qu\'une exception en Java ?', options: ['Un type d\'erreur', 'Un tableau dynamique', 'Une méthode de la classe String'], answer: 'Un type d\'erreur' },
    { question: 'Que fait la méthode finalize() en Java ?', options: ['Libère les ressources de la mémoire', 'Initialise un objet', 'Ferme une connexion'], answer: 'Libère les ressources de la mémoire' },
    { question: 'Quelle est la différence entre == et equals() en Java ?', options: ['== compare les références, equals() compare les valeurs', '== compare les valeurs, equals() compare les références', 'Il n\'y a pas de différence'], answer: '== compare les références, equals() compare les valeurs' },
    { question: 'Qu\'est-ce qu\'un constructeur en Java ?', options: ['Une méthode utilisée pour initialiser un objet', 'Une méthode pour retourner une valeur', 'Un type de variable'], answer: 'Une méthode utilisée pour initialiser un objet' },
    { question: 'Qu\'est-ce que l\'héritage en Java ?', options: ['La capacité d\'une classe à hériter des propriétés d\'une autre classe', 'La capacité d\'une classe à exécuter plusieurs méthodes simultanément', 'Un moyen d\'accéder à une base de données'], answer: 'La capacité d\'une classe à hériter des propriétés d\'une autre classe' },
    { question: 'Qu\'est-ce qu\'une interface en Java ?', options: ['Un contrat qui spécifie les méthodes qu\'une classe doit implémenter', 'Une classe avec des méthodes abstraites', 'Une méthode utilisée pour la gestion des erreurs'], answer: 'Un contrat qui spécifie les méthodes qu\'une classe doit implémenter' },
    { question: 'Qu\'est-ce qu\'un package en Java ?', options: ['Un ensemble de classes organisées par fonctionnalité', 'Un type de variable', 'Un programme principal'], answer: 'Un ensemble de classes organisées par fonctionnalité' },
    { question: 'Qu\'est-ce que la surcharge de méthode en Java ?', options: ['Définir plusieurs méthodes avec le même nom mais des paramètres différents', 'Définir une méthode qui modifie une autre méthode', 'Une méthode qui peut prendre plusieurs valeurs'], answer: 'Définir plusieurs méthodes avec le même nom mais des paramètres différents' },
  ],
  'Structures de données et algorithmes': [
    { question: 'Quelle structure de données suit le principe LIFO (Last In, First Out) ?', options: ['Pile (Stack)', 'File (Queue)', 'Tableau (Array)'], answer: 'Pile (Stack)' },
    { question: 'Quel est le temps de recherche moyen dans une table de hachage ?', options: ['O(1)', 'O(n)', 'O(log n)'], answer: 'O(1)' },
    { question: 'Qu\'est-ce qu\'un algorithme de tri stable ?', options: ['Un algorithme qui conserve l\'ordre relatif des éléments égaux', 'Un algorithme de recherche', 'Un algorithme de compression'], answer: 'Un algorithme qui conserve l\'ordre relatif des éléments égaux' },
    { question: 'Quelle est la complexité temporelle de la recherche binaire ?', options: ['O(n)', 'O(log n)', 'O(n^2)'], answer: 'O(log n)' },
    { question: 'Qu\'est-ce qu\'un arbre binaire de recherche ?', options: ['Un arbre dans lequel chaque nœud a au plus deux enfants', 'Un arbre où les nœuds sont triés de façon croissante', 'Un arbre avec un nombre infini de nœuds'], answer: 'Un arbre dans lequel chaque nœud a au plus deux enfants' },
    { question: 'Dans un tableau, comment accède-t-on à l\'élément d\'index i ?', options: ['array[i]', 'array.get(i)', 'array.getAt(i)'], answer: 'array[i]' },
    { question: 'Qu\'est-ce qu\'un arbre AVL ?', options: ['Un arbre binaire de recherche auto-équilibré', 'Un arbre avec des nœuds de tailles variables', 'Un arbre avec des données non triées'], answer: 'Un arbre binaire de recherche auto-équilibré' },
    { question: 'Qu\'est-ce qu\'une liste chaînée ?', options: ['Une structure de données où chaque élément pointe vers le suivant', 'Une structure de données avec un tableau statique', 'Une liste d\'éléments triés'], answer: 'Une structure de données où chaque élément pointe vers le suivant' },
    { question: 'Quelle est la complexité temporelle de l\'insertion dans une liste chaînée ?', options: ['O(1)', 'O(n)', 'O(log n)'], answer: 'O(1)' },
    { question: 'Qu\'est-ce qu\'un graphe orienté ?', options: ['Un graphe où les arêtes ont une direction', 'Un graphe avec des nœuds de taille variable', 'Un graphe sans boucle'], answer: 'Un graphe où les arêtes ont une direction' },
    { question: 'Qu\'est-ce qu\'une file de priorité ?', options: ['Une structure de données où chaque élément a une priorité', 'Une pile de données', 'Une structure de données ordonnée'], answer: 'Une structure de données où chaque élément a une priorité' },
  ],
  'Développement Web': [
    { question: 'Quelle est la différence entre HTML et HTML5 ?', options: ['HTML5 permet l\'intégration de vidéos et d\'audio', 'HTML5 est un langage de programmation', 'HTML5 est une version plus ancienne d\'HTML'], answer: 'HTML5 permet l\'intégration de vidéos et d\'audio' },
    { question: 'Qu\'est-ce que le CSS ?', options: ['Un langage de style', 'Un langage de programmation', 'Un type de serveur'], answer: 'Un langage de style' },
    { question: 'Qu\'est-ce que le modèle Box en CSS ?', options: ['La façon dont les éléments sont positionnés et espacés', 'Un type d\'animation', 'Un effet visuel'], answer: 'La façon dont les éléments sont positionnés et espacés' },
    { question: 'Que fait la méthode fetch() en JavaScript ?', options: ['Elle envoie des requêtes HTTP', 'Elle remplace le code HTML', 'Elle manipule le DOM'], answer: 'Elle envoie des requêtes HTTP' },
    { question: 'Qu\'est-ce qu\'un DOM ?', options: ['Le Document Object Model', 'Un algorithme de tri', 'Un outil de gestion de base de données'], answer: 'Le Document Object Model' },
    { question: 'Qu\'est-ce qu\'un Responsive Design ?', options: ['Un design qui s\'adapte à la taille de l\'écran', 'Un langage de programmation', 'Une fonctionnalité de navigateur'], answer: 'Un design qui s\'adapte à la taille de l\'écran' },
    { question: 'Qu\'est-ce qu\'une fonction fléchée en JavaScript ?', options: ['Une syntaxe abrégée pour déclarer des fonctions', 'Une nouvelle façon de manipuler le DOM', 'Un type de variable'], answer: 'Une syntaxe abrégée pour déclarer des fonctions' },
    { question: 'Que fait la méthode map() en JavaScript ?', options: ['Elle applique une fonction à chaque élément d\'un tableau et retourne un nouveau tableau', 'Elle filtre les éléments d\'un tableau', 'Elle trie les éléments d\'un tableau'], answer: 'Elle applique une fonction à chaque élément d\'un tableau et retourne un nouveau tableau' },
    { question: 'Quelle est la différence entre les balises <div> et <span> en HTML ?', options: ['<div> est un élément de bloc, <span> est un élément en ligne', '<div> est utilisé pour les liens, <span> pour les images', 'Il n\'y a aucune différence'], answer: '<div> est un élément de bloc, <span> est un élément en ligne' },
    { question: 'Qu\'est-ce que le modèle flexbox en CSS ?', options: ['Une méthode pour aligner et répartir les éléments d\'une page', 'Une méthode de mise en page ancienne', 'Un type de média en ligne'], answer: 'Une méthode pour aligner et répartir les éléments d\'une page' },
    { question: 'Qu\'est-ce que le localStorage en JavaScript ?', options: ['Un objet qui permet de stocker des données localement dans le navigateur', 'Une bibliothèque pour manipuler des fichiers', 'Un serveur distant pour stocker des données'], answer: 'Un objet qui permet de stocker des données localement dans le navigateur' },
  ],
  'Bases de données': [
    { question: 'Qu\'est-ce qu\'une clé primaire dans une base de données ?', options: ['Un identifiant unique pour chaque enregistrement', 'Une valeur utilisée pour rechercher des données', 'Un index pour accélérer les requêtes'], answer: 'Un identifiant unique pour chaque enregistrement' },
    { question: 'Quelle est la différence entre une jointure interne et une jointure externe ?', options: ['La jointure interne renvoie uniquement les lignes correspondantes, la jointure externe renvoie toutes les lignes', 'Les deux sont identiques', 'La jointure externe est plus rapide'], answer: 'La jointure interne renvoie uniquement les lignes correspondantes, la jointure externe renvoie toutes les lignes' },
    { question: 'Qu\'est-ce qu\'un index dans une base de données ?', options: ['Un mécanisme pour accélérer les recherches', 'Un type de table', 'Un mode de compression'], answer: 'Un mécanisme pour accélérer les recherches' },
    { question: 'Que signifie SQL ?', options: ['Structured Query Language', 'Simple Query Language', 'Sequential Query Language'], answer: 'Structured Query Language' },
    { question: 'Qu\'est-ce qu\'une normalisation des bases de données ?', options: ['Le processus de réduction des redondances et d\'optimisation des données', 'Une méthode de sauvegarde des données', 'Un processus de codage des données'], answer: 'Le processus de réduction des redondances et d\'optimisation des données' },
    { question: 'Qu\'est-ce qu\'un sous-select ?', options: ['Une requête imbriquée à l\'intérieur d\'une autre requête', 'Une fonction de mise à jour de données', 'Un type de jointure'], answer: 'Une requête imbriquée à l\'intérieur d\'une autre requête' },
    { question: 'Qu\'est-ce que la clause WHERE en SQL ?', options: ['Elle permet de filtrer les résultats d\'une requête', 'Elle définit la structure d\'une base de données', 'Elle indique la table à modifier'], answer: 'Elle permet de filtrer les résultats d\'une requête' },
    { question: 'Que fait la commande SELECT * en SQL ?', options: ['Elle sélectionne toutes les colonnes d\'une table', 'Elle insère des données dans une table', 'Elle met à jour une ligne d\'une table'], answer: 'Elle sélectionne toutes les colonnes d\'une table' },
    { question: 'Qu\'est-ce qu\'une contrainte UNIQUE dans une base de données ?', options: ['Elle garantit que les valeurs d\'une colonne sont uniques', 'Elle spécifie le type de données', 'Elle est utilisée pour indexer une table'], answer: 'Elle garantit que les valeurs d\'une colonne sont uniques' },
    { question: 'Quelle est la différence entre les bases de données SQL et NoSQL ?', options: ['SQL est relationnelle et structurée, NoSQL est non relationnelle et flexible', 'SQL est plus rapide', 'NoSQL est plus utilisé'], answer: 'SQL est relationnelle et structurée, NoSQL est non relationnelle et flexible' },
    { question: 'Qu\'est-ce qu\'une transaction en base de données ?', options: ['Un ensemble d\'opérations qui sont exécutées ensemble de manière atomique', 'Une requête qui sélectionne des données', 'Une sauvegarde des données'], answer: 'Un ensemble d\'opérations qui sont exécutées ensemble de manière atomique' },
  ],
  'Systèmes d\'exploitation': [
    { question: 'Qu\'est-ce qu\'un processus ?', options: ['Un programme en cours d\'exécution', 'Un fichier système', 'Un composant matériel'], answer: 'Un programme en cours d\'exécution' },
    { question: 'Qu\'est-ce qu\'un thread ?', options: ['Une unité d\'exécution dans un processus', 'Un processus dans un système d\'exploitation', 'Une mémoire cache'], answer: 'Une unité d\'exécution dans un processus' },
    { question: 'Qu\'est-ce que le multitâche ?', options: ['La capacité d\'un système d\'exploitation à exécuter plusieurs processus simultanément', 'Un processus en cours d\'exécution', 'La gestion des erreurs'], answer: 'La capacité d\'un système d\'exploitation à exécuter plusieurs processus simultanément' },
    { question: 'Qu\'est-ce qu\'un système de fichiers ?', options: ['Une méthode d\'organisation et de stockage des fichiers', 'Un processus de gestion de la mémoire', 'Une application qui gère les périphériques'], answer: 'Une méthode d\'organisation et de stockage des fichiers' },
    { question: 'Qu\'est-ce qu\'un noyau (kernel) ?', options: ['Le cœur du système d\'exploitation, qui gère le matériel et les processus', 'Un type de programme', 'Un fichier système'], answer: 'Le cœur du système d\'exploitation, qui gère le matériel et les processus' },
    { question: 'Qu\'est-ce qu\'une mémoire virtuelle ?', options: ['Une technique qui permet d\'utiliser de la mémoire disque comme de la mémoire RAM', 'Un programme de gestion de la mémoire', 'Un cache de disque'], answer: 'Une technique qui permet d\'utiliser de la mémoire disque comme de la mémoire RAM' },
    { question: 'Qu\'est-ce qu\'un périphérique de stockage ?', options: ['Un dispositif permettant de stocker des données', 'Un processeur', 'Un écran'], answer: 'Un dispositif permettant de stocker des données' },
    { question: 'Qu\'est-ce qu\'une commande shell ?', options: ['Une instruction permettant d\'interagir avec le système d\'exploitation', 'Un processus qui gère la mémoire', 'Un programme qui gère les fichiers'], answer: 'Une instruction permettant d\'interagir avec le système d\'exploitation' },
    { question: 'Qu\'est-ce que le swap en informatique ?', options: ['Un mécanisme permettant de déplacer des données entre la mémoire vive et le disque dur', 'Une fonctionnalité de gestion des utilisateurs', 'Un type de processus en arrière-plan'], answer: 'Un mécanisme permettant de déplacer des données entre la mémoire vive et le disque dur' },
    { question: 'Qu\'est-ce qu\'un fichier de configuration ?', options: ['Un fichier qui contient des paramètres pour configurer un système ou une application', 'Un fichier qui contient des données de programme', 'Un fichier qui gère les erreurs'], answer: 'Un fichier qui contient des paramètres pour configurer un système ou une application' },
    { question: 'Qu\'est-ce qu\'un serveur ?', options: ['Un ordinateur ou un programme qui fournit des services à d\'autres ordinateurs', 'Un processus d\'exécution', 'Un périphérique de stockage'], answer: 'Un ordinateur ou un programme qui fournit des services à d\'autres ordinateurs' },
  ],
  'Réseau informatique': [
  { question: 'Qu\'est-ce qu\'un réseau informatique ?', options: ['Un ensemble d\'ordinateurs interconnectés', 'Un programme antivirus', 'Un type de serveur'], answer: 'Un ensemble d\'ordinateurs interconnectés' },
  { question: 'Quelle est la fonction d\'un routeur dans un réseau ?', options: ['Diriger le trafic entre différents réseaux', 'Filtrer les paquets entrants', 'Gérer les adresses IP des périphériques'], answer: 'Diriger le trafic entre différents réseaux' },
  { question: 'Qu\'est-ce qu\'une adresse IP ?', options: ['Un identifiant unique attribué à chaque périphérique sur un réseau', 'Un type de protocole', 'Une méthode de compression de données'], answer: 'Un identifiant unique attribué à chaque périphérique sur un réseau' },
  { question: 'Qu\'est-ce qu\'un VLAN ?', options: ['Un réseau local virtuel', 'Un type de protocole de communication', 'Une technologie de virtualisation'], answer: 'Un réseau local virtuel' },
  { question: 'Quelle est la différence entre IPv4 et IPv6 ?', options: ['IPv6 a un plus grand espace d\'adresses que IPv4', 'IPv6 est utilisé uniquement pour les serveurs', 'Il n\'y a pas de différence'], answer: 'IPv6 a un plus grand espace d\'adresses que IPv4' },
  { question: 'Qu\'est-ce que le modèle OSI ?', options: ['Un modèle de référence pour les réseaux de communication', 'Un type de protocole réseau', 'Une méthode de sécurité informatique'], answer: 'Un modèle de référence pour les réseaux de communication' },
  { question: 'Qu\'est-ce qu\'un pare-feu ?', options: ['Un dispositif de sécurité réseau qui contrôle le trafic entrant et sortant', 'Un outil de compression de données', 'Un type de serveur de fichiers'], answer: 'Un dispositif de sécurité réseau qui contrôle le trafic entrant et sortant' },
  { question: 'Qu\'est-ce qu\'un DNS ?', options: ['Le système de noms de domaine, qui traduit les noms de domaine en adresses IP', 'Un type de réseau sécurisé', 'Un protocole de communication'], answer: 'Le système de noms de domaine, qui traduit les noms de domaine en adresses IP' },
  { question: 'Qu\'est-ce qu\'un proxy ?', options: ['Un serveur intermédiaire qui relaie les requêtes des clients', 'Un type de serveur de base de données', 'Un outil de chiffrement'], answer: 'Un serveur intermédiaire qui relaie les requêtes des clients' },
  { question: 'Qu\'est-ce qu\'un VPN ?', options: ['Un réseau privé virtuel qui sécurise la connexion à Internet', 'Un type de serveur', 'Un protocole de gestion d\'adresse IP'], answer: 'Un réseau privé virtuel qui sécurise la connexion à Internet' },
  { question: 'Qu\'est-ce qu\'un ping ?', options: ['Un outil de diagnostic pour tester la connectivité réseau', 'Un type de réseau sans fil', 'Un protocole de transfert de fichiers'], answer: 'Un outil de diagnostic pour tester la connectivité réseau' },
],

};


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID de la catégorie à partir des paramètres de la route
    this.route.params.subscribe(params => {
      this.categoryId = +params['categoryId'];  // Récupérer l'ID de la catégorie
      console.log('Category ID:', this.categoryId);

      // Charger les questions en fonction de la catégorie
      if (this.categoryId === 1) {
        this.questions = this.categories['Programmation en Java'];
      } else if (this.categoryId === 2) {
        this.questions = this.categories['Structures de données et algorithmes'];
      }else if (this.categoryId === 3) {
        this.questions = this.categories['Systèmes d\'exploitation'];
      }else if (this.categoryId === 4) {
        this.questions = this.categories['Bases de données'];
      }else if (this.categoryId === 5) {
        this.questions = this.categories['Réseau informatique'];
      }
      else if (this.categoryId === 6) {
        this.questions = this.categories['Développement Web'];
      }
    });
  }

  // Fonction pour gérer les réponses et calculer le score
  onAnswer(selectedOption: string, question: any): void {
    if (!question.answered) { // Vérifie si la question a déjà été répondue
      question.selected = selectedOption; // Stocke la réponse sélectionnée
      question.isCorrect = selectedOption === question.answer; // Vérifie si la réponse est correcte
      question.answered = true; // Marque la question comme répondue

    }
    if (question.isCorrect) {
      this.score += 1;  // Ajouter 1 au score si la réponse est correcte
    }
  }

  // Fonction pour afficher le score
  getScore(): string {
    return `Your score is ${this.score} out of ${this.questions.length}`;
  }


}
