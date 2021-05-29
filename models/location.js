module.exports = function (sequelize, DataTypes) {
	var Location = sequelize.define(
		"Location",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			forward_sortation_area: {
				type: DataTypes.STRING,
				allowNull: false
			},
			hr_uid: {
				type: DataTypes.INTEGER
				// references: {
				// 	model: "health_regions",
				// 	key: "hr_uid"
				// }
			},
			province_code: DataTypes.INTEGER
			// references: {
			// 	model: "provinces",
			// 	key: "province_code"
			// }
		},
		{
			//configuration of the model
			timestamps: false,
			tableName: "locations"
		}
	);

	Location.associate = function (models) {
		// Each health region has many locations, and it's connected to loctions via location's foreignKey "hr_uid"
		Location.belongsTo(models.HealthRegion, {
			foreignKey: "hr_uid",
			targetKey: "hr_uid"
		});
		Location.belongsTo(models.Province, {
			foreignKey: "province_code",
			targetKey: "province_code",
			allowNull: true,
			defaultValue: null
		});
	};

	return Location;
};
