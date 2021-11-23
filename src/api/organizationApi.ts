import axiosClient from './axios';

class Organization {
      getOrgById=(id:any)=>{
            const url = `/organizations/${id}?withBranches=true`;
            return axiosClient.get(url);
      }
      getOrgByKeyword=(params:any)=>{
            const url = `/organizations?page=1&limit=15&filter%5Bkeyword%5D=${params}`;
            return axiosClient.get(url);
      }
}
const orgApi = new Organization();
export default orgApi;