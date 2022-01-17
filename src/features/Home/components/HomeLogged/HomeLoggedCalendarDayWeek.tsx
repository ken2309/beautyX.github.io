import React from 'react';

function HomeLoggedCalendarDayWeek(props: any) {
      const { date } = props
      console.log(date);
      return (
            <div className="week-cell">
                  {date.d}
            </div>
      );
}

export default HomeLoggedCalendarDayWeek;