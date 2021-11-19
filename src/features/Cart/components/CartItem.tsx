import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import ButtonCus from '../../../components/ButtonCus';
import { checkConfirm,addCart, descItem, removeItem } from '../../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import icon from '../../../constants/icon';
import formatPrice from '../../../utils/formatPrice'

function CartItem(props: any) {
      const { cartItem, chooseOrg } = props;
      const dispatch = useDispatch();
      const [isCheck, setIsCheck] = useState(cartItem.isConfirm)
      const isConfirm = isCheck

      const handleConfirm = (e: any) => {
            setIsCheck(e.target.checked)
            const action = checkConfirm({ ...cartItem, isConfirm });
                  dispatch(action)
      }
      const handleAscCart = () => {
            const action = addCart(cartItem);
            dispatch(action)
      }
      const handleDesc=()=>{
            const action = descItem(cartItem);
            dispatch(action)
      }
      const handleRemoveItem=()=>{
            const action = removeItem(cartItem);
            dispatch(action);
      }
      return (
            <div className="flex-row cart-item">
                  <div className="flex-row cart-item__name">
                        <Checkbox
                              sx={{
                                    color: "#7161BA",
                                    "&.Mui-checked": {
                                          color: "#7161BA",
                                    },
                              }}
                              checked={cartItem.isConfirm}
                              onChange={handleConfirm}
                        />
                        <img
                              className="cart-item__name-img"
                              src={"https://picsum.photos/650/976?random=" + cartItem.cart_id}
                              alt=""
                        />
                        {cartItem.name} {cartItem.org_id}
                  </div>
                  <div className="flex-row cart-item__quantity">
                        <button  onClick={handleDesc} style={{ backgroundColor: 'var(--bg-gray)', color: 'var(--purple)' }}>-</button>
                        <span>{cartItem.quantity}</span>
                        <button onClick={handleAscCart}>+</button>
                  </div>
                  <div className="flex-row cart-item__price">
                        {formatPrice(cartItem.price)} đ
                  </div>
                  <div className="flex-row cart-item__total">
                        {formatPrice(cartItem.price * cartItem.quantity)} đ
                  </div>
                  <div className="flex-row cart-item__control">
                        <ButtonCus
                              imgIcon={icon.trash}
                              padding="4px 4px 4px 4px"
                              backColor="var(--red-cl)"
                              borderRadius="8px"
                              onClick={handleRemoveItem}
                        />
                  </div>
            </div>
      );
}

export default CartItem;