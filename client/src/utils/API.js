import axios from "axios";

export default {
	// Gets all complete locations data
	getCompleteLocationDataAll: function () {
		return axios.get("/api/locations/all-location-data");
	},
	findCompleteLocationDataForSingleFSA: function (fsa) {
		return axios.get(`/api/locations/all-location-data/${fsa}`);
	},
	getFSAJoinHRAll: function () {
		return axios.get("/api/locations/all-fsa-join-hr");
	},
	// Gets all formal sortation areas
	getAllFSAs: function () {
		return axios.get("/api/locations/all-fsa");
	},
	// Gets the location with the given id
	getFSAByID: function (id) {
		return axios.get("/api/locations/fsa/" + id);
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
