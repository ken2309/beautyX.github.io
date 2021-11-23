import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import formatPrice from '../../../utils/formatPrice';
import {removeItem, descItem, addCart} from '../../../redux/cartSlice'

function SuggestionPush(props: any) {
      const { org, product, setSum } = props;
      const dispatch = useDispatch();
      const carts = useSelector((state: any) => state.carts);
      const cartItemByOrg = carts.cartList.filter((item: any) =>
            item.org_id === org.id && item.isPr === false && item.cart_id !== parseInt(`${org.id}${product.id}`)
      );
      const ascClick = (item: any) => {
            const action = addCart(item);
            dispatch(action);
      }
      const descItemClick = (item: any) => {
            if (item.quantity === 1) {
                  const action = removeItem(item);
                  dispatch(action)
            } else {
                  const action = descItem(item);
                  dispatch(action);
            }
      }
      //total
      useEffect(() => {
            let initialValue = 0;
            let sum = cartItemByOrg.reduce(function (total: any, item: any) {
                  return total + (item.price * item.quantity)
            }, initialValue)
            setSum(sum);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[cartItemByOrg])
      return (
            <div className="product-cnt__right-body-item suggest-card">
                  <span style={{ marginBottom: '18px' }}>Dịch vụ gợi ý đi kèm</span>
                  <ul className="suggest-card__list">
                        {
                              cartItemByOrg.map((item: any) => (
                                    <li key={item.cart_id} >
                                          <div className="flex-row-sp suggest-card__list-item">
                                                <span className="suggest-card__list-name">{item.name}</span>
                                                <div className="flex-row-sp suggest-card__list-quantity">
                                                      <div className="flex-row">
                                                            <button onClick={()=>descItemClick(item)} >-</button>
                                                            <h5>{item.quantity}</h5>
                                                            <button onClick={()=>ascClick(item)} >+</button>
                                                      </div>
                                                      <span>{formatPrice(item.quantity * item.price)} đ</span>
                                                </div>
                                          </div>
                                    </li>
                              ))
                        }
                  </ul>
            </div>
      );
}

export default SuggestionPush;