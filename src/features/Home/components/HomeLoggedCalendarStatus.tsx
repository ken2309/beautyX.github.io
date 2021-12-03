import React from "react";
import icon from "../../../constants/icon";

export default function HomeLoggedCalendarStatus() {
  return (
    <div className="calendar-status">
      <span className="calendar-status__title">Trạng thái lịch hẹn</span>
      <ul className="calendar-status__list">
        <li className="calendar-status__item">
          <img src={icon.Exclude} alt="" />
          <span>Đã xác nhận</span>
        </li>
        <li className="calendar-status__item">
          <img src={icon.Exclude2} alt="" />
          <span>Chưa xác nhận</span>
        </li>
        <li className="calendar-status__item">
          <img src={icon.Exclude3} alt="" />
          <span>Hoàn thành</span>
        </li>
        <li className="calendar-status__item">
          <img src={icon.Exclude4} alt="" />
          <span>Hủy</span>
        </li>
      </ul>
    </div>
  );
}
