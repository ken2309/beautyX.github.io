import React, { useState, useEffect } from "react";
import SectionTitle from "../../SectionTitle/index";
import dayjs from "dayjs";
import HomeLoggedCalendarComponent from "./HomeLoggedCalendarComponent";
import HomeLoggedCalendarChooseMonth from "./HomeLoggedCalendarChooseMonth";
import HomeLoggedCalendarStatus from "./HomeLoggedCalendarStatus";
import HomeLoggedCalendarList from "./HomeLoggedCalendarList";
import { Container } from "@mui/material";

const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const todayObj = dayjs();
const dataCalendar = [
  {
    id: 1,
    time: "09:00 - 10:00",
    name: "Lịch hẹn 1",
    addSpa: "163 Trần Quang Khải, P. Tân Định, Q.1",
    date: "1/11/2021",
    status: 1,
  },
  {
    id: 2,
    time: "11:00 - 12:00",
    name: "Lịch hẹn 2",
    addSpa: "163 Trần Quang Khải, P. Tân Định, Q.1",
    date: "1/11/2021",
    status: 2,
  },
  {
    id: 3,
    time: "12:00 - 13:00",
    name: "Lịch hẹn 3",
    addSpa: "163 Trần Quang Khải, P. Tân Định, Q.1",
    date: "1/11/2021",
    status: 3,
  },
  {
    id: 4,
    time: "13:00 - 14:00",
    name: "Lịch hẹn 4",
    addSpa: "163 Trần Quang Khải, P. Tân Định, Q.1",
    date: "1/11/2021",
    status: 4,
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
      <Container>
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
              weekDayOfFirst={weekDayOfFirst}
              weekDayOfLast={weekDayOfLast}
              thisYear={thisYear}
              thisMonth={thisMonth}
              daysInMonth={daysInMonth}
              dayObjOfFirstMonth={getFirstDayOfW(selectedDay)}
              dayObjOfLastMonth={getLastDayOfW(selectedDay)}
              datepick={datepick}
              handleGetDate={handleGetDate}
              datingList={datingList}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
