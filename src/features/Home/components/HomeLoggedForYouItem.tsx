import React from "react";
import icon from "../../../constants/icon";

export default function HomeLoggedForYouItem() {
  return (
    <div className="homelogged-product__item">
      <div className="item-img">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
      <div className="item-content">
        <span className="item-content__title">
          Massage Thái Lan, giảm đau xương khớp
        </span>
        <div className="item-content__info">
          <span className="item-content__info-name">Bay Spa & Massage</span>
          <div className="price-rate__wrap">
            <div className="price">
              <span>300.000</span>
              <span>
                300.000<u>đ</u>
              </span>
            </div>
            <div className="rate">
              <span>4.5</span>
              <img src={icon.star} alt="" />
            </div>
          </div>
          <div className="dead-line">
            <span>HSD:</span>
            <span>17 - 9 - 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}
