🦦 Lutrinae - Encyclopédie des Loutres
Bienvenue sur Lutrinae, une encyclopédie scientifique interactive dédiée aux loutres. Ce projet a été réalisé dans le cadre d'un TP sur la conteneurisation et les services Cloud.

🔗 Liens du projet :

Site en ligne : https://projet-campos.web.app

Auteur : Hugo CAMPOS

🚀 Fonctionnalités
Encyclopédie interactive : Fiches détaillées sur la Loutre de Mer, la Loutre d'Europe et la Loutre Géante.

Compteur de vues Cloud : Chaque fiche possède un compteur de vues synchronisé en temps réel via Firebase Firestore.

Interface moderne : Design responsive réalisé avec Tailwind CSS.

🛠️ Installation et Lancement (Local)
Pour lancer le projet sur votre machine via Docker, utilisez les commandes suivantes :

Cloner le dépôt :

Bash
git clone https://github.com/h5oz/CourCloud.git
cd CourCloud
Lancer le conteneur :

Bash
docker-compose up --build -d
Accès :
Le site est disponible sur votre navigateur à l'adresse : http://localhost:8080

☁️ Architecture Cloud
Ce projet utilise Firebase pour deux services essentiels :

Hosting : Pour l'hébergement public du site.

Firestore : Base de données NoSQL pour gérer les statistiques de vues en temps réel (Mode Test activé pour le TP).

💡 Pourquoi Docker ?
L'utilisation de Docker (image nginx:alpine) permet de garantir que le serveur web fonctionne de la même manière sur n'importe quel ordinateur, facilitant ainsi la collaboration et le déploiement.

