import React, { useState } from 'react';
import icon from '../../../constants/icon';
import formatPrice from '../../../utils/formatPrice';

function DetailCard(props:any) {
      const { product, org } = props;
      const [quantity, setQuantity] = useState(1)
      const handleDesc = () => {
            if (quantity > 1) {
                  setQuantity(quantity - 1)
            }
      }
      return (
            <div className="product-cnt__right">
                  <div className="product-cnt__right-head">
                        <h2>{product.product_name}</h2>
                        <span>{org?.name} | Đang mở cửa</span>
                        <div className="flex-row product-cnt__right-head__rate">
                              <span>90</span>
                              Lượt mua
                              <span>4.5</span>
                              <img src={icon.star} alt="" />
                              <span>250</span>
                              <img src={icon.chatAll} alt="" />
                        </div>
                  </div>
                  <div className="product-cnt__right-body">
                        <div className="product-cnt__right-body-item">
                              <span>Phân loại</span>
                              <div className="product-cate">
                                    <div className="product-cate__item">
                                          500ml
                                    </div>
                                    <div className="product-cate__item">
                                          200ml
                                    </div>
                              </div>
                        </div>
                        <div className="product-cnt__right-body-item">
                              <span>Số lượng</span>
                              <div className="flex-row product-quantity">
                                    <button onClick={handleDesc} >-</button>
                                    <div className="product-quantity__number">
                                          {quantity}
                                    </div>
                                    <button onClick={() => setQuantity(quantity + 1)} >+</button>
                              </div>
                        </div>
                        <div className="product-cnt__right-body-item">
                              <span>Nhập mã giảm giá</span>
                              <input className="product-code__discount" type="text" placeholder="Nhập mã giảm giá" />
                        </div>
                  </div>
                  <div className="product-cnt__right-bot">
                        <div className="flex-row-sp product-cnt__right-bot__total">
                              <span>Tổng cộng</span>
                              <span>{formatPrice(quantity * product.retail_price)} đ</span>
                        </div>
                        <div className="flex-row" style={{justifyContent:'flex-end'}}>
                              <button className="flex-row product-cnt__right-bot__add">
                                    <img src={icon.ShoppingCartSimple} alt="" />
                                    Thêm vào giỏ hàng
                              </button>
                        </div>
                  </div>
            </div>
      );
}

export default DetailCard;