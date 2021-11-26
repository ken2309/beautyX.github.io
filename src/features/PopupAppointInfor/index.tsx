import React, { useContext, useState } from "react";
import "./style.css";
import ButtonCus from "../../components/ButtonCus";
import Service from "./components/Service";
import DateComponent from "./components/DateComponent";
import Time from "./components/Time";
import Branch from "./components/Branch";
import Map from "./components/Map";
import Staff from "./components/Staff";
import SectionTitle from "../SectionTitle";
import PopupSuccess from './components/PopupSuccess'
import { AppContext } from "../../context/AppProvider";

export default function PopupAppointInfor() {
  const { t } = useContext(AppContext);
  const title = t('booking.booking_info')
  const today = new Date();
  const [openStaff, setOpenStaff] = React.useState(false);
  const [openService, setOpenService] = React.useState(false);
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [timeValue, setTimeValue] = useState<Date | null>(null);
  const [service, setService] = useState();
  const [popup, setPopup] = useState(false);
  // console.log(dateValue?.toLocaleDateString());
  // function onSubmit(e: React.FormEvent<HTMLInputElement>) {
  //   console.log("ok");
  //   e.preventDefault();
  // }
  const handleSubmitBooking = () => {
    const params = {
      service: service,
      date: dateValue?.toLocaleDateString(),
      time: timeValue?.toLocaleTimeString()
    }
    if (service && dateValue && timeValue) {
      console.log(params)
      setPopup(true);
    } else {
      console.log('err')
    }
  }
  const services = JSON.parse(`${localStorage.getItem('booking-service')}`)
  return (
    <div className="appointInfor">
      <div className="appointInfor-content">
        <SectionTitle title={title} textAlign="center" />
        <div className="appointInfor-booked">
          <Service
            service={service}
            setService={setService}
            services={services}
            openService={openService}
            setOpenService={setOpenService}
            setOpenStaff={setOpenStaff}
          />
          {/* group input choose time */}
          <div className="appointInfor-booked__timing">
            <DateComponent
              today={today}
              dateValue={dateValue}
              setDateValue={setDateValue}
            />
            <Time
              today={today}
              timeValue={timeValue}
              setTimeValue={setTimeValue}
            />
          </div>
          {/* end group choose time */}
        </div>
        <Branch />
        <Map />
        <Staff
          openStaff={openStaff}
          setOpenStaff={setOpenStaff}
          setOpenService={setOpenService}
        />
        <div className="appointInfor-btn">
          <ButtonCus
            text={t('booking.accept')}
            fontSize="14px"
            lineHeight="20px"
            color="#ffffff"
            border="solid 1px var(--purple)"
            borderRadius="18px"
            backColor="var(--purple"
            onClick={handleSubmitBooking}
          />
        </div>
      </div>
      <PopupSuccess
        popup={popup}
        setPopup={setPopup}
      />
    </div>
  );
}
