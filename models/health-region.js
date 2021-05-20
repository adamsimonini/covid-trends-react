module.exports = function (sequelize, DataTypes) {
	var HealthRegion = sequelize.define(
		"HealthRegion",
		{
			hr_uid: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false
			},
			province_code: DataTypes.INTEGER,
			name_en: DataTypes.STRING,
			name_fr: DataTypes.STRING
		},
		{
			//configuration of the model
			timestamps: false,
			tableName: "health_regions"
		}
	);

	HealthRegion.associate = function (models) {
		// Each health region has many locations, and it's connected to loctions via location's foreignKey "hr_uid"
		HealthRegion.hasMany(models.Location, {
			foreignKey: "hr_uid"
		});
	};

	return HealthRegion;
};

// Notes: statistics Caadan's latest health region table data is from 2013. Things have changed since then. For example, Saskatchewan amalgamated all 12 of its health regions into one health region, which isn't very useful for COVID-Trends, which aims to provide numbers are a more local level.
