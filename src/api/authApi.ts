import axiosClient from './axios'

class Auth {
      login = (params: any) => {
            const url = `/auth/login`
            return axiosClient.post(url, params)
      }
      register = (params: any) => {
            const url = `/auth/register`
            return axiosClient.post(url, params)
      }
      getUserProfile = () => {
            const url = `/users/profile`
            if (localStorage.getItem('_WEB_TK')) {
                  return axiosClient.get(url, {
                        headers: {
                              'Authorization': 'Bearer ' + localStorage.getItem('_WEB_TK')
                        }
                  })
            }
      }
}
const auth = new Auth();
export default auth;