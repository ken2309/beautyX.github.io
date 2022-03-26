import axiosClient from "./axios";

const _session = window.sessionStorage.getItem("_WEB_TK");
const _local = localStorage.getItem("_WEB_TK")

class UserAddress {
    getAll = (session: any, local: any) => {
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
    getAddress = (session: any, local: any) => {
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
    postAddress = (values: any, session: any, local: any) => {
        const url = `/useraddresses`;
        const params = {
            "address": values.address,
            "is_default": values.is_default,
            "is_bookmark": true
        }
        if (session || local) {
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
                    Authorization: `Bearer ${_session ? _session : _local}`,
                }
            });
        }
    }
    updateAddress = (values: any) => {
        const url = `/useraddresses/${values.id}`;
        const params = {
            "address": values.address,
            "is_default": true,
        }
        if (localStorage.getItem("_WEB_TK") || window.sessionStorage.getItem("_WEB_TK")) {
            return axiosClient.put(url, params, {
                headers: {
                    Authorization: `Bearer ${_session ? _session : _local}`,
                }
            });
        }
    }
    updateAddressCancelDefault = (values: any) => {
        const url = `/useraddresses/${values.id}`;
        const params = {
            "address": values.address,
            "is_default": false
        }
        if (localStorage.getItem("_WEB_TK") || window.sessionStorage.getItem("_WEB_TK")) {
            return axiosClient.put(url, params, {
                headers: {
                    Authorization: `Bearer ${_session ? _session : _local}`,
                }
            });
        }
    }
}
const userAddressApi = new UserAddress();
export default userAddressApi;