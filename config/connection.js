const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

switch (process.env.NODE_ENV) {
	case "production":
		dbCridentials = {
			use_env_variable: "JAWSDB_URL",
			dialect: "mysql"
		};
		sequelize = new Sequelize(dbCridentials.use_env_variable, dbCridentials);
		break;
	default:
		dbCridentials = {
			name: process.env.DB_NAME,
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			connection: {
				host: "localhost",
				dialect: "mysql",
				port: 3306
			}
		};
		sequelize = new Sequelize(dbCridentials.database, dbCridentials.username, dbCridentials.password, dbCridentials.connection, dbCridentials);
}

module.exports = sequelize;
