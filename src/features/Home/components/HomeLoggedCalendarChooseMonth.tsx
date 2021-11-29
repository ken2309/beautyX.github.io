import React from "react";
import "dayjs/locale/vi";
import icon from "../../../constants/icon";

interface IChooseMonth {
  Class: string;
  handlePrev: any;
  handleNext: any;
  dayObj: any;
}
export default function HomeLoggedCalendarChooseMonth(props: IChooseMonth) {
  const { handlePrev, handleNext, dayObj } = props;
  return (
    <div className={props.Class}>
      <div className="calendar-mounth">
        <div onClick={handlePrev} className="calendar-mounth__prev">
          <img className="calendar-mounth__icon" src={icon.pPrev} alt="" />
        </div>
        <span className="calendar-mounth__time text-white-color">
          {/* chỉ span này tiếng việt thêm .locale("vi") */}
          {dayObj.locale("vi").format("MMMM - YYYY")}
        </span>
        <div onClick={handleNext} className="calendar-mounth__next">
          <img className="calendar-mounth__icon" src={icon.pNext} alt="" />
        </div>
      </div>
    </div>
  );
}
