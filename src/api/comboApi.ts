import axiosClient from './axios'

class ComboApi{
      getByOrg_id=(params:any)=>{
            const url =`/organizations/${params.org_id}/service_card_values?page=${params.page}&limit=12`
            return axiosClient.get(url);
      }
}
const comboApi = new ComboApi()
export default comboApi