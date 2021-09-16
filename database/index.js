const sequelize = require("../config/connection");
const provinceSeed = require("./seeds/provinceSeed");
const healthRegionSeed = require("./seeds/healthRegionSeed");
const locationSeed = require("./seeds/locationSeed");
const mobilitySeed = require("./seeds/mobilitySeed");

const seedAll = async () => {
	await sequelize.sync({ force: true });

	console.log("SEEDING PROVINCES TABLE");
	await provinceSeed();

	console.log("SEEDING HEALTH REGIONS TABLE");
	await healthRegionSeed();

	console.log("SEEDING MOBILITY TABLE");
	await mobilitySeed();

	console.log("SEEDING LOCATIONS TABLE");
	await locationSeed();

	process.exit(0);
};

seedAll();
