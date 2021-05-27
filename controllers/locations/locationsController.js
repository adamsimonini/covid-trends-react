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
	findFSAJoinHealthRegion: (req, res) => {
		db.Location.findAll({
			include: [
				{
					model: db.HealthRegion,
					attributes: ["hr_uid", "province_code", "name_en", "name_fr", "website_en", "website_fr"]
				}
			]
		}).then(function (dbLocations) {
			res.json(dbLocations);
		});
	},
	findCompleteLocationDataAll: (req, res) => {
		db.Location.findAll({
			include: [
				{
					model: db.HealthRegion,
					attributes: ["hr_uid", "province_code", "name_en", "name_fr", "website_en", "website_fr"],
					/*
					nested includes statement
					https://sequelize.org/master/manual/advanced-many-to-many.html#through-tables-versus-normal-tables-and-the--quot-super-many-to-many-association-quot-
					*/
					include: {
						model: db.Province,
						attributes: ["province_code", "full_name", "alpha_code", "region"]
					}
					// include: {
					// 	model: db.Mobility,
					// 	attributes: ["date", "full_name", "pct_change_mobility", "prev_mobility"]
					// }
				}
			]
		}).then(function (dbLocations) {
			res.json(dbLocations);
		});
	},
	findCompleteLocationDataForSingleFSA: (req, res) => {
		db.Location.findAll({
			where: {
				forward_sortation_area: req.params.fsa
			},
			include: [
				{
					model: db.HealthRegion,
					attributes: ["hr_uid", "province_code", "name_en", "name_fr", "website_en", "website_fr"],
					/*
					nested includes statement
					https://sequelize.org/master/manual/advanced-many-to-many.html#through-tables-versus-normal-tables-and-the--quot-super-many-to-many-association-quot-
					*/
					include: {
						model: db.Province,
						attributes: ["province_code", "full_name", "alpha_code", "region"]
					}
				}
			]
		}).then(function (dbLocations) {
			res.json(dbLocations);
		});
	}
	// findAllCompleteLocationData:
};
