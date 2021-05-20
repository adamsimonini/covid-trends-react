const db = require("../../models");
// Defining methods for the booksController
module.exports = {
	findALLHealthRegions: function (req, res) {
		db.HealthRegion.findAll({}).then(function (dbHealthRegions) {
			res.json(dbHealthRegions);
		});
	},
	findHealthRegionByID: function (req, res) {
		db.HealthRegion.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
