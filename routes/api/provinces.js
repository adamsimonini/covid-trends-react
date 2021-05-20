const router = require("express").Router();
const provincesController = require("../../controllers/locations/provincesController");

// Matches with "/api/books"
router.route("/").get(provincesController.findALLProvinces);

// Matches with "/api/books/:id"
router.route("/:fsa").get(provincesController.findProvinceByCode);

module.exports = router;
