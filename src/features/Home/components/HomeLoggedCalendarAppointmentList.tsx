import React from "react";
import HomeLoggedCalendarAppointmentItem from "./HomeLoggedCalendarAppointmentItem";
interface IAppointmentList {
  datingList: any;
}

export default function HomeLoggedCalendarAppointmentList(
  props: IAppointmentList
) {
  const { datingList } = props;
  return datingList.map((item: any, index: number) => {
    return (
      <div key={index} className="calendar-appointment__list">
        {item &&
          item.map((item: any, i: number) => (
            <HomeLoggedCalendarAppointmentItem key={i} datingList={item} />
          ))}
      </div>
    );
  });
}
