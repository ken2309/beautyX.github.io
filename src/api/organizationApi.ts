import axiosClient from './axios';

class Organization {
      getOrgById = (id: any) => {
            const url = `/organizations/${id}?withBranches=true`;
            return axiosClient.get(url);
      }
      getOrgByKeyword = (params: any) => {
            if (document.body.offsetWidth < 767) {
                  const url = `/organizations?page=${params.page}&limit=10&filter%5Bkeyword%5D=${params.keySearch}`;
                  return axiosClient.get(url);
            } else {
                  const url = `/organizations?page=${params.page}&limit=3&filter%5Bkeyword%5D=${params.keySearch}`;
                  return axiosClient.get(url);
            }

      }
      //ex get all
      getAll = () => {
            const url = `/organizations?page=1&limit=15`;
            return axiosClient.get(url)
      }
}
const orgApi = new Organization();
export default orgApi;