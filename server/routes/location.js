var express = require('express');
var router = express.Router();
var locationController = require("../controllers/locationController");

router.get("/", locationController.index);
router.get("/all", locationController.fetch_all);
router.get("/geo/:id", locationController.fetch_one);
router.post("/update/:id", locationController.update);
router.delete("/delete/:id", locationController.delete);
router.post("/add", locationController.add);

module.exports = router;
