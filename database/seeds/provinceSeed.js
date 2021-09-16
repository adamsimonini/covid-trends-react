const provinceModel = require("../../models")["Province"];

const provinceSeed = [
	{
		province_code: 1,
		full_name: "Canada",
		alpha_code: "CA",
		region: "National"
	},
	{
		province_code: 10,
		full_name: "Newfoundland and Labrador",
		alpha_code: "NL",
		region: "Atlantic"
	},
	{
		province_code: 11,
		full_name: "Prince Edward Island",
		alpha_code: "PE",
		region: "Atlantic"
	},
	{
		province_code: 12,
		full_name: "Nova Scotia",
		alpha_code: "NS",
		region: "Atlantic"
	},
	{
		province_code: 24,
		full_name: "Quebec",
		alpha_code: "QC",
		region: "Quebec"
	},
	{
		province_code: 35,
		full_name: "Ontario",
		alpha_code: "ON",
		region: "Ontario"
	},
	{
		province_code: 46,
		full_name: "Manitoba",
		alpha_code: "MA",
		region: "Praries"
	},
	{
		province_code: 47,
		full_name: "Saskatchewan",
		alpha_code: "SK",
		region: "Praries"
	},
	{
		province_code: 48,
		full_name: "Alberta",
		alpha_code: "AB",
		region: "Praries"
	},
	{
		province_code: 59,
		full_name: "British Columbia",
		alpha_code: "BC",
		region: "British Columbia"
	},
	{
		province_code: 60,
		full_name: "Yukon",
		alpha_code: "YT",
		region: "Territories"
	},
	{
		province_code: 61,
		full_name: "Northwest Territories",
		alpha_code: "NT",
		region: "Territories"
	},
	{
		province_code: 62,
		full_name: "Nunavut",
		alpha_code: "NU",
		region: "Territories"
	},
	{
		province_code: 99,
		full_name: "Repatriated",
		alpha_code: "RE",
		region: "National"
	}
];

const seedProvince = () => provinceModel.bulkCreate(provinceSeed);

module.exports = seedProvince;
