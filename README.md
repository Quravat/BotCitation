# 📜 Citation Bot

Bienvenue sur **Citation Bot** ! 🎉 Ce bot Discord permet d'afficher des citations inspirantes au hasard, de les ajouter et de les partager avec vos amis sur votre serveur Discord. Parfait pour rendre votre serveur plus inspirant et motivant ! 🌟

## ✨ Fonctionnalités

- **Citation aléatoire** : Affiche une citation inspirante au hasard chaque fois que vous utilisez la commande `!citation`.
- **Ajout de citations** : Ajoutez vos propres citations en les ajoutant dans le `citations.json`.

## 🔧 Technologies Utilisées

- **Node.js** – Le langage principal utilisé.
- **Discord.js v14** – Pour interagir avec l'API de Discord.
- **JavaScript** – Pour la logique et la gestion des commandes et des messages.

## 🛠️ Installation et Utilisation

### Prérequis

Assurez-vous d'avoir **Node.js** installé sur votre système. Si ce n'est pas le cas, téléchargez et installez-le depuis le [site officiel de Node.js](https://nodejs.org/).

### Étapes d'Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/Quravat/CitationBot.git
   cd CitationBot
   ```

2. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```

3. Créez un fichier `config.json` dans le répertoire principal et ajoutez votre token de bot Discord :
   ```json
   {
     "token": "token"
   }
   ```

4. Créez un fichier `citations.json` et ajoutez des citations sous ce format :
   ```json
   [
     { "text": "La vie est ce que tu en fais.", "author": "Eleanor Roosevelt" },
     { "text": "L'avenir appartient à ceux qui croient à la beauté de leurs rêves.", "author": "Eleanor Roosevelt" },
     { "text": "Le seul véritable échec est celui dont vous ne vous relevez pas.", "author": "John Madden" }
   ]
   ```

### Comment Lancer

1. Démarrez le bot :
   ```bash
   node index.js
   ```

2. Le bot se connectera à Discord et sera prêt à recevoir des commandes.

## 📝 Fonctionnement

- **API Discord.js** : Le bot utilise la bibliothèque Discord.js pour écouter les messages sur les serveurs et répondre aux commandes.
- **Gestion des citations** : Le bot sélectionne une citation aléatoire de la base de données `citations.json` et l'affiche lorsqu'un utilisateur utilise la commande `!citation`.
- **Intents et Partials** : Le bot utilise des intents pour gérer les événements de messages et de réactions, et des partials pour gérer les messages partiels.

## 🤝 Contribuer

Nous accueillons toutes les contributions pour améliorer ce bot ! Si vous souhaitez ajouter des fonctionnalités, corriger des bugs ou proposer des améliorations, suivez ces étapes :

1. Forkez ce dépôt.
2. Créez une nouvelle branche (`feature-branch`).
3. Apportez vos modifications.
4. Commitez vos changements.
5. Poussez sur votre dépôt forké.
6. Créez une pull request.

## 💬 Questions ou Retours ?

N'hésitez pas à ouvrir une issue si vous avez des questions ou des retours. Toutes vos contributions sont les bienvenues ! 🙌

## 📝 Crédits

- **Développeur** : Quravat 💻
- **Créé en** : 2025 🗓️

## ❤️ Contribuez au Projet !

Si ce projet vous est utile, merci de **l'étoiler** sur GitHub ⭐ – votre soutien compte beaucoup pour moi !  
Et n'oubliez pas de contribuer en ouvrant des issues ou en soumettant des pull requests. Toutes les contributions sont les bienvenues ! 🙌
N'hésitez pas a ajouter des citations pour le projet
