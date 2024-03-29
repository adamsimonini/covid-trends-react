const router = require("express").Router();
const locationsController = require("../../controllers/locations/locationsController");

// the complete location data for all FSAs
router.route("/get-all").get(locationsController.findCompleteDataAll);

// get complete location data for a single FSA, based on provided FSA
router.route("/:fsa").get(locationsController.findCompleteLocationDataForSingleFSA);

// router.route("/all-fsa").get(locationsController.findAllFSAs);

// router.route("/fsa/:fsa").get(locationsController.findFSAByID);

module.exports = router;
