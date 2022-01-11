import React, { useContext } from "react";
import img from "../../../constants/img";
import icon from "../../../constants/icon";
import SectionTitle from "../../SectionTitle";
import { AppContext } from "../../../context/AppProvider";

function HomeCalendar(props: any) {
  const { t } = useContext(AppContext);
  const array = [
    {
      icon: icon.miniMapIcon,
      title: t("Home.Ca_title_1"),
      text: t("Home.Ca_text_1"),
    },
    {
      icon: icon.miniMapIcon,
      title: t("Home.Ca_title_2"),
      text: t("Home.Ca_text_2"),
    },
    {
      icon: icon.miniMapIcon,
      title: t("Home.Ca_title_3"),
      text: t("Home.Ca_text_3"),
    },
  ];
  return (
    <div className="home-calendar">
      <SectionTitle title={t("Home.Ca_title")} textAlign="center" />
      <div className="home-calendar-content">
        <ul>
          {array.map((item, index) => (
            <li key={index}>
              <div className="calendar-item">
                <div className="calendar-item__header">
                  <img src={icon.miniMapIcon} alt="" />
                  <span>{item.title}</span>
                </div>
                <span className="calendar-item__text">{item.text}</span>
              </div>
            </li>
          ))}
        </ul>
        <img className="calendar-img" src={img.homeCalendar} alt="" />
      </div>
    </div>
  );
}

export default HomeCalendar;
