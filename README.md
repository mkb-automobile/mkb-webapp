# MKB-Automobile

## Technologies Utilisées

- [Next.js](https://nextjs.org/): Framework React pour le rendu côté serveur.
- [Tailwind CSS](https://tailwindcss.com/): Utilisé pour la conception et la mise en page.
- [Axios](https://axios-http.com/): Bibliothèque HTTP pour effectuer des requêtes.
- [SWR](https://swr.vercel.app/): Gestionnaire d'état de données pour React.
- Autres technologies à venir.

## Configuration du Projet

1. **Clonez le dépôt**
   Via SSH:

   ```bash
   git clone git@github.com:mkb-automobile/mkb-webapp.git
   cd MKB-Automobile
   ```

   Via HTTPS:

   ```bash
   https://github.com/mkb-automobile/mkb-webapp.git
   ```

2. **Installez les dépendances**

Assurez-vous d'avoir PNPM installé. Si ce n'est pas le cas, installez-le globalement avec:

```bash
npm install -g pnpm
```

Ensuite, installez les dépendances du projet:

```bash
pnpm install
```

3. **Lancez le serveur de développement**

   ```bash
   pnpm run dev
   ```

   Le serveur de développement est accessible à l'adresse [http://localhost:3000](http://localhost:3000).

4. **Lancez le serveur de production**

   ```bash
   pnpm run build
   pnpm run start
   ```

5. **Lancez les tests**

   ```bash
   pnpm run test
   ```

6. **Générez la documentation**

   ```bash
   pnpm run docs
   ```

   ## Déploiement avec Vercel

   Le déploiement de l'application est effectué via [Vercel](https://vercel.com/).

   Pour déployer l'application, il suffit de push sur la branche `main` du dépôt. Vercel se chargera de déployer l'application automatiquement.

   Le déploiement de l'application est accessible à l'adresse [https://mkb-webapp.vercel.app/](https://mkb-webapp.vercel.app/).

## Structure du Projet

```bash
. # racine du projet
├── app
    ├── page.tsx # page d'accueil
    ├── about
        ├── page.tsx # page à propos
    ├── contact
        ├── page.tsx # page de contact
    ├── financing
        ├── page.tsx # page de financement
    ├── howwoks
        ├── page.tsx # page de fonctionnement
    ├── personalized
        ├── page.tsx # page de personnalisation
    ├── voitures-occasions
        ├── page.tsx # page d'achat de véhicule
    ├── taking
        ├── page.tsx # page de reprise de véhicule
├── public # fichiers publics
├── src # fichiers sources
    ├── components # composants
        ├── layout
            ├── footer
                ├── Footer.tsx # composant footer
            ├── header
                ├── Header.tsx # composant header
            ├── index.tsx # composant de mise en page
        ├── ui
            ├── buttons # composant bouton

            ├── inputs # composant input
            ├── index.tsx # composant ui
    ├── config # configuration
    ├── constants # constantes
    ├── contexts # contextes
    ├── hooks # hooks
        ├── useSWR.ts # hook SWR
    ├── services # services
    ├── index.tsx # Api externe
    ├── types # types
        ├── index.tsx # types
    ├── utils # utilitaires
        ├── index.tsx
```

## Contribution

Pour contribuer au projet, il suffit de créer une branche à partir de la branche `main` et de créer une pull request. La pull request sera ensuite revue par un membre de l'équipe et sera validée si elle respecte les critères de qualité.
