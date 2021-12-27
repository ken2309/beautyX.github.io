import React from "react";
import HomeLoggedCalendarAppointmentItem from "./HomeLoggedCalendarAppointmentItem";
interface IAppointmentList {
  datingList: any;
}

export default function HomeLoggedCalendarAppointmentList(
  props: IAppointmentList
) {
  const { datingList } = props;
  console.log(datingList);

  const getStartTimeAndId = () => {
    const result: any = [];
    datingList.forEach((dating: any) => {
      if (!dating) return;
      dating.forEach((x: any) => {
        const timeStart = x.time_start.split(":");
        const id = x.id;
        result.push({ id, timeStart });
      });
    });
    return result;
  };

  const sortTimeStart = () => {
    const startTimeAndId = getStartTimeAndId();
    for (let i = 0; i < startTimeAndId.length - 1; i++) {
      if (startTimeAndId[i].timeStart[0] > startTimeAndId[i + 1].timeStart[0]) {
        [startTimeAndId[i], startTimeAndId[i + 1]] = [
          startTimeAndId[i + 1],
          startTimeAndId[i],
        ];
      }
    }
    return startTimeAndId;
  };

  const sortDatingList = () => {
    const sortedTimeStart = sortTimeStart();
    const ids = sortedTimeStart.map((x: any) => x.id);
    const newDatingList = [...datingList];

    return newDatingList.map((date: any) => {
      if (!date) return undefined;
      const result: any = [];
      date.forEach((x: any, index: number) => {
        const correctDate = date.find((item: any) => item.id === ids[index]);
        result.push(correctDate);
      });
      return result;
    });
  };
  const sortedDatingList = sortDatingList();
  console.log("datingList", datingList);
  console.log("sortedDatingList", sortedDatingList);
  //console.log(sortedDatingList.flat());

  // const array = sortedDatingList.flat();
  // console.log(array);
  // const arrPush: any[] = [];
  // for(var item of array){
  //   if(item){
  //     arrPush.push(item)
  //   }
  // }
  // console.log(arrPush)


    // return (
    //   <div className="calendar-appointment__list">
    //     {arrPush &&
    //       arrPush.map((item: any, i: number) => (
    //         <HomeLoggedCalendarAppointmentItem key={i} datingList={item} />
    //       ))}
    //   </div>
    // );
  return (
    <>
      {
        sortedDatingList.map((date: any, index: number) => (
          <div key={index} className="calendar-appointment__list">
            {
              date &&
              date.map((item: any, index: number) => (
                <HomeLoggedCalendarAppointmentItem key={index} datingList={item} />
              ))
            }
          </div>
        ))
      }
    </>
  )

  // return sortedDatingList.map((item: any, index: number) => {
  //   return (
  //     <div key={index} className="calendar-appointment__list">
  //       {item &&
  //         item.map((item: any, i: number) => (
  //           <HomeLoggedCalendarAppointmentItem key={i} datingList={item} />
  //         ))}
  //     </div>
  //   );
  // });
}
