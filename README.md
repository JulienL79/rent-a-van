# 🚐 Rent-a-Van Front

Interface front-end du projet **Rent-a-Van**, développé avec **React 19**, **Vite**, **TypeScript** et une architecture **Atomic Design**. Ce projet permet la location et la gestion de véhicules utilitaires via une interface utilisateur moderne et responsive.

---

## 🛠️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/ton-utilisateur/rent-a-van-front.git
cd rent-a-van-front
```
### 2. Installer les dépendances

```bash
npm install
```


### 3. Configuration des variables d’environnement
Créer un fichier .env.local à la racine du projet :
```bash
VITE_API_URL=https://ton-api-url.com
```

### 4. Lancer le projet en développement
```bash
npm run dev
```

### 5. Build pour la production
```bash
npm run build
```

### 6. Lancer le serveur de preview
```bash
npm run preview
```

## 🧩 Architecture & Fonctionnalités
Le projet suit une architecture Atomic Design avec des composants organisés par niveau (Atoms, Molecules, Organisms, Pages).

## 📄 Pages principales
| Page      | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| Home      | Page d’accueil avec navigation vers les articles et moteur de recherche    |
| Profile   | Espace utilisateur pour gérer ses véhicules, réservations et informations  |
| Admin     | Interface d’administration pour gérer les réservations et les véhicules    |
| Search    | Affichage des résultats de recherche pour préparer une réservation         |
| Annexes   | Pages légales, login, register, etc.                                       |



## 📁 Structure du projet
```
src/
├── api/           # Appels API centralisés
├── assets/        # Images, icônes, polices
├── components/    # Composants atomiques et composés
├── pages/         # Pages principales du site
├── routes/        # Définition des routes de navigation
├── store/         # Stores Zustand (auth, alertes, filtres)
├── style/         # Styles globaux SCSS
├── types/         # Déclarations TypeScript
├── utils/         # Fonctions utilitaires
```

## 🧠 Stores Zustand
- useAlertStore : gestion des messages et alertes
- useAuthStore : authentification utilisateur
- useFilterStore : filtres de recherche de véhicules

## 🧱 Stack technique
- React 19
- Vite 6
- TypeScript
- Sass
- Zustand
- React Query
- FontAwesome & Lucide Icons
- Framer Motion
- Flatpickr
- Zod (validation)
- ESLint + TypeScript ESLint

## ✅ Linting
Pour vérifier la qualité du code :
```bash
npm run lint
```






