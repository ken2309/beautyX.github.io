import React, { useEffect, useState } from "react";
import Organization from "../../../../api/organizationApi";
import { IBranch } from "../../../../interface/branch";
import { IOrganization } from "../../../../interface/organization";
//import CalendarPopupDetail from "./CalendarPopupDetail";
import AppointmentDetail from '../../../AppointmentDetail/index';

export default function HomeLoggedCalendarAppointmentItem(props: any) {
  const { datingList } = props;
  const [org, setOrg] = useState<IOrganization>();
  const [branch, setBranch] = useState<IBranch>();
  const [openPopupDetail, setOpenPopupDetail] = useState(false);

  function handleOpenPopupDetail() {
    setOpenPopupDetail(true);
  }
  useEffect(() => {
    async function handleGetOrg_Br() {
      try {
        const res = await Organization.getOrgBrById({ id: datingList.org_id });
        const data = await res.data.context;
        // console.log("data :>> ", data);
        // console.log(`res`, res);
        setOrg(data);
        setBranch(
          data.branches.find((item: any) => item.id === datingList.branch_id)
        );
      } catch (error) {
        console.log(error);
      }
    }
    handleGetOrg_Br();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datingList.org_id]);
  // console.log(`org`, org);
  // console.log(`branch`, branch);
  const checkdotstt = (stt: any) => {
    switch (stt) {
      case "CONFIRMED":
        return <span className="appointment-status status-dot-green" />;
      case "ARRIVED":
        return <span className="appointment-status status-dot-green" />;
      case "NEW":
        return <span className="appointment-status status-dot-blue" />;
      case "ONLINE_BOOKING":
        return <span className="appointment-status status-dot-blue" />;
      case "DONE":
        return <span className="appointment-status status-dot-pink" />;
      case "CANCEL":
        return <span className="appointment-status status-dot-red" />;
      case "NOT COME":
        return <span className="appointment-status status-dot-red" />;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="calendar-appointment__item">
        <div className="calendar-appointment__item-row">
          {checkdotstt(datingList.status)}
          <div className="calendar-appointment__item-column">
            <div className="calendar-appointment__item-time">
              <p>{datingList.time_start}</p>
              <p>{"-"}</p>
              <p>{datingList.time_end}</p>
            </div>
            <p className="calendar-appointment__item-name">{org?.name}</p>
            <p className="calendar-appointment__item-address">
              {branch ? branch.full_address : org?.full_address}
            </p>
            <button
              onClick={handleOpenPopupDetail}
              className="calendar-appointment__item-detail"
            >
              Chi tiết {">"}
            </button>
          </div>
        </div>
      </div>
      <AppointmentDetail
        org={org}
        branch={branch}
        datingList={datingList}
        openPopupDetail={openPopupDetail}
        setOpenPopupDetail={setOpenPopupDetail}
      />
    </div>
  );
}
