const router = require("express").Router();
const healthRegionsController = require("../../controllers/locations/healthRegionsController");

// Matches with "/api/books"
router.route("/").get(healthRegionsController.findALLHealthRegions);

// Matches with "/api/books/:id"
router.route("/:fsa").get(healthRegionsController.findHealthRegionByID);

module.exports = router;
