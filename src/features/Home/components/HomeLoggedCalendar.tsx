import React, { useState, useEffect } from "react";
import SectionTitle from "../../SectionTitle/index";
import dayjs from "dayjs";
import HomeLoggedCalendarComponent from "./HomeLoggedCalendarComponent";
import HomeLoggedCalendarChooseMonth from "./HomeLoggedCalendarChooseMonth";
import HomeLoggedCalendarStatus from "./HomeLoggedCalendarStatus";
import HomeLoggedCalendarList from "./HomeLoggedCalendarList";
const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const todayObj = dayjs();
const dataCalendar = [
  {
    id: 1,
    time: "09.00 - 10.00",
    nameCalen: "Lịch hẹn 1",
    nameSpa: "Spa 1",
    addSpa: "1 Lũy Bán Bích",
    note: "Note 1",
    date: "1/11/2021",
    status: 1,
  },
  {
    id: 11,
    time: "09.00 - 10.00",
    nameCalen: "Lịch hẹn 1",
    nameSpa: "Spa 1",
    addSpa: "1 Lũy Bán Bích",
    note: "Note 1",
    date: "1/11/2021",
    status: 2,
  },
  {
    id: 12,
    time: "09.00 - 10.00",
    nameCalen: "Lịch hẹn 1",
    nameSpa: "Spa 1",
    addSpa: "1 Lũy Bán Bích",
    note: "Note 1",
    date: "1/11/2021",
    status: 3,
  },
  {
    id: 13,
    time: "09.00 - 10.00",
    nameCalen: "Lịch hẹn 1",
    nameSpa: "Spa 1",
    addSpa: "1 Lũy Bán Bích",
    note: "Note 1",
    date: "1/11/2021",
    status: 4,
  },
  {
    id: 2,
    time: "10.00 - 11.00",
    nameCalen: "Lịch hẹn 2",
    nameSpa: "Spa 2",
    addSpa: "2 Cộng Hòa",
    note: "Note 2",
    date: "22/11/2021",
    status: 2,
  },
  {
    id: 3,
    time: "11.00 - 12.00",
    nameCalen: "Lịch hẹn 3",
    nameSpa: "Spa 3",
    addSpa: "3 Trường Trinh",
    note: "Note 3",
    date: "24/11/2021",
    status: 3,
  },
  {
    id: 4,
    time: "15.00 - 16.00",
    nameCalen: "Lịch hẹn 4",
    nameSpa: "Spa 4",
    addSpa: "4 Ngô Quyền",
    note: "Note 4",
    date: "24/11/2021",
    status: 2,
  },
  {
    id: 5,
    time: "15.00 - 16.00",
    nameCalen: "Lịch hẹn 5",
    nameSpa: "Spa 5",
    addSpa: "5 Nguyễn Đình Chiểu",
    note: "Note 5",
    date: "25/11/2021",
    status: 1,
  },
  {
    id: 6,
    time: "18.00 - 20.00",
    nameCalen: "Lịch hẹn 6",
    nameSpa: "Spa 6",
    addSpa: "4 Âu Cơ",
    note: "Note 6",
    date: "21/11/2021",
    status: 4,
  },
  {
    id: 7,
    time: "18.00 - 20.00",
    nameCalen: "Lịch hẹn 6",
    nameSpa: "Spa 6",
    addSpa: "4 Âu Cơ",
    note: "Note 6",
    date: "25/11/2021",
    status: 2,
  },
  {
    id: 8,
    time: "18.00 - 20.00",
    nameCalen: "Lịch hẹn 7",
    nameSpa: "Spa 7",
    addSpa: "7 Âu Cơ",
    note: "Note 7",
    date: "28/11/2021",
    status: 3,
  },
  {
    id: 9,
    time: "18.00 - 20.00",
    nameCalen: "Lịch hẹn 8",
    nameSpa: "Spa 8",
    addSpa: "8 Âu Cơ",
    note: "Note 8",
    date: "29/11/2021",
    status: 4,
  },
  {
    id: 10,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "29/11/2021",
    status: 3,
  },
  {
    id: 19,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "29/11/2021",
    status: 1,
  },
  {
    id: 20,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "29/11/2021",
    status: 1,
  },
  {
    id: 21,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "4/11/2021",
    status: 1,
  },
  {
    id: 22,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "4/11/2021",
    status: 4,
  },
  {
    id: 23,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "4/11/2021",
    status: 3,
  },
  {
    id: 24,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "4/11/2021",
    status: 2,
  },
  {
    id: 25,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "4/11/2021",
    status: 4,
  },
  {
    id: 26,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "25/11/2021",
    status: 3,
  },
  {
    id: 27,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "25/11/2021",
    status: 2,
  },
  {
    id: 28,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "25/11/2021",
    status: 4,
  },
  {
    id: 29,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "25/11/2021",
    status: 3,
  },
  {
    id: 30,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "25/11/2021",
    status: 2,
  },
  {
    id: 31,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "25/11/2021",
    status: 2,
  },
  {
    id: 32,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "25/11/2021",
    status: 2,
  },
  {
    id: 33,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "4/11/2021",
    status: 2,
  },
  {
    id: 34,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "4/11/2021",
    status: 2,
  },
  {
    id: 35,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "4/11/2021",
    status: 2,
  },
  {
    id: 36,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "30/11/2021",
    status: 2,
  },
  {
    id: 37,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "30/11/2021",
    status: 2,
  },
  {
    id: 38,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "30/11/2021",
    status: 2,
  },
  {
    id: 39,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "30/11/2021",
    status: 4,
  },
  {
    id: 40,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "30/11/2021",
    status: 3,
  },
  {
    id: 41,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "30/11/2021",
    status: 2,
  },
  {
    id: 42,
    time: "19.00 - 21.00",
    nameCalen: "Lịch hẹn 9",
    nameSpa: "Spa 9",
    addSpa: "9 Âu Cơ",
    note: "Note 9",
    date: "9/12/2021",
    status: 1,
  },
];
export default function HomeLoggedCalendar() {
  const [datingList, setdatingList] = useState([]);
  const [dotAppoint, setdotAppoint] = useState([]);

  // dayjs(year-mouth-day) -> tạo ra 1 ngày (format of dayjs)
  const [dayObj, setDayObj] = useState(dayjs()); // lấy time hiện tại (year-mouth-day,...)
  let thisYear = dayObj.year();
  let thisMonth = dayObj.month(); // (tháng 1 -> 0, tháng 12 -> 11)
  let daysInMonth = dayObj.daysInMonth(); // lấy số ngày trong tháng hiện tại (VD: T1: 31days T2: 28days)
  let dayObjOfFirstMonth = dayjs(`${thisYear}-${thisMonth + 1}-1`); // lấy ngày đầu tiên của tháng curr (format of dayjs)
  let weekDayOfFirst = dayObjOfFirstMonth.day(); // lấy thứ của ngày đầu tiên của tháng (Sunday -> 0, Saturday -> 6)
  let dayObjOfLastMonth = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`); // ngày cuối cùng của tháng curr
  let weekDayOfLast = dayObjOfLastMonth.day(); // thứ của ngày cuối cùng của tháng

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, "month"));
  };
  const handleNext = () => {
    setDayObj(dayObj.add(1, "month"));
  };
  // hander pick active 2 calendar
  const [datepick, setdatepick] = useState({
    date: todayObj.date(),
    month: todayObj.month(),
    year: todayObj.year(),
  });
  function handleGetDate(date: any, thisMonth: any, thisYear: any) {
    setdatepick({
      date: date + 1,
      month: thisMonth,
      year: thisYear,
    });
    handleAppoint(date, thisMonth, thisYear, false);
  }
  // hander Appoint
  function handleAppoint(
    date: any,
    thisMonth: any,
    thisYear: any,
    istoday: boolean
  ) {
    let newdate = date;
    if (!istoday) {
      newdate = date + 1;
    }
    // console.log(">>newdate", newdate);
    let newmonth = thisMonth + 1;
    const dateList: any = dataCalendar.filter((data) => {
      var parts = data.date.split("/");
      // console.log(parts[2], parts[1], parts[0]);
      return (
        // eslint-disable-next-line eqeqeq
        newdate == parts[0] && newmonth == parts[1] && thisYear == parts[2]
      );
    });
    setdatingList(dateList);
    // console.log(">>dateList", dateList);
  }

  function handleAppointDot() {
    let appointList: any = [];
    dataCalendar.map((date) => {
      let objIndex = appointList.findIndex((obj: any) => {
        if (obj.date == date.date && obj.status == date.status) {
          return true;
        }
        return false;
      });
      if (objIndex !== -1) {
        appointList[objIndex] = {
          ...appointList[objIndex],
          count: appointList[objIndex].count + 1,
          status: appointList[objIndex].status,
        };
      } else
        appointList.push({ date: date.date, count: 1, status: date.status });
    });
    // console.log("appointList", appointList);
    setdotAppoint(appointList);
  }
  const selectedDay = dayjs(
    `${datepick.year}-${datepick.month + 1}-${datepick.date}`
  );

  // lấy ngày đầu tuần trong tuần
  const getFirstDayOfW = (selectedDay: any) => {
    // t2 là 0 , chủ nhật là 6
    console.log(`(T2 -> 0, CN -> 6) `, selectedDay.day());
    if (selectedDay.startOf("week").month() !== selectedDay.month()) {
      return selectedDay.startOf("month");
    }
    console.log(`đầu tuần`, selectedDay.startOf("week").date());
    return selectedDay.startOf("week");
  };

  // lấy ngày cuối tuần trong tuần
  const getLastDayOfW = (selectedDay: any) => {
    if (selectedDay.day() === 6) {
      return selectedDay;
    }
    if (
      selectedDay.endOf("week").add(1, "day").month() !== selectedDay.month()
    ) {
      return selectedDay.endOf("month");
    }
    console.log(`cuối tuần`, selectedDay.endOf("week").date());
    return selectedDay.endOf("week");
  };
  useEffect(() => {
    if (dataCalendar[0].id) {
      let today = todayObj.date();
      handleAppoint(today, thisMonth, thisYear, true);
      handleAppointDot();
    }
  }, []);
  return (
    <div className="homelogged-calendar">
      <div className="homelogged-calendar__content">
        <SectionTitle title="Lịch hẹn của bạn" textAlign="left" />
        <div className="homelogged-calendar__wrap">
          <div className="homelogged-calendar__left">
            <div className="calendar-choosedate">
              <HomeLoggedCalendarChooseMonth
                handlePrev={handlePrev}
                handleNext={handleNext}
                dayObj={dayObj}
                Class={""}
              />
              <HomeLoggedCalendarComponent
                weekDays={weekDays}
                todayObj={todayObj}
                weekDayOfFirst={weekDayOfFirst}
                weekDayOfLast={weekDayOfLast}
                thisYear={thisYear}
                thisMonth={thisMonth}
                daysInMonth={daysInMonth}
                dayObjOfFirstMonth={dayObjOfFirstMonth}
                dayObjOfLastMonth={dayObjOfLastMonth}
                dotAppoint={dotAppoint}
                handleAppoint={handleAppoint}
                datepick={datepick}
                handleGetDate={handleGetDate}
              />
            </div>
            <HomeLoggedCalendarStatus />
          </div>
          <HomeLoggedCalendarList
            weekDays={weekDays}
            todayObj={selectedDay}
            weekDayOfFirst={weekDayOfFirst}
            weekDayOfLast={weekDayOfLast}
            thisYear={thisYear}
            thisMonth={thisMonth}
            daysInMonth={daysInMonth}
            dayObjOfFirstMonth={getFirstDayOfW(selectedDay)}
            dayObjOfLastMonth={getLastDayOfW(selectedDay)}
            handleAppoint={handleAppoint}
            dotAppoint={dotAppoint}
            datepick={datepick}
            handleGetDate={handleGetDate}
          />
        </div>
      </div>
    </div>
  );
}
