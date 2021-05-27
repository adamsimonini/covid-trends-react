import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

function LocationData({ data }) {
	const { t } = useTranslation();

	return (
		<>
			{data.map(location => {
				return (
					<div className="location" key={location.id}>
						<h2>{location.forward_sortation_area}</h2>
						<h4>{t("locationData")}</h4>
						<ul>
							<li>
								<b>{t("healthRegionID")}:</b> {location.hr_uid}
							</li>
							<li>
								<b>{t("hrNameEn")}:</b> {location.HealthRegion.name_en}
							</li>
							<li>
								<b>{t("hrNameFr")}:</b> {location.HealthRegion.name_fr}
							</li>
							<li>
								<a href={location.HealthRegion.website_en}>{t("hrWebsiteEn")}</a>
							</li>
							<li>
								<a href={location.HealthRegion.website_fr}>{t("hrWebsiteFr")}</a>
							</li>
							<li>
								<b>{t("provinceName")}:</b> {location.HealthRegion.Province.full_name}
							</li>
							<li>
								<b>{t("provinceCode")}:</b> {location.HealthRegion.Province.province_code}
							</li>
							<li>
								<b>{t("provinceAlphaCode")}:</b> {location.HealthRegion.Province.alpha_code}
							</li>
							<li>
								<b>{t("region")}:</b> {location.HealthRegion.Province.region}
							</li>
						</ul>
					</div>
				);
			})}
		</>
	);
}

export default LocationData;
