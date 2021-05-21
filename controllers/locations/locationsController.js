const db = require("../../models");
// Defining methods for the booksController
module.exports = {
	findAllFSAs: (req, res) => {
		db.Location.findAll({}).then(function (dbLocations) {
			res.json(dbLocations);
		});
	},
	findFSAByID: (req, res) => {
		db.Location.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findCompleteLocationDataAll: (req, res) => {
		db.HealthRegion.findAll({
			include: [
				{
					model: db.Location,
					// as: "hr_uid",
					attributes: ["forward_sortation_area"]
				}
			]
		}).then(function (dbLocations) {
			res.json(dbLocations);
		});
	}
	// findAllCompleteLocationData:
};
