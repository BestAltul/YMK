import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="/terms">{t("terms")}</a>
        <a href="/privacy">{t("privacy")}</a>
        <a href="/ads">{t("ads")}</a>
      </div>

      <div className="footer__address">
        © {new Date().getFullYear()} {t("brand")}. {t("copyright")}
      </div>
    </footer>
  );
}
