import axios from "axios";

export default {
	// Gets all locations
	getAllForwardSortationAreas: function () {
		return axios.get("/api/locations");
	},
	// Gets the location with the given id
	getSingleLocation: function (id) {
		return axios.get("/api/locations/" + id);
	},
	getAllProvinces: function () {
		return axios.get("/api/provinces");
	},
	// Gets the location with the given id
	getSingleProvince: function (id) {
		return axios.get("/api/provinces/" + id);
	},
	getAllHealthRegions: function () {
		return axios.get("/api/health-regions");
	},
	// Gets the location with the given id
	getSingleHealthRegion: function (id) {
		return axios.get("/api/health-regions/" + id);
	}
};
