import React, { useEffect, useState } from 'react';
import { Checkbox } from '@mui/material';
import ButtonCus from '../../../components/ButtonCus';
import icon from '../../../constants/icon';


function CartItem(props:any) {
      const {cartItem, chooseOrg} = props;
      const [isCheck, setIsCheck] = useState(cartItem.isConfirm)
      useEffect(()=>{
            if(cartItem.org_id === chooseOrg?.id){
                  setIsCheck(true)
                  cartItem.isConfirm = true
            }else{
                  setIsCheck(false)
                  cartItem.isConfirm = false
            }
      },[cartItem, chooseOrg?.id])
      const handleConfirm=(e:any)=>{
            if(e.target.checked === true){
                  cartItem.isConfirm = true
            }else{
                  cartItem.isConfirm = false
            }
            setIsCheck(e.target.checked)
      }
      console.log(cartItem);
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
                              checked={isCheck}
                              onChange={handleConfirm}
                        />
                        <img
                              className="cart-item__name-img"
                              src={"https://picsum.photos/650/976?random=" + cartItem.cart_id}
                              alt=""
                        />
                        {cartItem.name}
                  </div>
                  <div className="flex-row cart-item__quantity">
                        <button style={{ backgroundColor: 'var(--bg-gray)', color: 'var(--purple)' }}>-</button>
                        <span>{cartItem.quantity}</span>
                        <button>+</button>
                  </div>
                  <div className="flex-row cart-item__price">
                        {cartItem.price}
                  </div>
                  <div className="flex-row cart-item__total">
                        10.000.000
                  </div>
                  <div className="flex-row cart-item__control">
                        <ButtonCus
                              imgIcon={icon.trash}
                              padding="4px"
                              backColor="var(--red-cl)"
                              borderRadius="8px"
                        />
                  </div>
            </div>
      );
}

export default CartItem;