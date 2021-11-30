import React from "react";
import HomeLoggedCalendarAppointmentList from "./HomeLoggedCalendarAppointmentList";

interface IAppointment {
  datingList: any;
}
export default function HomeLoggedCalendarAppointment(props: IAppointment) {
  const { datingList } = props;
  return (
    <div className="calendar-appointment">
      {datingList.map((item: any) => (
        <HomeLoggedCalendarAppointmentList
          key={item.id}
          time={item.time}
          name={item.name}
          addSpa={item.addSpa}
          datingList={datingList}
        />
      ))}
    </div>
  );
}
