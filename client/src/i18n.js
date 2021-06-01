import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
	en: {
		translation: {
			home: "Home",
			exploreAPI: "Explore Data API",
			welcomeToCTR: "Welcome to COVID-Trends-React!",
			getAllLocationData: "Get all location data",
			getAllLocationDataFSA: "Get all location data for an FSA",
			dataLengthZero: "The data length is zero",
			COVIDTrendsData: "COVIDTrends Data",
			formalSortationArea: "Formal sortation area",
			inputFirst3PostalCode: "Input the first 3 characters of a valid postal code",
			changeLanguage: "Change language",
			locationData: "Location Data",
			healthRegionID: "Health Region ID",
			provinceCode: "Province Code",
			hrNameEn: "Health Region Name English",
			hrNameFr: "Health Region Name French",
			hrWebsiteEn: "Health Region Website English",
			hrWebsiteFr: "Health Region Website French",
			provinceName: "Province Name",
			provinceAlphaCode: "Province Code",
			region: "Region",
			mobilityData: "Mobility Data",
			date: "Date",
			mobilityPercentChange: "Percent Change",
			mobilityPercentChangePrevWeek: "Percent change last week",
			mobility: "Mobility",
			previousMobility: "Previous Mobility",
			caseData: "Case Data"
		}
	},
	fr: {
		translation: {
			home: "Domicile",
			exploreAPI: "Explorez l'API de données",
			welcomeToCTR: "Bienvenue à React-Tendances-COVID",
			getAllLocationData: "Obtenir toutes les données de localisation",
			getAllLocationDataFSA: "Obtenir des données de localisation pour une zone",
			dataLengthZero: "La longueur des données est zéro",
			COVIDTrendsData: "Données TendancesCOVID",
			formalSortationArea: "Zone de tri formelle",
			inputFirst3PostalCode: "saisissez les 3 premiers caractères d'un code postal valide",
			changeLanguage: "Changer de langue",
			locationData: "Données de localisation",
			healthRegionID: "ID de la région sanitaire",
			provinceCode: "Nom de la province",
			hrNameEn: "Nom de la région sanitaire Anglais",
			hrNameFr: "Nom de la région sociosanitaire Français",
			hrWebsiteEn: "site de la région sanitaire anglaise",
			hrWebsiteFr: "site de la région sanitaire française",
			provinceName: "Nom de la province",
			provinceAlphaCode: "Code alphabétique",
			region: "Région",
			mobilityData: "Données de mobilité",
			date: "Date",
			mobilityPercentChange: "Changement en pourcentage",
			mobilityPercentChangePrevWeek: "Changement en pourcentage la semaine dernière",
			mobility: "Mobilité",
			previousMobility: "Mobilité précédente",
			caseData: "Données de cas"
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
