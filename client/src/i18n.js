import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
// language[`${lang}`].home

const resources = {
	en: {
		translation: {
			caseData: "Case Data",
			changeLanguage: "Change language",
			COVIDTrendsData: "COVIDTrends Data",
			date: "Date",
			dataLengthZero: "The data length is zero",
			exploreAPI: "Explore Data API",
			healthRegionID: "Health Region ID",
			formalSortationArea: "Formal sortation area",
			getAllLocationData: "Get all location data",
			getAllLocationDataFSA: "Get all location data for an FSA",
			home: "Home",
			hrNameEn: "Health Region Name English",
			hrNameFr: "Health Region Name French",
			hrWebsiteEn: "Health Region Website English",
			hrWebsiteFr: "Health Region Website French",
			inputFirst3PostalCode: "Input the first 3 characters of a valid postal code",
			locationData: "Location Data",
			mobility: "Mobility",
			mobilityData: "Mobility Data",
			mobilityPercentChangePrevWeek: "Percent change last week",
			mobilityPercentChange: "Percent Change",
			previousMobility: "Previous Mobility",
			provinceAlphaCode: "Province Code",
			provinceCode: "Province Code",
			provinceName: "Province Name",
			region: "Region",
			welcomeToCDD: "Welcome to the Community Disease Dashboard!"
		}
	},
	fr: {
		translation: {
			caseData: "Données de cas",
			changeLanguage: "Changer de langue",
			COVIDTrendsData: "Données TendancesCOVID",
			dataLengthZero: "La longueur des données est zéro",
			date: "Date",
			exploreAPI: "Explorez l'API de données",
			formalSortationArea: "Zone de tri formelle",
			getAllLocationData: "Obtenir toutes les données de localisation",
			getAllLocationDataFSA: "Obtenir des données de localisation pour une zone",
			home: "Domicile",
			healthRegionID: "ID de la région sanitaire",
			hrNameEn: "Nom de la région sanitaire Anglais",
			hrNameFr: "Nom de la région sociosanitaire Français",
			hrWebsiteEn: "site de la région sanitaire anglaise",
			hrWebsiteFr: "site de la région sanitaire française",
			inputFirst3PostalCode: "saisissez les 3 premiers caractères d'un code postal valide",
			locationData: "Données de localisation",
			mobility: "Mobilité",
			mobilityData: "Données de mobilité",
			mobilityPercentChange: "Changement en pourcentage",
			mobilityPercentChangePrevWeek: "Changement en pourcentage la semaine dernière",
			previousMobility: "Mobilité précédente",
			provinceAlphaCode: "Code alphabétique",
			provinceCode: "Nom de la province",
			provinceName: "Nom de la province",
			region: "Région",
			welcomeToCDD: "Bienvenue sur le tableau de bord des maladies communautaires"
		}
	}
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "en",
		keySeparator: false, // we do not use keys in form messages.welcome
		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;
