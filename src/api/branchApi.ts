import axiosClient from './axios';

class BranchApi{
      getBranchByOrg=(param:any)=>{
            const url =`/organizations/2/branches`;
            return axiosClient.get(url);
      }
}
const branchApi = new BranchApi();
export default branchApi;