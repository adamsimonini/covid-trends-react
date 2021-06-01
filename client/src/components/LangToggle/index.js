import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";

function LangToggle() {
	const { t } = useTranslation();
	const { i18n } = useTranslation();
	console.log(i18n.language);
	const changeLanguage = () => {
		i18n.language === "en" ? i18n.changeLanguage("fr") : i18n.changeLanguage("en");
	};

	return (
		<>
			<Button variant="outlined" onClick={() => changeLanguage()}>
				{t("changeLanguage")}
			</Button>
		</>
	);
}

export default LangToggle;
