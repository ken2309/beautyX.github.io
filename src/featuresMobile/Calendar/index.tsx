import React from "react";
import Bottom from "../Bottom/index";
import HomeLoggedCalendar from "../../features/Home/components/HomeLogged/HomeLoggedCalendar";
// import BackButton from '../../components/BackButton'

function Calendar(props: any) {
  return (
    <>
      <div>
        <HomeLoggedCalendar />
      </div>
      <Bottom />
    </>
  );
}

export default Calendar;
