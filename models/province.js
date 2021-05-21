module.exports = function (sequelize, DataTypes) {
	var Province = sequelize.define(
		"Province",
		{
			province_code: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false
			},
			full_name: DataTypes.STRING,
			alpha_code: DataTypes.STRING,
			region: DataTypes.STRING
		},
		{
			//configuration of the model
			timestamps: false,
			tableName: "provinces"
		}
	);

	return Province;
};

// province_code INT NOT NULL PRIMARY KEY, -- natural primary key
// full_name VARCHAR(35) NOT NULL,
// alpha_code VARCHAR(2) NOT NULL, -- abbreviation of province name but without periods
// region VARCHAR(25) NOT NULL
