const db = require("../../models");
// Defining methods for the booksController
module.exports = {
	findALLProvinces: function (req, res) {
		db.Province.findAll({}).then(function (abProvinces) {
			res.json(abProvinces);
		});
	},
	findProvinceByCode: function (req, res) {
		db.Province.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
