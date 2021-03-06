import axiosClient from "./axios";

class ServiceApi {
  getByOrg_id = (params: any) => {
    const url = `/organizations/${params.org_id}/services?page=${params.page}&limit=12`;
    return axiosClient.get(url);
  };
  getByOrgId_cateId = (params: any) => {
    const url = `/organizations/${params.org_id}/services?page=${params.page}&limit=12&filter%5Bservice_group_id%5D=${params.cate_id}`;
    return axiosClient.get(url);
  };
  getDetailById = (params: any) => {
    const url = `/organizations/${params.org_id}/services/${params.ser_id}`;
    return axiosClient.get(url);
  };
  getBySearch = (params: any) => {
    const url = `/organizations/${params.org_id}/services?page=1&limit=15&filter%5Bkeyword%5D=${params.searchKey}`;
    return axiosClient.get(url);
  };
}
const serviceApi = new ServiceApi();
export default serviceApi;
