import icon from "../../../constants/icon";
import { useHistory } from "react-router-dom";

import CheckNotification from "./CheckNotification";

interface info {
  name?: string;
  avatar?: string;
  token?: any;
  point?: Number;
  amount?: any;
  rank?: string;
}
const data: info = {
  name: "Nguyen Thuy Binh",
  avatar: "https://picsum.photos/650/976?random=1",
  point: 200,
  amount: 200,
  rank: "Vàng",
};
function MenuSideBar(props: info) {
  const history = useHistory();
  const handleDropdown = (e: any) => {
    if (e.target.classList.value.indexOf("active") !== -1) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
  };
  return (
    <div className="infor_section">
      <div className="avatar">
        <div className="img_mask">
          <img src={data.avatar} alt="img" />
        </div>
        <div className="camera_icon">
          <img src={icon.Camera_purple} alt="icon" />
        </div>
      </div>
      <div className="info">
        <p className="quicksand-xl">
          <b>{data.name}</b>
        </p>
        <div className="other_stuff text-bold quicksand-md">
          <div className="point">
            <img src={icon.Ticket} alt="" />
            <div className="content">
              <span className="quicksand-sm text-color-grey">Điểm</span>
              <span>{data.point}</span>
            </div>
          </div>
          <div className="amount">
            <img src={icon.Wallet} alt="" />
            <div className="content">
              <span className="quicksand-sm text-color-grey">Số dư</span>
              <span>
                {data.amount}.000{" "}
                <span style={{ textDecoration: "underline" }}>đ</span>
              </span>
            </div>
          </div>
          <div className="rank">
            <img src={icon.Crown} alt="" />
            <div className="content">
              <span className="quicksand-sm text-color-grey">Hạng</span>
              <span>{data.rank}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab"
        onClick={() => history.push("/tai-khoan/thong-tin-ca-nhan")}
      >
        <div className="icon">
          <img src={icon.User_purple} alt="" />
        </div>
        <span className="quicksand-md text-bold">Tài khoản của tôi</span>
      </div>
      <div
        className="tab"
        onClick={() => history.push("/tai-khoan/phuong-thuc-thanh-toan")}
      >
        <div className="icon">
          <img src={icon.Credit_card} alt="" />
        </div>
        <span className="quicksand-md text-bold">Phương thức thanh toán</span>
      </div>
      <div className="dropdown">
        <div className="tab" onClick={handleDropdown}>
          <div className="icon">
            <img src={icon.Clock_purple} alt="" />
          </div>
          <span className="quicksand-md text-bold pointer-events-none">
            Lịch sử đơn hàng
          </span>
        </div>

        <ul>
          <li>
            <span className="quicksand-md">Nhận thông báo</span>
            <CheckNotification />
          </li>
          <li>
            <span className="quicksand-md">Ngôn ngữ</span>
            <div className="lang">
              <span className="quicksand-md text-color-grey">Tiếng Việt</span>
              <CheckNotification />
            </div>
          </li>
        </ul>
      </div>
      <div className="tab">
        <div className="icon">
          <img src={icon.Ticket} alt="" />
        </div>
        <span className="quicksand-md text-bold">Danh sách mã ưu đãi</span>
      </div>
      <div className="tab">
        <div className="icon">
          <img src={icon.Bell} alt="" />
        </div>
        <span className="quicksand-md text-bold">Thông báo</span>
      </div>
      <div className="dropdown">
        <div className="tab" onClick={handleDropdown}>
          <div className="icon">
            <img src={icon.Union} alt="" />
          </div>
          <span className="quicksand-md text-bold pointer-events-none">
            Cài đặt
          </span>
        </div>

        <ul>
          <li>
            <span className="quicksand-md">Nhận thông báo</span>
            <CheckNotification />
          </li>
          <li>
            <span className="quicksand-md">Ngôn ngữ</span>
            <div className="lang">
              <span className="quicksand-md text-color-grey">Tiếng Việt</span>
              <CheckNotification />
            </div>
          </li>
        </ul>
      </div>
      <div className="tab">
        <div className="icon">
          <img src={icon.Headphones_purple} alt="" />
        </div>
        <span className="quicksand-md text-bold">Hỗ trợ</span>
      </div>
      <div className="logout">
        <img src={icon.SignOutPurple} alt="" />
        <span className="quicksand-md text-bold text-color-purple">
          Đăng xuất
        </span>
      </div>
    </div>
  );
}
export default MenuSideBar;
