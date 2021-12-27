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
  getAppoitment = () => {
    const url = "appointments?sort=-id&page=1&limit=15";
    if (localStorage.getItem("_WEB_TK")) {
      return axiosClient.get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("_WEB_TK"),
        },
      });
    }
  };
}
const apointmentApi = new ApointmentApi();
export default apointmentApi;
