const express = require('express');
const router = express.Router(); // router intégré au framework Express
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');
const footScoreController = require('../controllers/footScore');

// Routes CRUD
router.get('/:id', [logger], footScoreController.getScore); // GET = READ = LECTURE
router.get('/', [logger], footScoreController.getAllScore);
router.get('/:id', [logger], footScoreController.getRanking);
router.get('/', [logger], footScoreController.getAllRanking);
router.get('/:id', [logger], footScoreController.getComment);
router.get('/', [logger], footScoreController.getAllComment);

router.post('/', [logger, auth], footScoreController.createScore); // POST = CREATE = CREATION
router.post('/', [logger, auth], footScoreController.createRanking);
router.post('/', [logger, auth], footScoreController.createComment);
router.put('/:id', [logger, auth], footScoreController.updateScore); // PUT = UPDATE = MODIFICATION
router.delete('/:id', [logger, auth], footScoreController.deleteScore) // DELETE = DELETE = SUPPRESSION


module.exports = router;