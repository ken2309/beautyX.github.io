import React, { useContext } from "react";
import icon from "../../../constants/icon";
import { AppContext } from "../../../context/AppProvider";
import { IOrganization } from "../../../interface/organization";
import { imgRotate } from "../../../utils/imgRotate";
interface IProps {
  org: IOrganization | undefined;
  setOpenTime: any;
  openTime: any;
}
export default function DetailHeadOpenTime(props: IProps) {
  const { org, setOpenTime, openTime } = props;
  const { t } = useContext(AppContext);
  const weekDays = [
    { day: 2, text: t("Home.mo") },
    { day: 3, text: t("Home.tu") },
    { day: 4, text: t("Home.we") },
    { day: 5, text: t("Home.th") },
    { day: 6, text: t("Home.fr") },
    { day: 7, text: t("Home.sa") },
  ];
  const date = new Date();
  const today = date.getDay() + 1;
  const sunday = org?.opening_time?.slice(6, 7);
  const days = org?.opening_time?.slice(0, 6);
  const openDay = days?.find((item: any, index: number) => index + 2 === today);

  return (
    <>
      <div className="content-left__info">
        <div className="content-left__info-detail-add">
          <img src={icon.time} alt="" />
          <p>
            <span>
              {t("Mer_de.time_work")}
              {": "}
            </span>
          </p>
        </div>
      </div>

      <div
        onClick={() => setOpenTime(!openTime)}
        // onMouseEnter={() => setOpenTime(true)}
        // onMouseLeave={() => setOpenTime(false)}
        className="content-left__work"
      >
        <div className="content-left__work-item ">
          <div className="content-left__work-item-week">
            <span className="week-days">
              {weekDays.find((item: any) => item.day === today)?.text}
            </span>
            <img
              src={icon.arrowPurple}
              alt=""
              style={openTime === true ? imgRotate : {}}
            />
          </div>
          <p>
            {openDay?.time_opening === "off"
              ? "Đóng cửa"
              : `${openDay?.from_time_opening} - ${openDay?.to_time_opening}`}
          </p>

          <div
            className={
              openTime ? "time-block__list active" : "time-block__list"
            }
          >
            <ul>
              {days?.map((item: any, index: any) => (
                <li key={index} className={today === index + 2 ? "active" : ""}>
                  <span>
                    {weekDays.find((item: any) => item.day === index + 2)?.text}
                  </span>
                  {item.time_opening === "off" ? (
                    <span>Đóng cửa</span>
                  ) : (
                    <span>
                      {item.from_time_opening} - {item.to_time_opening}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="content-left__work-item">
          <span className="week-days">{t("Home.su")}</span>
          <p>
            {sunday?.map((item: any, index: number) => (
              <span key={index}>
                {item.time_opening === "off"
                  ? "Đóng cửa"
                  : `${item.from_time_opening} - ${item.to_time_opening}`}
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
