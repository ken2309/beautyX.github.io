import React from "react";
import HomeLoggedCalendarAppointmentItem from "./HomeLoggedCalendarAppointmentItem";
interface IAppointmentList {
  time: any;
  name: any;
  addSpa: any;
  datingList: any;
}
export default function HomeLoggedCalendarAppointmentList(
  props: IAppointmentList
) {
  const { datingList } = props;
  return (
    <div className="calendar-appointment__list">
      {datingList.map((item: any) => (
        <HomeLoggedCalendarAppointmentItem
          time={item.time}
          name={item.name}
          addSpa={item.addSpa}
          status={item.status}
        />
      ))}
    </div>
  );
}
