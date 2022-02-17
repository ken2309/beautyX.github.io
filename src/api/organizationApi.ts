import axiosClient from "./axios";

interface IFilterOrg {
  page: number,
  limit: number,
  tags: string,
  provinceCode: number | string,
  minPrice: number | string,
  maxPrice: number | string
}

class Organization {
  getOrgBrById = (props: any) => {
    //console.log(props)
    let id = props.id || props;
    let withBranches = props.branches || true;
    const url = `/organizations/${id}?withBranches=${withBranches}`;
    return axiosClient.get(url);
  };
  getOrgById = (id: any) => {
    const url = `/organizations/${id}?withBranches=true`;
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("_WEB_TK"),
      },
    });
  };
  getOrgByKeyword = (params: any) => {
    if (document.body.offsetWidth < 767) {
      const url = `/organizations?page=${params.page}&limit=10&filter%5Bkeyword%5D=${params.keySearch}&include=branches`;
      return axiosClient.get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("_WEB_TK"),
        },
      });
    } else {
      const url = `/organizations?page=${params.page}&limit=3&filter%5Bkeyword%5D=${params.keySearch}&include=branches`;
      return axiosClient.get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("_WEB_TK"),
        },
      });
    }
  };
  getOrgByFilter = (values: IFilterOrg) => {
    const url = `/organizations`
    const params = {
      page: 1,
      limit: 15,
      'filter[tags]': values.tags,
      'filter[province_code]': values.provinceCode,
      'filter[min_price]': values.minPrice,
      'filter[max_price]': values.maxPrice,
      'include': 'branches'
    }
    return axiosClient.get(url, {
      params,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("_WEB_TK"),
      },
    })
  }
  //example get all
  getAll = () => {
    const session = window.sessionStorage.getItem("_WEB_TK");
    const local = localStorage.getItem("_WEB_TK");
    const url = `/organizations?page=1&limit=15`;
    return axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${session ? session : local}`,
      },
    });
  };
}
const orgApi = new Organization();
export default orgApi;
