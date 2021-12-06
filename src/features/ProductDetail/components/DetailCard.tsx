import React, { useContext, useEffect, useState } from 'react';
import icon from '../../../constants/icon';
import formatPrice from '../../../utils/formatPrice';
import SuggestionPush from '../../ServiceDetail/components/SuggestionPush';
import {addCart} from '../../../redux/cartSlice';
import {useDispatch} from 'react-redux';
import PopupSuccess from '../../PopupSuccess/index'
import { AppContext } from '../../../context/AppProvider';
import PrCardLoading from '../../Loading/PrCardLoading'


function DetailCard(props:any) {
      const { product, org, is_type, loading } = props;
      const { t } = useContext(AppContext);
      const popupTitle = `${t('pr.added')} 
            "${product.product_name ? product.product_name : product.service_name}" 
            ${t('pr.to_cart')}`
      const [old_price, setOld_price] = useState(0);
      const [sale_price, setSale_price] = useState(0);
      const dispatch = useDispatch();
      const [sum, setSum] = useState(0);
      const [popup, setPopup] = useState(false);
      useEffect(() => {
            if (is_type === 1) {
                  if (product.special_price > 0) {
                        setSale_price(product.special_price)
                        setOld_price(product.retail_price)
                  } else {
                        setSale_price(product.retail_price)
                  }
            } else if (is_type === 2) {
                  if (product.special_price > 0) {
                        setSale_price(product.special_price)
                        setOld_price(product.price)
                  } else {
                        setSale_price(product.price)
                  }
            }
            
      }, [is_type, product.price, product.retail_price, product.special_price])
      const discount = Math.round(sale_price / old_price * 100);
      const [quantity, setQuantity] = useState(1)
      const handleDesc = () => {
            if (quantity > 1) {
                  setQuantity(quantity - 1)
            }
      }
      //add cart
      const values = {
            id: product.id,
            org_id: org.id,
            org_name: org.name,
            cart_id: parseInt(`${is_type}${org.id}${product.id}`), //is_type + org_id + id
            name: product.product_name ? product.product_name : product.service_name,
            quantity: quantity,
            is_type: is_type,
            isConfirm: false,
            price: sale_price
      }
      const handleAddCart = () => {
            setPopup(true);
            const action = addCart(values);
            dispatch(action);
      }
      return (
            <div className="product-cnt__right">
                  {
                        loading === true ?
                              <PrCardLoading />
                              :
                              <>
                                    <div className="product-cnt__right-head">
                                          <h2>
                                                {product?.product_name ? product?.product_name : product?.service_name}
                                          </h2>
                                          <span>{org?.name} | {t('Search_result.opening')}</span>
                                          <div className="flex-row product-cnt__right-head__rate">
                                                <span>90</span>
                                                {t('pr.purchases')}
                                                <span>4.5</span>
                                                <img src={icon.star} alt="" />
                                                <span>250</span>
                                                <img src={icon.chatAll} alt="" />
                                          </div>
                                    </div>
                                    <div className="product-cnt__right-price">
                                          <span
                                                style={old_price === 0 ? { display: 'none' } : {}}
                                                className="price-old"
                                          >
                                                {formatPrice(old_price)} đ
                                          </span>
                                          <div className="price__discount-sale">
                                                <span style={old_price === 0 ? { display: 'none' } : {}} >Giảm {100 - discount} %</span>
                                                <span
                                                      style={old_price === 0 ? { color: 'var(--purple)' } : {}}
                                                >
                                                      {formatPrice(sale_price)} đ
                                                </span>
                                          </div>
                                    </div>
                                    <div className="product-cnt__right-body">
                                          <div className="product-cnt__right-body-item">
                                                <span>{t('pr.category')}</span>
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
                                                <span>{t('pr.quantity')}</span>
                                                <div className="flex-row product-quantity">
                                                      <button onClick={handleDesc} >-</button>
                                                      <div className="product-quantity__number">
                                                            {quantity}
                                                      </div>
                                                      <button onClick={() => setQuantity(quantity + 1)} >+</button>
                                                </div>
                                          </div>
                                          <div className="product-cnt__right-body-item">
                                                <span>{t('pr.enter_sale_code')}</span>
                                                <input className="product-code__discount" type="text" placeholder={t('pr.enter_sale_code')} />
                                          </div>
                                          {
                                                is_type === '2' ?
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
                                                <span>{t('pr.total')}</span>
                                                <span>{formatPrice(quantity * sale_price + sum)} đ</span>
                                          </div>
                                          <div className="flex-row" style={{ justifyContent: 'flex-end' }}>
                                                <button
                                                      onClick={handleAddCart}
                                                      className="flex-row product-cnt__right-bot__add"
                                                >
                                                      <img src={icon.ShoppingCartSimple} alt="" />
                                                      {t('pr.add_to_cart')}
                                                </button>
                                          </div>
                                    </div>
                              </>
                  }
                  <PopupSuccess
                        popup={popup}
                        setPopup={setPopup}
                        title={popupTitle}
                  />
            </div>
      );
}

export default DetailCard;