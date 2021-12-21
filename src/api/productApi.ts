import axiosClient from "./axios";

class ProductApi {
  getByOrgId = (params: any) => {
    console.log(params);
    const url = `/organizations/${params.org_id}/products?page=${params.page}&limit=8`;
    return axiosClient.get(url);
  };
  getByOrgId_cateId = (params: any) => {
    console.log(params);
    const url =
      `/organizations/${params.org_id}` +
      `/products?page=${params.page}` +
      `&limit=9&filter%5Bproduct_category_id%5D=${params.cate_id}`;
    return axiosClient.get(url);
  };
  getDetailById = (params: any) => {
    const url = `/organizations/${params.org_id}/products/${params.id}`;
    return axiosClient.get(url);
  };
}
const productsApi = new ProductApi();
export default productsApi;
