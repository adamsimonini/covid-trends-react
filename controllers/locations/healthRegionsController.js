const db = require("../../models");
// Defining methods for the booksController
module.exports = {
	findALLHealthRegions: function (req, res) {
		console.log("getting all HRs...");
		db.HealthRegion.findAll({}).then(function (dbHealthRegions) {
			res.json(dbHealthRegions);
		});
	},
	findHealthRegionByID: function (req, res) {
		db.HealthRegion.findByPk(req.params.hr_uid)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
