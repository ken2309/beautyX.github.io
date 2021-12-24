import React from "react";

export default function HomeLoggedCalendarAppointmentItem(props: any) {
  const { datingList } = props;
  const checkdotstt = (stt: any) => {
    switch (stt) {
      case "CONFIRMED":
        return <span className="appointment-status status-dot-green" />;
      case "ARRIVED":
        return <span className="appointment-status status-dot-green" />;
      case "NEW":
        return <span className="appointment-status status-dot-blue" />;
      case "ONLINE_BOOKING":
        return <span className="appointment-status status-dot-blue" />;
      case "DONE":
        return <span className="appointment-status status-dot-pink" />;
      case "CANCEL":
        return <span className="appointment-status status-dot-red" />;
      case "NOT COME":
        return <span className="appointment-status status-dot-red" />;
      default:
        break;
    }
  };
  return (
    <div className="calendar-appointment__item">
      <div className="calendar-appointment__item-row">
        {checkdotstt(datingList.status)}
        <div className="calendar-appointment__item-column">
          <div className="calendar-appointment__item-time">
            <p>{datingList.time_start}</p>
            <p>{"-"}</p>
            <p>{datingList.time_end}</p>
          </div>
          <p className="calendar-appointment__item-name">Name Spa</p>
          <p className="calendar-appointment__item-address">Address Spa</p>
        </div>
      </div>
    </div>
  );
}
