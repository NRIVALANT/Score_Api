const express = require("express");
const router = express.Router(); //ROuter intégre au format express
const apiControllers = require('../controllers/Api')
const logger = require('../middlewares/logger')

router.get("/", apiControllers.getApiResponse)
router.get('/logger/', [logger], apiControllers.getApiResponse)

module.exports = router;