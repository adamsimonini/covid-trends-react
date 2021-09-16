const casesModel = require("../../models")["Mobility"];

const casesSeed = [

];

const seedCasesTable = () => casesModel.bulkCreate(casesSeed);

module.exports = seedCasesTable;
