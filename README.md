# IPL-social

## Informations personnelles
- Nom: Marica 
- Prénom: Livius Daniel
- Email Vinci: livius.marica@student.vinci.be

## Lien du projet
[Lien vers le projet GitHub](https://github.com/DanielMarica/IPL-social.git)

## Description du projet
IPL-social est une application qui implémente une fonction de validation de mot de passe sécurisée. 

Le projet utilise les technologies suivantes :
- JavaScript
- Jasmine
- GitHub Actions (pour CI/CD)

### Fonctionnalité principale : Validation de mot de passe
La fonction `passwordChecker.js` vérifie qu'un mot de passe respecte les critères suivants :
- Minimum 8 caractères
- Au moins un caractère spécial
- Au moins un chiffre
- Ne peut pas contenir "IPL" (insensible à la casse)

## Tests
Le projet suit une approche TDD (Test-Driven Development). Pour exécuter les tests :
```bash
npm run test (avec jasmine)
```

Les tests sont définis dans `passwordChecker.test.js` et vérifient tous les cas d'utilisation de la fonction de validation.

## Pipeline CI
Ce projet utilise GitHub Actions pour l'intégration continue. La pipeline s'exécute automatiquement lors d'une Pull Request vers la branche main et effectue :
- L'installation des dépendances
- L'exécution des tests unitaires
- La vérification du format du code

## Installation et utilisation
```bash
git clone https://github.com/DanielMarica/IPL-social.git
cd IPL-social
npm install
```

