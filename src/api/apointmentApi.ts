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
    const url = `appointments/${id}`;
    if (localStorage.getItem("_WEB_TK")) {
      return axiosClient.get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("_WEB_TK"),
          // Authorization: `Bearer 10|H7AET4CwOAyNJUz0mt0qp8TiM8eKgXf0Y6zPMOP4`,
        },
      });
    }
  };
  getAppoitment = (params: any) => {
    // const url = "appointments?sort=-id&page=1&limit=15";
    const url = `appointments?sort=-id&page=1&limit=15&filter%5Btime_start%5D=${params}`;
    if (localStorage.getItem("_WEB_TK")) {
      return axiosClient.get(url, {
        headers: {
          // Authorization: "Bearer " + localStorage.getItem("_WEB_TK"),
          Authorization: `Bearer 10|H7AET4CwOAyNJUz0mt0qp8TiM8eKgXf0Y6zPMOP4`,
        },
      });
    }
  };
}
const apointmentApi = new ApointmentApi();
export default apointmentApi;
