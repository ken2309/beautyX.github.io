import React from "react";
import HomeLoggedCalendarAppointmentItem from "./HomeLoggedCalendarAppointmentItem";
interface IAppointmentList {
  datingList: any;
}

export default function HomeLoggedCalendarAppointmentList(
  props: IAppointmentList
) {
  const { datingList } = props;
  return datingList.map((item: any, i: number) => {
    return (
      <div className="calendar-appointment__list">
        {item &&
          item.map((date: any, i: number) => (
            <HomeLoggedCalendarAppointmentItem
              key={i}
              time={date.time}
              name={date.name}
              addSpa={date.addSpa}
              status={date.status}
            />
          ))}
      </div>
    );
  });
}
