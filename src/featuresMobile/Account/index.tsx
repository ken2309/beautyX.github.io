import React, { useContext, useState } from "react";
import "./account.css";
import icon from "../../constants/icon";
import Bottom from "../Bottom/index";
import OrderMb from "./Orders";
import AccountForm from "./AccountForm/index";
import ServicesUserMb from "./ServicesUser";
import { AppContext } from "../../context/AppProvider";

// function change() {
//       const avtWrap = document.querySelector('.mb-ac__cnt-avt-wrap')
//       avtWrap?.classList.add('mb-ac__cnt-avt-wrap-change')
//       const avtImg = document.querySelector('.mb-ac__cnt-avt-box-img')
//       avtImg?.classList.add('mb-ac__cnt-avt-box-img-change')
//       document.querySelector('.mb-ac__cnt-avt-name')?.classList.add('mb-ac__cnt-avt-name-change')
//       document.querySelector('.mb-ac__cnt-avt')?.classList.add('mb-ac__cnt-avt-ch')
// }
// function changeBack() {
//       const avtWrap = document.querySelector('.mb-ac__cnt-avt-wrap')
//       avtWrap?.classList.remove('mb-ac__cnt-avt-wrap-change')
//       const avtImg = document.querySelector('.mb-ac__cnt-avt-box-img')
//       avtImg?.classList.remove('mb-ac__cnt-avt-box-img-change')
//       document.querySelector('.mb-ac__cnt-avt-name')?.classList.remove('mb-ac__cnt-avt-name-change')
//       document.querySelector('.mb-ac__cnt-avt')?.classList.remove('mb-ac__cnt-avt-ch')
// }
function AccountMb() {
  const { userInfo } = useContext(AppContext);
  const [openOrder, setOpenOrder] = useState(false);
  const [openAcc, setOpenAcc] = useState(false);
  const [openSer, setOpenSer] = useState(false);
  return (
    <div className="mb-ac">
      <div className="mb-ac__cnt">
        <div className="mb-ac__cnt-avt">
          <div className="mb-ac__cnt-avt-wrap">
            <div className="mb-ac__cnt-avt-box">
              <img
                src="https://picsum.photos/650/976?random=1"
                alt=""
                className="mb-ac__cnt-avt-box-img"
              />
              <button>
                <img src={icon.Camera_purple} alt="" />
              </button>
            </div>
            <div className="flex-column mb-ac__cnt-avt-name">
              {userInfo?.fullname}
              <div className="mb-ac__cnt-avt-rank">
                <ul>
                  <li>
                    <div className=" flex-row-sp item">
                      <img src={icon.Ticket} alt="" />
                      <div className="item-cnt">
                        <span>Điểm</span>
                        <span>2000</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className=" flex-row-sp item">
                      <img src={icon.Wallet} alt="" />
                      <div className="item-cnt">
                        <span>Số dư</span>
                        <span>200.000đ</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className=" flex-row-sp item">
                      <img src={icon.Crown} alt="" />
                      <div className="item-cnt">
                        <span>Hạng</span>
                        <span>Vàng</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-ac__cnt-private">
          <ul>
            <li>
              <div
                onClick={() => setOpenAcc(true)}
                className="flex-column mb-ac__cnt-private-item"
              >
                <img src={icon.User_purple} alt="" />
                <span>Tài khoản của tôi</span>
              </div>
            </li>
            <li>
              <div className="flex-column mb-ac__cnt-private-item">
                <img src={icon.Credit_card} alt="" />
                <span>Phương thức thanh toán</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => setOpenOrder(true)}
                className="flex-column mb-ac__cnt-private-item"
              >
                <img src={icon.Clock_purple} alt="" />
                <span>Lịch sử đơn hàng</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => setOpenSer(true)}
                className="flex-column mb-ac__cnt-private-item"
              >
                <img src={icon.bag} alt="" />
                <span>Gói dịch vụ</span>
              </div>
            </li>
            <li>
              <div className="flex-column mb-ac__cnt-private-item">
                <img src={icon.Ticket} alt="" />
                <span>Danh sách mã ưu đãi</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="mb-ac__cnt-private">
          <ul>
            <li>
              <div className="flex-column mb-ac__cnt-private-item">
                <img src={icon.Bell} alt="" />
                <span>Thông báo</span>
              </div>
            </li>
            <li>
              <div className="flex-column mb-ac__cnt-private-item">
                <img src={icon.Setting} alt="" />
                <span>Cài đặt</span>
              </div>
            </li>
            <li>
              <div className="flex-column mb-ac__cnt-private-item">
                <img src={icon.Headphones_purple} alt="" />
                <span>Hỗ trợ</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Bottom />
      {/* open dialog */}
      <OrderMb openOrder={openOrder} setOpenOrder={setOpenOrder} />
      <ServicesUserMb open={openSer} setOpen={setOpenSer} />
      <AccountForm open={openAcc} setOpen={setOpenAcc} />
    </div>
  );
}

export default AccountMb;
