import React from "react";
import "./style.css";
import ButtonCus from "../../components/ButtonCus";
import Service from "./components/Service";
import Date from "./components/Date";
import Time from "./components/Time";
import Branch from "./components/Branch";
import Map from "./components/Map";
import Staff from "./components/Staff";
import SectionTitle from "../SectionTitle";

const title = "Thông tin đặt hẹn";
export default function PopupAppointInfor() {
  const [openStaff, setOpenStaff] = React.useState(false);
  const [openService, setOpenService] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLInputElement>) {
    console.log("ok");
    e.preventDefault();
  }
  return (
    <div className="appointInfor">
      <div className="appointInfor-content">
        <SectionTitle title={title} textAlign="center" />
        <div className="appointInfor-booked">
          <Service
            openService={openService}
            setOpenService={setOpenService}
            setOpenStaff={setOpenStaff}
          />
          {/* group input choose time */}
          <div className="appointInfor-booked__timing">
            <Date />
            <Time />
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
            text="Xác nhận đặt hẹn"
            fontSize="14px"
            lineHeight="20px"
            color="#ffffff"
            border="solid 1px var(--purple)"
            borderRadius="18px"
            backColor="var(--purple"
            onClick={(e: any) => onSubmit(e)}
          />
        </div>
      </div>
    </div>
  );
}
