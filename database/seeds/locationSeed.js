const locationModel = require("../../models")["Location"];

const locationSeed = [
	{
		forward_sortation_area: "A0A",
		hr_uid: 1011,
		province_code: 10
	},
	{
		forward_sortation_area: "G0W",
		hr_uid: 2418,
		province_code: 24
	},
	{
		forward_sortation_area: "P0K",
		hr_uid: 3556,
		province_code: 35
	},
	{
		forward_sortation_area: "R0C",
		hr_uid: 4603,
		province_code: 48
	},
	{
		forward_sortation_area: "V0C",
		hr_uid: 594,
		province_code: 59
	}
];

const seedLocation = () => locationModel.bulkCreate(locationSeed);

module.exports = seedLocation;
