import React from "react";
interface IAppointmentItem {
  time: any;
  name: any;
  addSpa: any;
  status: any;
}
export default function HomeLoggedCalendarAppointmentItem(
  props: IAppointmentItem
) {
  const { time, name, addSpa, status } = props;
  const checkdotstt = (stt: any) => {
    switch (stt) {
      case 1:
        return <span className="appointment-status status-dot-green" />;
      case 2:
        return <span className="appointment-status status-dot-blue" />;
      case 3:
        return <span className="appointment-status status-dot-pink" />;
      case 4:
        return <span className="appointment-status status-dot-red" />;
      default:
        break;
    }
  };
  return (
    <div className="calendar-appointment__item">
      <div className="calendar-appointment__item-row">
        {checkdotstt(status)}
        <div className="calendar-appointment__item-column">
          <p>{time}</p> <p>{name}</p>
          <p>{addSpa}</p>
        </div>
      </div>
    </div>
  );
}
