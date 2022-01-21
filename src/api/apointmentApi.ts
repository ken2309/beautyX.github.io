import axiosClient from "./axios";

class ApointmentApi {
  sendApointment = (props: any) => {
    const url = "organizations/" + props.orgId + "/appointments/";

    return axiosClient.post(
      url,
      {
        ...props.apointment,
      },
      {
        headers: {
          Authorization: "Bearer " + props.token, // headers token
        },
      }
    );
  };
  // get detail appointment by id
  getAppointmentById = (id: any) => {
    const session = window.sessionStorage.getItem("_WEB_TK");
    const local = localStorage.getItem("_WEB_TK")
    const url = `appointments/${id}`;
    if (localStorage.getItem("_WEB_TK")) {
      return axiosClient.get(url, {
        headers: {
          Authorization: `Bearer ${session ? session : local}`,
        },
      });
    }
  };
  getAppoitment = (params: any) => {
    // const url = "appointments?sort=-id&page=1&limit=15";
    const session = window.sessionStorage.getItem("_WEB_TK");
    const local = localStorage.getItem("_WEB_TK")
    const url = `appointments?sort=-id&page=1&limit=15&filter%5Btime_start%5D=${params}`;
    if (localStorage.getItem("_WEB_TK") || session) {
      return axiosClient.get(url, {
        headers: {
          Authorization: `Bearer ${session ? session : local}`,
        },
      });
    }
  };
  postAppointment = (params: any, org_id: any) => {
    // console.log(params, org_id);
    const session = window.sessionStorage.getItem("_WEB_TK");
    const local = localStorage.getItem("_WEB_TK")
    const url = `organizations/${org_id}/appointments`;
    return axiosClient.post(url, params, {
      headers: {
        Authorization: `Bearer ${session ? session : local}`,
      },
    });
  }
}
const apointmentApi = new ApointmentApi();
export default apointmentApi;
