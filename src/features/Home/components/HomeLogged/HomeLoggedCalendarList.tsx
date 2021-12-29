import React, { useContext } from "react";
import range from "lodash-es/range";
import HomeLoggedCalendarAppointment from "./HomeLoggedCalendarAppointment";
import { AppContext } from "../../../../context/AppProvider";

interface IHomeLoggedCalendarList {
  weekDays: any;
  weekDayOfFirst: any;
  weekDayOfLast: any;
  thisYear: any;
  thisMonth: any;
  daysInMonth: any;
  dayObjOfFirstMonth: any;
  dayObjOfLastMonth: any;
  datepick: any;
  handleGetDate: any;
  datingList: any;
  daysInWeek: any;
}
export default function HomeLoggedCalendarList(props: IHomeLoggedCalendarList) {
  const { t } = useContext(AppContext);
  const {
    weekDayOfFirst,
    weekDayOfLast,
    thisYear,
    thisMonth,
    daysInMonth,
    dayObjOfFirstMonth,
    dayObjOfLastMonth,
    datepick,
    handleGetDate,
    datingList,
    daysInWeek,
  } = props;
  const weekDays = [
    t("Home.Sunday"),
    t("Home.Monday"),
    t("Home.Tuesday"),
    t("Home.Wednesday"),
    t("Home.Thursday"),
    t("Home.Friday"),
    t("Home.Saturday"),
  ];

  return (
    <div className="homelogged-calendar__right">
      <div className="week-container week-container__right">
        {weekDays.map((d: any) => (
          <div className="week-cell" key={d}>
            {d}
          </div>
        ))}

        <div className="day-container w-100">
          {dayObjOfLastMonth.date() > 6
            ? ""
            : range(weekDayOfFirst).map((i) => (
                <div className="day-cell day-cell--faded" key={i}>
                  {dayObjOfFirstMonth
                    .subtract(weekDayOfFirst - i, "day")
                    .date()}
                </div>
              ))}

          {
            // eslint-disable-next-line array-callback-return
            range(daysInMonth).map((i) => {
              if (
                i >= dayObjOfFirstMonth.date() - 1 &&
                i <= dayObjOfLastMonth.date() - 1
              ) {
                return (
                  <div
                    onClick={() => handleGetDate(i, thisMonth, thisYear)}
                    className={`week-day__right day-cell day-cell--in-month dot-active${
                      i + 1 === datepick.date &&
                      thisMonth === datepick.month &&
                      thisYear === datepick.year
                        ? " day-cell--today border-none week-day__right "
                        : ""
                    }`}
                    key={i}
                  >
                    {i + 1}
                  </div>
                );
              }
            })
          }

          {dayObjOfFirstMonth.date() >= 26
            ? range(6 - weekDayOfLast).map((i) => (
                <div className="day-cell day-cell--faded " key={i}>
                  {dayObjOfLastMonth.add(i + 1, "day").date()}
                </div>
              ))
            : ""}
        </div>
      </div>

      <HomeLoggedCalendarAppointment
        datingList={datingList}
        daysInWeek={daysInWeek}
      />
    </div>
  );
}
