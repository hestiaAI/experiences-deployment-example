# Exemple de déploiement d'hestialabs-experiences

Ceci est un exemple de déploiement de l'application hestialabs-experiences sous forme de fichiers, sur un serveur où pourrait tourner aussi un cms. 

L'exemple est conçu pour être déployé gratuitement chez netlify, un hébérgeur de sites statiques (mais pour l'instant il ne marche qu'en local). Nous simulons un serveur tel que ngninx ou apache par des redirections d'url configurées dans le fichier **netlify.toml**. Nous simulons un cms par les fichiers dans le répertoire *cms* accessibles à l'url **/cms/[nom-du-fichier]**. Dans un déploiement de production, ces urls pointeraient vers un cms qui génère un contenu du même format dynamiquement.

## Répertoires et fichiers
- cms: dossier contenant les fichiers simulant le cms
- experiences: dossier contenant les fichiers de l'application
- config.json: configuration de l'application, ou on peut notamment choisir la langue, indiquer de quelle url télécharger les textes de traduction, et changer les couleurs (n'est pas encore pris en compte)
- netlify.toml: configuration des redirections

## Servir le site localement
Une librairie javascript de netlify permet de servir cet exemple sur son propre ordinateur.

Pour installer l'outil
``` sh
npm install netlify-cli -g
```

Pour lancer le serveur local
``` sh
netlify dev
```

## Déploiement d'une nouvelle version

Lors d'une mise à jour de l'application, il faut mettre à jour le répertoire expériences.

Voici un exemple de déploiement si les nouveaux fichiers se trouvent dans le dossier *../hestialabs-experiences/experiences/dist*
``` sh
rm -rf experiences
cp -r ../hestialabs-experiences/experiences/dist/* experiences
```
