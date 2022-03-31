import axiosClient from "./axios";

class Comments{
    //get comments org
    getCommentsOrg=(values:any)=>{
        const url = `comments`;
        const params={
            "page":values.page,
            "limit":15,
            "filter[commentable_type]":"ORGANIZATION",
            "filter[commentable_id]":values.org_id,
            "include":"rate|user",
            "sort":"-created_at"
        }
        return axiosClient.get(url, {params})
    }
}
const commentsApi = new Comments();
export default commentsApi;