import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import icon from "../../../../constants/icon";
import { AppContext } from "../../../../context/AppProvider";
import slugify from "../../../../utils/formatUrlString";
import scrollTop from "../../../../utils/scrollTop";

export default function HomeLoggedLocationItem(props: any) {
  const { org } = props;
  const { userInfo } = useContext(AppContext);
  const history = useHistory();
  const timeWork = org?.opening_time;
  const workList = timeWork.map((item: any, index: number) => ({
    day: index + 2,
    ...item,
  }));
  const day = new Date();
  const today = day.getDay() + 1;
  const todayTimeWork = workList.find((item: any) => item.day === today);
  const gotoDetail = () => {
    history.push({
      pathname: `/Merchant-detail/${slugify(org.name)}`,
      search: `${org.id}`,
      state: org,
    });
    scrollTop();
  };
  const [openInfoLocation, setOpenInfoLocation] = React.useState(false);
  return (
    <div className="homelogged-location__item">
      <div className="item-top" onClick={gotoDetail}>
        <div className="item-top__img">
          <img src={"https://picsum.photos/650/976?random=" + org.id} alt="" />
        </div>
        <div className="item-top__content">
          <div className="item-top__content-header">
            <span>{org?.name}</span>
            <div className="item-top__content-rate">
              <div className="rate-left">
                <span>{org?.favorites_count}</span>
                <img src={icon.Favorite} alt="" />
              </div>
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
            <span>
              {todayTimeWork?.time_opening === "on"
                ? "Đang mở cửa"
                : "Đóng cửa"}
            </span>
            <img src={icon.onedot} alt="" />
            <span>
              {todayTimeWork?.from_time_opening}-
              {todayTimeWork?.to_time_opening}
            </span>
          </div>
        </div>
      </div>
      <div className="item-bottom">
        <>
          <div
            onClick={() => setOpenInfoLocation(!openInfoLocation)}
            className={
              openInfoLocation
                ? "item-bottom__active active"
                : "item-bottom__active"
            }
          >
            <div
              className={openInfoLocation ? "close-ring active" : "close-ring"}
            >
              <img src={openInfoLocation ? icon.CloseRing : icon.Info} alt="" />
            </div>
            <div className="flex-row">
              <div className="item-bottom__active-img">
                <img src={icon.Logo} alt="" />
              </div>
              <span className="item-bottom__active-name">
                {userInfo?.fullname}
              </span>
            </div>
            <div
              className={
                openInfoLocation
                  ? "item-bottom__active-list active"
                  : "item-bottom__active-list"
              }
            >
              <div className="item-bottom__active-item">
                <div className="item-bottom__active-icon">
                  <img src={icon.TicketHome} alt="" />
                </div>
                <div className="item-content">
                  <span>Điểm</span>
                  <span>200</span>
                </div>
              </div>
              <div className="item-bottom__active-item">
                <div className="item-bottom__active-icon">
                  <img src={icon.Wallet} alt="" />
                </div>
                <div className="item-content">
                  <span>Số dư</span>
                  <span>
                    200.000 <u>đ</u>
                  </span>
                </div>
              </div>
              <div className="item-bottom__active-item">
                <div className="item-bottom__active-icon">
                  <img src={icon.Crown} alt="" />
                </div>

                <div className="item-content">
                  <span>Hạng</span>
                  <span>Vàng</span>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* )} */}
      </div>
    </div>
  );
}
