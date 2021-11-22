import axiosClient from './axios';

class ProductApi{
      getByOrgId=(params:any)=>{
            const url =`/organizations/${params.org_id}/products?page=${params.page}&limit=9`;
            return axiosClient.get(url);
      }
      getDetailById=(params:any)=>{
            const url =`/organizations/${params.org_id}/products/${params.id}`;
            return axiosClient.get(url)
      }
}
const productsApi = new ProductApi();
export default productsApi;