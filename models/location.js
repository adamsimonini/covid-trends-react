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
			hr_uid: DataTypes.INTEGER,
			province_code: DataTypes.INTEGER
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
			targetKey: "hr_uid",
		});
	};

	return Location;
};
