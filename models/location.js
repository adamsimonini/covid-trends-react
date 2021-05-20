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

	return Location;
};
