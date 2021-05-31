const router = require("express").Router();
const healthRegionsController = require("../../controllers/locations/healthRegionsController");

// Matches with "/api/books"
router.route("/get-all").get(healthRegionsController.findALLHealthRegions);

// Matches with "/api/books/:id"
router.route("/:hr_uid").get(healthRegionsController.findHealthRegionByID);

module.exports = router;
