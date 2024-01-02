const mongoose = require('mongoose');


const scoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  league: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const rankingsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  league: { type: String, required: true },
  ranking: { type: Number, required: true },
});

const commentsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Score = mongoose.model('Score', scoreSchema);
const Ranking = mongoose.model('Ranking', rankingsSchema);
const Comment = mongoose.model('Comment', commentsSchema);

module.exports = {
  Ranking,
  Comment,
  score: Score
};
