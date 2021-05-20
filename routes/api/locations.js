const router = require("express").Router();
const locationsController = require("../../controllers/locations/locationsController");

// Matches with "/api/books"
router.route("/").get(locationsController.findALLFSAs);

// Matches with "/api/books/:id"
router.route("/:fsa").get(locationsController.findFSAByID);

module.exports = router;
