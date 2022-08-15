# Exemple de déploiement d'hestialabs-experiences

Ceci est un exemple de déploiement de l'application hestialabs-experiences sous forme de fichiers, sur un serveur où pourrait tourner aussi un cms. Il est déployé [ici](https://deployment-example-experiences.netlify.app/)

L'exemple est conçu pour être déployé gratuitement chez netlify, un hébergeur de sites statiques. Nous simulons un serveur tel que ngninx ou apache par des redirections d'url configurées dans le fichier **netlify.toml**. Nous simulons un cms par les fichiers dans le répertoire *cms* accessibles à l'url **/cms/[nom-du-fichier]**. Dans un déploiement de production, ces urls pointeraient vers un cms qui génère un contenu du même format dynamiquement.

Le textes se trouvent notamment dans le fichier **cms/i18-messages.json**, ou est configuré un exemple du texte qui introduit l'expérience facebook:

``` json
...
  "fr": {
  ...
    "experiences": {
      "facebook": {
        "intro": {
          "dataPortalMessage": "Ce texte est configuré dans le fichier <a href=\"/cms/i18n-messages.json\">/cms/i18n-messages.json</a>"
        }
        ...
```


## Répertoires et fichiers
- cms: dossier contenant les fichiers simulant le cms
- experiences: dossier contenant les fichiers de l'application
- config.json: configuration de l'application, ou on peut notamment choisir la langue, indiquer de quelle url télécharger les textes de traduction, et changer les couleurs du thème.
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

Lors d'une mise à jour de l'application, il faut mettre à jour le répertoire experiences. L'ensemble des fichiers à mettre dans ce dossier constitue le livrable d'hestia.ai

Voici un exemple de déploiement si les nouveaux fichiers se trouvent dans le dossier *../hestialabs-experiences/experiences/dist*
``` sh
rm -rf experiences
cp -r ../hestialabs-experiences/experiences/dist experiences
```

### Commande de build pour créer experiences

Cette étape sera effectuée par hestia.ai. L'ensemble de fichiers livrables est généré dans le projet [hestialabs-experiences](https://github.com/hestiaAI/hestialabs-experiences) selon les instructions de déploiement qui s'y trouvent. La commande de build utilisée pour cet exemple est celle-ci:

``` sh
BASE_URL="https://deployment-example-experiences.netlify.app/" CONFIG_NAME="barebones" npm run build
```


