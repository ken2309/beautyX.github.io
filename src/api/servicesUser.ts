import axiosClient from "./axios";



class ServicesUser {
    getServices = (session: any, local: any) => {
        const url = `/orders`;
        const params = {
            page: 1,
            limit: 15,
            "filter[status]": "PAID",
            "filter[withServicesSold]": true,
            "include": "items|items_count",
            "sort": "-created_at",
            'filter[platform]': 'BEAUTYX'
        }
        return axiosClient.get(url, {
            params,
            headers: {
                Authorization: `Bearer ${session ? session : local}`,
            },
        })
    }
}
const servicesUserApi = new ServicesUser();
export default servicesUserApi;
