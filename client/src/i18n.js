import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
	en: {
		translation: {
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
			region: "Region"
		}
	},
	fr: {
		translation: {
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
			region: "Région"
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
