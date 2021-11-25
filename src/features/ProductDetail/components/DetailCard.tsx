import React, { useState } from 'react';
import icon from '../../../constants/icon';
import formatPrice from '../../../utils/formatPrice';
import SuggestionPush from '../../ServiceDetail/components/SuggestionPush';
import {addCart} from '../../../redux/cartSlice';
import {useDispatch} from 'react-redux';
import PopupSuccess from '../../PopupSuccess/index'

function DetailCard(props:any) {
      const { product, org } = props;
      const popupTitle = `Đã thêm ${product.product_name} vào giỏ hàng`
      const dispatch = useDispatch();
      const [sum, setSum] = useState(0);
      const [popup, setPopup] = useState(false);
      const [quantity, setQuantity] = useState(1)
      const handleDesc = () => {
            if (quantity > 1) {
                  setQuantity(quantity - 1)
            }
      }
      //add cart
      const values = {
            org_id: org.id,
            org_name: org.name,
            cart_id: parseInt(`${org.id}${product.id}`),
            name: product.product_name,
            quantity: quantity,
            isPr: product.is_product === false ? false : true,
            isConfirm: false,
            price: product.special_price < 0 ? product.retail_price : product.special_price
      }
      const handleAddCart = () => {
            setPopup(true);
            const action = addCart(values);
            dispatch(action);
      }
      return (
            <div className="product-cnt__right">
                  <div className="product-cnt__right-head">
                        <h2>{product?.product_name}</h2>
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
                        {
                              product.is_product === false ?
                                    <SuggestionPush
                                          org={org}
                                          product={product}
                                          setSum={setSum}
                                    />
                                    :
                                    ''
                        }
                  </div>
                  <div className="product-cnt__right-bot">
                        <div className="flex-row-sp product-cnt__right-bot__total">
                              <span>Tổng cộng</span>
                              <span>{formatPrice(quantity * product?.retail_price + sum)} đ</span>
                        </div>
                        <div className="flex-row" style={{justifyContent:'flex-end'}}>
                              <button
                                    onClick={handleAddCart} 
                                    className="flex-row product-cnt__right-bot__add"
                              >
                                    <img src={icon.ShoppingCartSimple} alt="" />
                                    Thêm vào giỏ hàng
                              </button>
                        </div>
                  </div>
                  <PopupSuccess
                        popup={popup}
                        setPopup={setPopup}
                        title={popupTitle}
                  />
            </div>
      );
}

export default DetailCard;