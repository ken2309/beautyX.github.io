import axiosClient from './axios';

class CategoryApi {
      getByOrgId = (params: any) => {
            const url = `/organizations/${params}/product_categories?page=1&limit=15`;
            return axiosClient.get(url);
      }
      getByOrgId_services = (params: any) => {
            const url = `/organizations/${params.org_id}/service_categories?page=1&limit=15`;
            return axiosClient.get(url);
      }
}
const categoryApi = new CategoryApi();
export default categoryApi