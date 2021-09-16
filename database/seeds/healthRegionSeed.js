const healthRegioneModel = require("../../models")["HealthRegion"];

const healthRegionSeed = [
	{
		hr_uid: 1011,
		province_code: 10,
		name_en: "Eastern Regional Health Authority",
		name_fr: "Eastern Regional Health Authority",
		website_en: "https://www.gov.nl.ca/covid-19",
		website_fr: "https://www.gov.nl.ca/covid-19/fr/ressources/"
	},
	{
		hr_uid: 2418,
		province_code: 24,
		name_en: "Région des Terres-Cries-de-la-Baie-James",
		name_fr: "Région des Terres-Cries-de-la-Baie-James",
		website_en: "https://eeyouistcheecovid19.org/",
		website_fr: "https://eeyouistcheecovid19.org/"
	},
	{
		hr_uid: 3556,
		province_code: 35,
		name_en: "Porcupine Health Unit",
		name_fr: "Circonscription sanitaire de Porcupine",
		website_en: "http://www.porcupinehu.on.ca/",
		website_fr: "https://www.porcupinehu.on.ca/fr/"
	},
	{
		hr_uid: 4603,
		province_code: 46,
		name_en: "Interlake-Eastern Regional Health Authority",
		name_fr: "Office régional de la santé d'Entre-les-Lacs et de l'Est",
		website_en: "https://www.ierha.ca/default.aspx?cid=23748",
		website_fr: "https://www.ierha.ca/default.aspx?cid=23748"
	},
	{
		hr_uid: 594,
		province_code: 59,
		name_en: "Northern Health",
		name_fr: "Northern Health",
		website_en: "https://www.northernhealth.ca/health-topics/coronavirus-information-covid-19#trusted-information#northern-health",
		website_fr: "https://www.northernhealth.ca/health-topics/coronavirus-information-covid-19#trusted-information#northern-health"
	}
];

const seedHealthRegionTable = () => healthRegioneModel.bulkCreate(healthRegionSeed);

module.exports = seedHealthRegionTable;
