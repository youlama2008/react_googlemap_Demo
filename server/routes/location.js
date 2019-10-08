var express = require('express');
var router = express.Router();
var locationController = require("../controllers/locationController");

router.get("/", locationController.index);
router.get("/all", locationController.fetch_all);
router.get("/geo/:address", locationController.fetch_one);
router.post("/update/:address", locationController.update);
router.delete("/delete", locationController.delete);
router.post("/add", locationController.add);

module.exports = router;
