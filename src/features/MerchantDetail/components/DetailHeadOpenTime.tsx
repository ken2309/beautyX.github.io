import React, { useContext } from "react";
import icon from "../../../constants/icon";
import img from "../../../constants/img";
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
  const date = new Date();
  const today = date.getDay() + 1;
  const sunday = org?.opening_time?.slice(6, 7);
  const days = org?.opening_time?.slice(0, 6);
  const openDay = days?.find((item: any, index: number) => index + 2 === today);
  return (
    <>
      <div className="content-left__info">
        <div className="content-left__info-detail">
          <img src={icon.time} alt="" />
          <span>
            <h5>{t("Mer_de.time_work")}</h5>
          </span>
        </div>
      </div>

      <div
        onClick={() => setOpenTime(!openTime)}
        className="content-left__work"
      >
        <div className="content-left__work-item ">
          <div className="content-left__work-item-week">
            <span className="week-days">
              {/* {t("Mer_de.weeks_day")} */}
              Thứ {today}
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
                  <span>Thứ {index + 2}</span>
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
          <span className="week-days">{t("Mer_de.sunday")}</span>
          <p>
            {sunday?.map((item: any, index: number) => (
              <p key={index}>
                {item.time_opening === "off"
                  ? "Đóng cửa"
                  : `${item.from_time_opening} - ${item.to_time_opening}`}
              </p>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
