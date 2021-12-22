module.exports = function (sequelize, DataTypes) {
	var casesdeaths = sequelize.define(
		"casesdeaths",
		{
			hr_uid: {
				primaryKey: true,
				type: DataTypes.INTEGER
			},
            province: DataTypes.STRING,
            health_region: DataTypes.STRING,
            date_report: DataTypes.STRING,
            cases: DataTypes.INTEGER,
            cumulative_cases: DataTypes.INTEGER,
            deaths: DataTypes.INTEGER,
            cumulative_deaths: DataTypes.INTEGER,
            numtotal_last14	: DataTypes.DOUBLE,
            numdeaths_last14	: DataTypes.DOUBLE,
            numtotal_last7	: DataTypes.DOUBLE,
            numdeaths_last7	: DataTypes.DOUBLE,
            avgtotal_last7	: DataTypes.DOUBLE,
            avgdeaths_last7: DataTypes.DOUBLE

		},
		{
			//configuration of the model
			timestamps: false,
			tableName: "casesdeaths"
		}
	);

	casesdeaths.associate = function (models) {
		casesdeaths.belongsTo(models.HealthRegion, {
			foreignKey: {
				name: "hr_uid",
				sourceKey: "hr_uid",
				allowNull: true,
				constraints: false
			}
		});
	};
	// Mobility.associate = function (models) {
	// 	// Each health region has many locations, and it's connected to loctions via location's foreignKey "hr_uid"
	// 	Mobility.hasOne(models.HealthRegion, {
	// 		foreignKey: "hr_uid",
	// 		targetKey: "hr_uid"
	// 	});
	// };

	return cases-and-deaths;
};
