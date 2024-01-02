const LiveScoreAPI = require('./api/livescore-api');

const api = new LiveScoreAPI({
  apiKey: 'YOUR_API_KEY',
});

const matches = await api.getMatches({
  league: 'Ligue 1',
});

console.log(matches);