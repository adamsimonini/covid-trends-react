-- INSERT INTO health_regions SET hr_uid=1100, name_en="Prince Edward Island", name_fr="Île-du-Prince-Édouard", shape_area=18362349851, shape_length=794620.103;
USE covid_trends;

SELECT * FROM provinces;
SELECT * FROM health_regions;
SELECT * FROM locations;
SELECT * FROM mobility;

SELECT * FROM locations INNER JOIN provinces ON locations.province_code = provinces.province_code;
SELECT * FROM locations INNER JOIN health_regions ON locations.hr_uid = health_regions.hr_uid;

DELETE FROM locations;
DELETE FROM health_regions;

SELECT locations.forward_sortation_area, health_regions.hr_uid, health_regions.name_en, health_regions.name_fr, provinces.province_code, provinces.full_name, provinces.alpha_code, provinces.region
 FROM locations LEFT JOIN provinces ON locations.province_code = provinces.province_code LEFT JOIN health_regions ON locations.hr_uid = health_regions.hr_uid;
 
 SELECT * FROM locations WHERE locations.forward_sortation_area = "V8M";
 