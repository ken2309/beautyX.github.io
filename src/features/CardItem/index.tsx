import React from 'react';
import './CardItem.css';
import icon from '../../constants/icon';
import formatPrice from '../../utils/formatPrice';
import {useLocation} from 'react-router-dom';
import {addCart} from '../../redux/cartSlice';
import {useDispatch} from 'react-redux'

function CardItem(props:any) {
      const location = useLocation();
      const dispatch = useDispatch();
      const mer_id = location.search.slice(4, location.search.length);
      const { 
                  detail, 
                  style,
                  name,
            retail_price,
            special_price,
      } = props;
      const discount = 100 - (special_price / retail_price * 100)
      const handleAddCart = () => {
            const values = {
                  org_id: parseInt(mer_id),
                  cart_id: parseInt(`${mer_id}${detail.id}`),
                  name:name,
                  quantity: 1,
                  isPr:false,
                  isConfirm: false,
                  price: special_price < 0 ? retail_price : special_price
            }
            const action = addCart(values);
            dispatch(action)
      }
      return (
            <div style={{ width: style?.width }} className="card">
                  <div
                        style={special_price < 0 ? { display: 'none' } : {}}
                        className="card-discount">
                        Giảm {discount.toFixed()}%
                  </div>
                  <img src={"https://picsum.photos/650/976?random=" + detail.id} alt="" className="card-img" />
                  <div className="card-info">
                        <div className="card-name">
                              {detail.id} - {name}
                        </div>
                        <span className="card-spa-name">
                              Kanessa Beauty  Spa
                        </span>
                        <div className="flex-row-sp card-price">
                              <span className="flex-row card-price__detail">
                                    <h4
                                          style={special_price < 0 ?
                                                {
                                                      textDecoration: 'none',
                                                      fontSize: '20px',
                                                      lineHeight: '24px',
                                                      fontWeight: "bold",
                                                      color: 'var(--purple)'
                                                }
                                                :
                                                {}
                                          }
                                    >{formatPrice(retail_price)} đ</h4>
                                    <h3
                                          style={special_price < 0 ? { display: 'none' } : {}}
                                    >
                                          {formatPrice(special_price)} đ
                                    </h3>
                              </span>
                              <span className="flex-row card-price__star">
                                    4.5
                                    <img src={icon.star} alt="" />
                              </span>
                        </div>
                        <span
                              style={special_price < 0 ? { display: 'none' } : {}}
                              className="card-date"
                        >
                              HSD: 20-01-2022
                        </span>
                  </div>
                  <button onClick={handleAddCart} >Add cart</button>
            </div>
      );
}

export default CardItem;