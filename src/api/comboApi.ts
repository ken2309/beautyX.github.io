import axiosClient from './axios'

class ComboApi{
      getByOrg_id=(params:any)=>{
            //organizations/4/treatment_combo?page=1&limit=12
            const url =`/organizations/${params.org_id}/treatment_combo?page=${params.page}&limit=12`
            return axiosClient.get(url);
      }
}
const comboApi = new ComboApi()
export default comboApi