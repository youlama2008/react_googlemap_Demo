var express = require('express');
var router = express.Router();
var mapController = require("../controllers/mapController");

router.get("/", mapController.index);
router.get("/all", mapController.fetch_all);

module.exports = router;
