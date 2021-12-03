import axiosClient from './axios'

class Auth {
      login = (params: any) => {
            console.log(params)
            const url = `/auth/login`
            return axiosClient.post(url, params)
      }
}
const auth = new Auth();
export default auth;