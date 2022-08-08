# Exemple de déploiement d'hestialabs-experiences

Ceci est un exemple de déploiement de l'application hestialabs-experiences sous forme de fichiers, sur un serveur où pourrait tourner aussi un cms. 

Pour permettre un déploiement gratuit de cet exemple chez netlify, les pages que servirait le cms sont simulées par des fichiers. Le serveur, qui pourrait être quelque chose comme apache ou nginx, est simulé par des redirections configurées dans le fichier netlify.toml. 

L'application

This is an example of deploying hestialabs-experiences as a group of files. 

``` sh
rm -rf experiences
cp -r ../hestialabs-experiences/experiences/dist/ experiences
```

## Faire tourner l'exemple en local

``` sh
npm install netlify-cli -g
```
