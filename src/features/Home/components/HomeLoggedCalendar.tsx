import React from "react";
import SectionTitle from "../../SectionTitle/index";

export default function HomeLoggedCalendar() {
  return (
    <div className="homelogged-calendar">
      <div className="homelogged-calendar__content">
        <SectionTitle title="Lịch hẹn của bạn" textAlign="left" />
        <div className="homelogged-calendar__wrap">
          <div className="homelogged-calendar__left">
            <div className="calendar-choosedate"></div>
            <div className="calendar-status"></div>
          </div>
          <div className="homelogged-calendar__right"></div>
        </div>
      </div>
    </div>
  );
}
