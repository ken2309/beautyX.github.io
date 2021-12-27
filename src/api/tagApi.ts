import axiosClient from './axios';

class Tag {
      getAll = () => {
            const url = `/tags`;
            return axiosClient.get(url);
      }
}
const tagsApi = new Tag();
export default tagsApi