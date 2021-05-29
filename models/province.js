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

	Province.associate = function (models) {
		// Province.hasMany(models.Location, {
		// 	foreignKey: "province_code",
		// 	targetKey: "province_code"
		// });
		// Province.belongsTo(models.Location, {
		// 	foreignKey: "province_code",
		// 	targetKey: "province_code",
		// 	allowNull: true,
		// 	defaultValue: null
		// });
	};

	return Province;
};
