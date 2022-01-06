import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import { AppContext } from '../../context/AppProvider';
import Month from './components/Month';
import Calendar from './components/Calendar';
import './datePicker.css'

const todayObj = dayjs();
function DatePicker(props: any) {
      const { t } = useContext(AppContext)
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
      // (tháng 1 -> [0], tháng 12 -> [11])
      let thisMonth = dayObj.month();
      // lấy số ngày trong tháng hiện tại (VD: T1: 31days T2: 28days)
      let daysInMonth = dayObj.daysInMonth();
      // lấy ngày đầu tiên của tháng hiện tại (format of dayjs)
      let dayObjOfFirstMonth = dayjs(`${thisYear}-${thisMonth + 1}-1`);
      // lấy thứ của ngày đầu tiên của tháng (Sunday -> 0, Saturday -> 6)
      let weekDayOfFirst = dayObjOfFirstMonth.day();
      // lấy ngày cuối cùng của tháng hiện tại
      let dayObjOfLastMonth = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
      // lấy thứ của ngày cuối cùng của tháng
      let weekDayOfLast = dayObjOfLastMonth.day();
      const [chooseMonth, setChooseMonth] = useState(dayjs().format("YYYY-MM"));
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
      console.log(datepick)
      const handleGetDate = (date: any, thisMonth: any, thisYear: any) => (
            setdatepick({
                  date: date + 1,
                  month: thisMonth,
                  year: thisYear,
            })
      )
      console.log(chooseMonth);
      return (
            <div className="calendar-choosedate">
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