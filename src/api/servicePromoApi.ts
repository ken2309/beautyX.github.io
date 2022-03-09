import axiosClient from "./axios";

const location_user = JSON.parse(`${sessionStorage.getItem('USER_LOCATION')}`)

class ServicePromo {
    getByKeyword = (values: any) => {
        const url = `/services`;
        const params = {
            page: values.page,
            limit: 20,
            "filter[is_momo_ecommerce_enable]": true,
            "filter[keyword]": values.keyword
        }
        return axiosClient.get(url, { params })
    }
    getBySort = (values: any) => {
        const url = `/services`;
        const params = {
            page: values.page,
            limit: 20,
            "filter[keyword]": values.keyword,
            "filter[special_price]": true,
            "sort": values.dataSort
        }
        return axiosClient.get(url, { params })
    }
    getBySortFeature = (values: any) => {
        const url = `/services`;
        const params = {
            page: values.page,
            limit: 20,
            "filter[keyword]": values.keyword,
            "filter[is_momo_ecommerce_enable]": true,
            "filter[is_featured]": true,
            "sort": "-modified_date"
        }
        return axiosClient.get(url, { params })
    }
    getByUserLocation = (values: any) => {
        const url = `/services`;
        const params = {
            page: values.page,
            limit: 20,
            "filter[keyword]": values.keyword,
            "filter[is_momo_ecommerce_enable]": true,
            "filter[location]":location_user ? `${location_user.lat},${location_user.long}`:``
        }
        console.log(params, values)
        return axiosClient.get(url,{params})
    }
}
const servicePromoApi = new ServicePromo();
export default servicePromoApi