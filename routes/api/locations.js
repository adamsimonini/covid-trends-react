const router = require("express").Router();
const locationsController = require("../../controllers/locations/locationsController");

// Matches with "/api/books"
router.route("/all-location-data").get(locationsController.findCompleteLocationDataAll);

// Matches with "/api/books"
router.route("/all-fsa").get(locationsController.findAllFSAs);

// Matches with "/api/books/:id"
router.route("/fsa/:fsa").get(locationsController.findFSAByID);

module.exports = router;
