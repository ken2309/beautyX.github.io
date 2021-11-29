import React from "react";
import HomeLoggedCalendarAppointmentItem from "./HomeLoggedCalendarAppointmentItem";

export default function HomeLoggedCalendarAppointmentList() {
  return (
    <div className="calendar-appointment__list">
      <HomeLoggedCalendarAppointmentItem />
      <HomeLoggedCalendarAppointmentItem />
      <HomeLoggedCalendarAppointmentItem />
    </div>
  );
}
