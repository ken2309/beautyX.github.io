import axiosClient from './axios';

class Order {
      getOrder = () => {
            const url = `orders?sort=-id&page=1&limit=15`;
            return axiosClient.get(url, {
                  headers: {
                        Authorization: "Bearer " + localStorage.getItem("_WEB_TK"),
                  },
            })
      }
      postOrder = (org_id: number, params: object) => {
            console.log(org_id, params);
            const data = JSON.stringify(params);
            const url = `/organizations/${org_id}/orders`;
            return axiosClient.post(url, data, {
                  headers: {
                        Authorization: "Bearer " + localStorage.getItem("_WEB_TK"),
                  },
            })
      }
}
const order = new Order();
export default order