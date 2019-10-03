var express = require('express');
var router = express.Router();
var locationController = require("../controllers/locationController");

router.get("/", locationController.index);
router.get("/all", locationController.fetch_all);

module.exports = router;
