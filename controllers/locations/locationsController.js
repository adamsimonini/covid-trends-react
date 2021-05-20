const db = require("../../models");
// Defining methods for the booksController
module.exports = {
	findALLFSAs: function (req, res) {
		db.Location.findAll({}).then(function (dbLocations) {
			res.json(dbLocations);
		});
	},
	findFSAByID: function (req, res) {
		db.Location.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
