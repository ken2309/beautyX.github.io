import axiosClient from "./axios";

const session = window.sessionStorage.getItem("_WEB_TK");
const local = localStorage.getItem("_WEB_TK")

class UserAddress {
    getAddress = () => {
        const url = `/useraddresses`;
        const params = {
            limit: 15,
            page: 1
        }
        if (localStorage.getItem("_WEB_TK") || window.sessionStorage.getItem("_WEB_TK")) {
            return axiosClient.get(url, {
                params,
                headers: {
                    Authorization: `Bearer ${session ? session : local}`,
                },
            });
        }
    }
    postAddress = (values: any) => {
        const url = `/useraddresses`;
        const params = {
            "address": values.address,
            "is_default": true
        }
        if (localStorage.getItem("_WEB_TK") || window.sessionStorage.getItem("_WEB_TK")) {
            return axiosClient.post(url, params, {
                headers: {
                    Authorization: `Bearer ${session ? session : local}`,
                }
            });
        }
    }
    deleteAddress = (id: number) => {
        const url = `/useraddresses/${id}`;
        if (localStorage.getItem("_WEB_TK") || window.sessionStorage.getItem("_WEB_TK")) {
            return axiosClient.delete(url, {
                headers: {
                    Authorization: `Bearer ${session ? session : local}`,
                }
            });
        }
    }
    updateAddress = (values: any) => {
        const url = `/useraddresses/${values.id}`;
        const params = {
            "address":values.address,
            "is_default": true,
        }
        if (localStorage.getItem("_WEB_TK") || window.sessionStorage.getItem("_WEB_TK")) {
            return axiosClient.put(url, params, {
                headers: {
                    Authorization: `Bearer ${session ? session : local}`,
                }
            });
        }
    }
}
const userAddressApi = new UserAddress();
export default userAddressApi;