import React from "react";
import icon from "../../../constants/icon";
import formatPrice from "../../../utils/formatPrice";

export default function HomeLoggedProductItem(props: any) {
  const { product } = props;

  return (
    <div className="homelogged-product__item">
      <div className="item-img">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
      <div className="item-content">
        <span className="item-content__title">{product.product_name}</span>
        <div className="item-content__info">
          <span className="item-content__info-name">Bay Spa & Massage</span>
          <div className="price-rate__wrap">
            <span className="price-text-purple">
              {formatPrice(product.origin_price)}
              <u>đ</u>
            </span>
            <div className="rate">
              <span>4.5</span>
              <img src={icon.star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
