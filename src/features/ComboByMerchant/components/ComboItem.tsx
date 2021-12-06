import React, { useEffect, useState } from 'react';
import icon from '../../../constants/icon';
import formatPrice from '../../../utils/formatPrice';
import { addCart } from '../../../redux/cartSlice';
import { useDispatch } from 'react-redux'

function ComboItem(props: any) {
      const { detail, org } = props;
      const dispatch = useDispatch();
      const [old_price, setOld_price] = useState(0);
      const [sale_price, setSale_price] = useState(0);
      useEffect(() => {
            if (detail.discount > detail.price) {
                  setOld_price(detail.discount);
                  setSale_price(detail.price)
            } else if (detail.price > detail.discount) {
                  setOld_price(detail.price)
                  setSale_price(detail.discount)
            } else if (detail.discount === detail.price) {
                  setSale_price(detail.discount)
            }
      }, [detail.discount, detail.price])
      const discount = Math.round(sale_price / old_price * 100)
      const handleAddCart = () => {
            const quantity = 1;
            const values = {
                  id: detail.id,
                  org_id: org.id,
                  org_name: org.name,
                  cart_id: parseInt(`${3}${org.id}${detail.id}`),
                  name: detail.name,
                  quantity: quantity,
                  is_type: 3,
                  isConfirm: false,
                  price: sale_price
            }
            const action = addCart(values);
            dispatch(action)
      }
      return (
            <li>
                  <div className="cmb-list__item">
                        <div className="cmb-list__item-box">
                              <div 
                                    style={detail.discount === detail.price ? { display: 'none' } : {}}
                                    className="card-discount"
                              >
                                    Giảm {100 - discount}%
                              </div>
                              <img
                                    src={"https://picsum.photos/1000/800?random=" + detail.id}
                                    alt=""
                                    className="cmb-list__item-img"
                              />
                              <div className="cmb-list__item-detail">
                                    <div className="cmb-list__item-name">
                                          {detail.name}
                                    </div>
                                    <div className="cmb-list__item-spa-name">
                                          {org.name}
                                    </div>
                                    <div className="flex-row-sp cmb-list__item-price">
                                          <div className="flex-row left">
                                                <span
                                                      style={detail.discount === detail.price ? { display: 'none' } : {}}
                                                >
                                                      {formatPrice(old_price)}
                                                </span>
                                                <span
                                                      style={detail.discount === detail.price ? { color: 'var(--purple)' } : {}}
                                                >
                                                      {formatPrice(sale_price)}đ
                                                </span>
                                          </div>
                                          <span className="flex-row right">
                                                4.5
                                                <img src={icon.star} alt="" />
                                          </span>
                                    </div>
                                    <span className="cmb-list__item-date">
                                          HD: 20-01-2077
                                    </span>
                              </div>
                        </div>
                        <div className="flex-column cmb-list__item-view">
                              <button>Xem chi tiết Combo</button>
                              <button
                                    onClick={handleAddCart}
                              >
                                    Thêm vào giỏ hàng
                              </button>
                        </div>
                  </div>
            </li>
      );
}

export default ComboItem;