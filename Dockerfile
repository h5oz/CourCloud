# Utilisation d'un serveur Nginx ultra léger
FROM nginx:alpine

# On copie notre code frontend dans le dossier du serveur
COPY ./frontend /usr/share/nginx/html

# On ouvre le port 80
EXPOSE 80
