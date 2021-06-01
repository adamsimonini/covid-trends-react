import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

function LocationData({ data }) {
	const { t } = useTranslation();

	return (
		<div className="">
			{data.map(location => {
				return (
					<div key={location.id}>
						<h2 className="sortation-area">{location.forward_sortation_area}</h2>
						<div className="complete-card">
							<div className="data-box">
								<h4>{t("locationData")}</h4>
								<ul>
									<li>
										<b>{t("healthRegionID")}:</b> {location.HealthRegion.hr_uid}
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
										<b>{t("provinceName")}:</b> {location.Province.full_name}
									</li>
									<li>
										<b>{t("provinceCode")}:</b> {location.Province.province_code}
									</li>
									<li>
										<b>{t("provinceAlphaCode")}:</b> {location.Province.alpha_code}
									</li>
									<li>
										<b>{t("region")}:</b> {location.Province.region}
									</li>
								</ul>
							</div>
							<div className="data-box">
								<h4>{t("mobilityData")}</h4>
								<ul>
									<li>
										<b>{t("date")}:</b> {location.HealthRegion.Mobility.date}
									</li>
									<li>
										<b>{t("mobilityPercentChange")}:</b> {location.HealthRegion.Mobility.pct_change_mobility}
									</li>
									<li>
										<b>{t("mobilityPercentChangePrevWeek")}:</b> {location.HealthRegion.Mobility.pct_change_mobility}
									</li>
									<li>
										<b>{t("mobility")}:</b> {location.HealthRegion.Mobility.mobility}
									</li>
									<li>
										<b>{t("previousMobility")}:</b> {location.HealthRegion.Mobility.prev_mobility}
									</li>
								</ul>
							</div>
							<div className="data-box">
								<h4>{t("caseData")}</h4>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default LocationData;
