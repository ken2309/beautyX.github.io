import React, { useContext } from "react";
import icon from "../../../constants/icon";
import { AppContext } from "../../../context/AppProvider";

export default function HomeLoggedCalendarStatus() {
  const { t } = useContext(AppContext);
  return (
    <div className="calendar-status">
      <span className="calendar-status__title">
        {t("Home.appointment_status")}
      </span>
      <ul className="calendar-status__list">
        <li className="calendar-status__item">
          <img src={icon.Exclude} alt="" />
          <span>{t("Home.confirmed")}</span>
        </li>
        <li className="calendar-status__item">
          <img src={icon.Exclude2} alt="" />
          <span>{t("Home.unconfimred")}</span>
        </li>
        <li className="calendar-status__item">
          <img src={icon.Exclude3} alt="" />
          <span>{t("Home.complete")}</span>
        </li>
        <li className="calendar-status__item">
          <img src={icon.Exclude4} alt="" />
          <span>{t("Home.cancel")}</span>
        </li>
      </ul>
    </div>
  );
}
