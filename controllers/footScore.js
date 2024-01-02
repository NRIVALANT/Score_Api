const express = require('express');
const Score = require('../models/foot');
const Ranking = require('../models/foot');
const Comment = require('../models/foot');
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

exports.createScore = (req, res, next) => {
  delete req.body._id;
  const score = new Score({
    ...req.body
  });
  score.save()
    .then(() => res.status(201).json({ message: 'Score enregistré !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.createRanking = (req, res, next) => {
  delete req.body._id;
  const ranking = new Ranking({
    ...req.body
  });
  ranking.save()
    .then(() => res.status(201).json({ message: 'Ranking enregistré !' }))
    .catch(error => res.status(400).json({ error }));
}

exports.createComment = (req, res, next) => {
  delete req.body._id;
  const comment = new Comment({
    ...req.body
  });
  comment.save()
    .then(() => res.status(201).json({ message: 'Comment enregistré !' }))
    .catch(error => res.status(400).json({ error }));
}

exports.updateScore = (req, res, next) => {
  const id = req.params.id;

  req.body.modificationDate = Date.now();
  Score.updateOne({ _id: id }, req.body).then((updatedScore) => {
    if (updatedScore) {
        logger.info({ message: id + ' bien mis à jour'});
        res.status(200).json({ "message": "Modification de Score bien réalisée", "Score": updatedScore });
    } else {
        logger.error({ message: id + ' introuvable (modification)'});
        res.status(405).json({ "message": "Erreur lors de la modification de Score, vérifier le body", "err": err });
    }
}).catch((err) => {
    logger.error({ message: 'Erreur lors de la modification de ' + id + '; ID inexistant'});
    res.status(405).json({ "message": "Erreur lors de la modification de Score, vérifier l'id'", "err": err });
});
}

exports.deleteScore = (req, res) => {
  const id = req.params.id;

  Score.findByIdAndDelete(id).then((result) => {
      if (result) {
          logger.info({ message: id + ' bien supprimé'});
          res.status(200).json({ "message": "Suppression de Score bien réalisée" });
      } else {
          logger.error({ message: 'Erreur lors de la suppression de ' + id});
          res.status(404).json({ "message": "Ce Score n'existe pas" });
      }
  }).catch((err) => {
      res.status(404).json({ "message": "Erreur lors de la suppression de Score", "err": err });
  });
}

exports.getScore = (req, res, next) => {
  Score.findOne({ _id: req.params.id })
    .then(score => res.status(200).json(score))
    .catch(error => res.status(404).json({ error }));
};

exports.getRanking = (req, res, next) => {
  Ranking.findOne({ _id: req.params.id })
    .then(ranking => res.status(200).json(ranking))
    .catch(error => res.status(404).json({ error }));
}

exports.getComment = (req, res, next) => {
  Comment.findOne({ _id: req.params.id })
    .then(comment => res.status(200).json(comment))
    .catch(error => res.status(404).json({ error }));
}


exports.getAllScore = (req, res, next) => {
  Score.find()
    .then(scores => res.status(200).json(scores))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllRanking = (req, res, next) => {
  Ranking.find()
    .then(rankings => res.status(200).json(rankings))
    .catch(error => res.status(400).json({ error }));
}

exports.getAllComment = (req, res, next) => {
  Comment.find()
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(400).json({ error }));
}


