module.exports = function (sequelize, DataTypes) {
	var Mobility = sequelize.define(
		"Mobility",
		{
			hr_uid: {
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			date: DataTypes.STRING,
			w_o_y: DataTypes.INTEGER,
			year: DataTypes.INTEGER,
			max_dist_25: DataTypes.DOUBLE,
			max_dist_50: DataTypes.DOUBLE,
			max_dist_75: DataTypes.DOUBLE,
			sum_dist_25: DataTypes.DOUBLE,
			sum_dist_50: DataTypes.DOUBLE,
			sum_dist_75: DataTypes.DOUBLE,
			prop_at_home: DataTypes.DOUBLE,
			percent_stay: DataTypes.DOUBLE,
			base_max: DataTypes.DOUBLE,
			base_percent_change_max: DataTypes.DOUBLE,
			base_sum: DataTypes.DOUBLE,
			base_percent_change_sum: DataTypes.DOUBLE,
			base_prop_at_home: DataTypes.DOUBLE,
			base_percent_change_prop_at_home: DataTypes.DOUBLE,
			base_percent_stay: DataTypes.DOUBLE,
			base_percent_change_percent_stay: DataTypes.DOUBLE,
			percent_change_prev_week_max_dist_50: DataTypes.DOUBLE,
			percent_change_prev_week_sum_dist_50: DataTypes.DOUBLE,
			percent_change_prev_week_prop_at_home: DataTypes.DOUBLE,
			percent_change_prev_week_percent_stay: DataTypes.DOUBLE,
			avg_num_devices: DataTypes.DOUBLE,
			sum_num_devices: DataTypes.DOUBLE,
			mobility: DataTypes.DOUBLE,
			pct_change_mobility: DataTypes.DOUBLE,
			prev_mobility: DataTypes.DOUBLE
		},
		{
			//configuration of the model
			timestamps: false,
			tableName: "mobility"
		}
	);

	// Mobility.associate = function (models) {
	// 	Mobility.hasOne(models.HealthRegion, {
	// 		foreignKey: {
	// 			name: "hr_uid",
	// 			sourceKey: "hr_uid",
	// 			allowNull: true
	// 		}
	// 	});
	// };
	// Mobility.associate = function (models) {
	// 	// Each health region has many locations, and it's connected to loctions via location's foreignKey "hr_uid"
	// 	Mobility.hasOne(models.HealthRegion, {
	// 		foreignKey: "hr_uid",
	// 		targetKey: "hr_uid"
	// 	});
	// };

	return Mobility;
};
