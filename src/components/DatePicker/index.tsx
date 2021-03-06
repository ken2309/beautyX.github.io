import React, { useContext, useState } from "react";
import dayjs from "dayjs";
import { AppContext } from "../../context/AppProvider";
import Month from "./components/Month";
import Calendar from "./components/Calendar";
import "./datePicker.css";

const todayObj = dayjs();
function DatePicker(props: any) {
  const { setChooseDate } = props;
  const { t } = useContext(AppContext);
  const weekDays = [
    t("Home.su"),
    t("Home.mo"),
    t("Home.tu"),
    t("Home.we"),
    t("Home.th"),
    t("Home.fr"),
    t("Home.sa"),
  ];
  const [dayObj, setDayObj] = useState(dayjs());
  let thisYear = dayObj.year();
  let thisMonth = dayObj.month();
  let daysInMonth = dayObj.daysInMonth();
  let dayObjOfFirstMonth = dayjs(`${thisYear}-${thisMonth + 1}-1`);
  let weekDayOfFirst = dayObjOfFirstMonth.day();
  let dayObjOfLastMonth = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
  let weekDayOfLast = dayObjOfLastMonth.day();
  const [, setChooseMonth] = useState(dayjs().format("YYYY-MM"));
  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, "month"));
    setChooseMonth(dayObj.subtract(1, "month").format("YYYY-MM"));
  };
  const handleNext = () => {
    setDayObj(dayObj.add(1, "month"));
    setChooseMonth(dayObj.add(1, "month").format("YYYY-MM"));
  };
  // hander pick active calendar
  const [datepick, setdatepick] = useState({
    date: todayObj.date(),
    month: todayObj.month(),
    year: todayObj.year(),
  });
  //console.log(datepick)
  const handleGetDate = (date: any, thisMonth: any, thisYear: any) => {
    setdatepick({
      date: date + 1,
      month: thisMonth,
      year: thisYear,
    });
    const timeBook = {
      year: `${thisYear}`,
      month: thisMonth + 1 < 10 ? `0${thisMonth + 1}` : `${thisMonth + 1}`,
      date: date + 1 < 10 ? `0${date + 1}` : `${date + 1}`,
    };
    if (setChooseDate) {
      setChooseDate(`${timeBook.year}-${timeBook.month}-${timeBook.date}`);
    }
  };
  //console.log(chooseMonth);
  return (
    <div style={{ padding: "0px" }} className="calendar-choosedate">
      <Month
        handlePrev={handlePrev}
        handleNext={handleNext}
        dayObj={dayObj}
        Class={""}
      />
      <Calendar
        weekDays={weekDays}
        weekDayOfFirst={weekDayOfFirst}
        weekDayOfLast={weekDayOfLast}
        thisYear={thisYear}
        thisMonth={thisMonth}
        daysInMonth={daysInMonth}
        dayObjOfFirstMonth={dayObjOfFirstMonth}
        dayObjOfLastMonth={dayObjOfLastMonth}
        datepick={datepick}
        handleGetDate={handleGetDate}
      />
    </div>
  );
}

export default DatePicker;
