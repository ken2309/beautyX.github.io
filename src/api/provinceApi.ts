import axiosClient from './axios';

class Provinces {
      getAll = () => {
            const url = `/provinces`
            const params = {
                  type: 'PROVINCE',
                  sort: '-organizations_count'
            }
            return axiosClient.get(url, { params })
      }
}
const provincesApi = new Provinces();
export default provincesApi