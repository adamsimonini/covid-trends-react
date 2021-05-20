const router = require("express").Router();
const LocationRoutes = require("./locations");
const ProvinceRoutes = require("./provinces");
const HealthRegionRoutes = require("./healthRegions");

// Location routes
router.use("/locations", LocationRoutes);
router.use("/provinces", ProvinceRoutes);
router.use("/health-regions", HealthRegionRoutes);

module.exports = router;
