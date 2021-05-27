import React from "react";
import { useTranslation } from "react-i18next";

function LangToggle() {
	const { t } = useTranslation();
	const { i18n } = useTranslation();
	console.log(i18n.language);

	const changeLanguage = () => {
		i18n.language === "en" ? i18n.changeLanguage("fr") : i18n.changeLanguage("en");
	};

	return (
		<>
			<button onClick={() => changeLanguage()}>{t("changeLanguage")}</button>
		</>
	);
}

export default LangToggle;
