require("dotenv").config();

const getDBCridentials = () => {
	let dbCridentials = {};
	switch (process.env.NODE_ENV) {
		case "production":
			dbCridentials = {
				use_env_variable: "JAWSDB_URL",
				dialect: "mysql",
				connection: {
					dialect: "mysql"
				}
			};
			break;
		default:
			dbCridentials = {
				database: process.env.DB_NAME,
				username: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				connection: {
					host: "localhost",
					dialect: "mysql",
					port: 3306
				}
			};
	}
	return dbCridentials;
};

module.exports = getDBCridentials();
