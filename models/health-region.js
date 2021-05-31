module.exports = function (sequelize, DataTypes) {
	var HealthRegion = sequelize.define(
		"HealthRegion",
		{
			hr_uid: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false
			},
			province_code: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			name_en: {
				type: DataTypes.STRING,
				allowNull: false
			},
			name_fr: {
				type: DataTypes.STRING,
				allowNull: false
			},
			website_en: {
				type: DataTypes.STRING,
				allowNull: false
			},
			website_fr: {
				type: DataTypes.STRING,
				allowNull: false
			}
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
			foreignKey: "hr_uid",
			targetKey: "hr_uid",
			constraints: false,
			allowNull: true,
			defaultValue: null
		});

		HealthRegion.hasOne(models.Mobility, {
			foreignKey: "hr_uid",
			targetKey: "hr_uid",
			allowNull: true,
			defaultValue: null
		});
	};

	return HealthRegion;
};
