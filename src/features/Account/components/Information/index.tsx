import Form from "./components/Form";
import "./style.css";
function Information(props:any){
    return(
        <div className="info_section">
        <div className="title_section text-color-purple">
            <h1 className="title">    
                Thông tin cá nhân   
            </h1>
            <span className="subtitle">
                Cập nhật đầy đủ thông tin cá nhân giúp tài khoản được bảo mật tốt hơn
            </span>
        </div>
        <hr className="purple_line"/>
        <Form/>
        </div>
    )
}
export default Information;