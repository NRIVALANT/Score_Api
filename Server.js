// server.js

// Importez les configurations d'environnement
const ENV = require('./environment/environment');

// Importez les modules nécessaires
const http = require('http');
const app = require('./App');

// Utilisez le port à partir des configurations d'environnement
const port = ENV.PORT;

// Créez le serveur avec l'application
const server = http.createServer(app);

// Faites écouter le serveur sur le port spécifié
server.listen(port, () => {
  console.log(`Server created and listening on port ${port}!`);
});
