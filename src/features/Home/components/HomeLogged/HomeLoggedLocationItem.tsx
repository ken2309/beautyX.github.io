import React from "react";
import { useHistory } from "react-router-dom";
import icon from "../../../../constants/icon";
import slugify from "../../../../utils/formatUrlString";

export default function HomeLoggedLocationItem(props: any) {
  const { org } = props;
  // console.log("org :>> ", org);
  const history = useHistory();
  const goDetail = () => {
    history.push({
      pathname: `/Product-detail/${slugify(org.product_name)}`,
      search: `${1},${org.id},${1}`,
    });
  };
  const [openInfoLocation, setOpenInfoLocation] = React.useState(true);
  function handleOpenLocation() {
    setOpenInfoLocation(true);
  }
  function handleCloseLocation() {
    setOpenInfoLocation(false);
  }
  return (
    <div className="homelogged-location__item" onClick={goDetail}>
      <div className="item-top">
        <div className="item-top__img">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="item-top__content">
          <div className="item-top__content-header">
            <span>{org?.product_name}</span>
            <div className="item-top__content-rate">
              <div className="rate-left">
                <span>4.5</span>
                <img src={icon.star} alt="" />
              </div>
              <div className="rate-right">
                <span>250</span>
                <img src={icon.chatAll} alt="" />
              </div>
            </div>
          </div>
          <div className="item-top__content-footer">
            <span>Đang mở cửa</span>
            <img src={icon.onedot} alt="" />
            <span>9:00 - 21:00</span>
          </div>
        </div>
      </div>
      <div className="item-bottom">
        {openInfoLocation === true ? (
          <div className="item-bottom__hidden">
            <div className="item-bottom__hidden-wrap">
              <div className="item-bottom__active-img">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
              <span className="item-bottom__active-name">Nguyen Thuy Binh</span>
            </div>
            <div onClick={handleCloseLocation} className="infor-img">
              <img src={icon.Info} alt="" />
            </div>
          </div>
        ) : (
          <div className="item-bottom__active">
            <div onClick={handleOpenLocation} className="close-ring">
              <img src={icon.CloseRing} alt="" />
            </div>
            <div className="flex-column">
              <div className="item-bottom__active-img">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
              <span className="item-bottom__active-name">Nguyen Thuy Binh</span>
            </div>
            <div className="item-bottom__active-list">
              <div className="item-bottom__active-item">
                <img src={icon.TicketHome} alt="" />
                <div className="item-content">
                  <span>Điểm</span>
                  <span>200</span>
                </div>
              </div>
              <div className="item-bottom__active-item">
                <img src={icon.Wallet} alt="" />
                <div className="item-content">
                  <span>Số dư</span>
                  <span>
                    200.000 <u>đ</u>
                  </span>
                </div>
              </div>
              <div className="item-bottom__active-item">
                <img src={icon.Crown} alt="" />
                <div className="item-content">
                  <span>Hạng</span>
                  <span>Vàng</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
