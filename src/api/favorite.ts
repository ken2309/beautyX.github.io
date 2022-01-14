import axiosClient from './axios';

class Favorite {
      postFavorite = (org_id: number) => {
            const params = {
                  organization_id: org_id
            }
            const url = `/favorites`
            return axiosClient.post(url, params, {
                  headers: {
                        Authorization: "Bearer " + localStorage.getItem("_WEB_TK"),
                  },
            })
      };
      deleteFavorite = (org_id: number) => {
            const url = `/favorites`
            return axiosClient.delete(url, {
                  headers: {
                        Authorization: "Bearer " + localStorage.getItem("_WEB_TK"),
                  },
                  data: { organization_id: org_id }
            });
      }
}
const favorites = new Favorite();
export default favorites