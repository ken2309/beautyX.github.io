import axiosClient from './axios';

class Organization {
      getOrgById=(id:any)=>{
            const url = `/organizations/${id}?withBranches=true`;
            return axiosClient.get(url);
      }
}
const orgApi = new Organization();
export default orgApi;