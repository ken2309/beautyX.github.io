import axiosClient from "./axios";

class Favorite {
  postFavorite = (org_id: number) => {
    const session = window.sessionStorage.getItem("_WEB_TK");
    const local = localStorage.getItem("_WEB_TK");
    const params = {
      organization_id: org_id,
    };
    const url = `/favorites`;
    return axiosClient.post(url, params, {
      headers: {
        Authorization: `Bearer ${session ? session : local}`,
      },
    });
  };
  deleteFavorite = (org_id: number) => {
    const session = window.sessionStorage.getItem("_WEB_TK");
    const local = localStorage.getItem("_WEB_TK");
    const url = `/favorites`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: `Bearer ${session ? session : local}`,
      },
      data: { organization_id: org_id },
    });
  };
}
const favorites = new Favorite();
export default favorites;
