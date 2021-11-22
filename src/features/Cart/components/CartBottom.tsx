import React,{useEffect} from 'react';
import {Container} from '@mui/material';
import {getTotal} from '../../../redux/cartSlice'
import ButtonCus from '../../../components/ButtonCus/index';
import {useSelector, useDispatch} from 'react-redux';
import formatPrice from '../../../utils/formatPrice';
import {useHistory} from 'react-router-dom';

function CartBottom(props: any) {
      const dispatch = useDispatch();
      const history=useHistory();
      const carts = useSelector((state: any) => state.carts)
      useEffect(() => {
            dispatch(getTotal())
      }, [dispatch, carts])
      const gotoPayment=()=>{
            if(carts.cartAmount > 0){
                  history.push('/Payment')
            }
      }
      return (
            <div className="cart-bottom">
                  <Container>
                        <div className="flex-row cart-bottom__content">
                              <span>
                                    Tổng thanh toán ({carts.cartQuantity} sản phẩm)
                              </span>
                              <span>
                                    {formatPrice(carts.cartAmount)} đ
                              </span>
                              <ButtonCus
                                    text="Mua hàng"
                                    fontSize="14px"
                                    lineHeight="20px"
                                    color="var(--purple)"
                                    border="solid 1px var(--purple)"
                                    borderRadius="18px"
                                    onClick={gotoPayment}
                              />
                        </div>
                  </Container>
            </div>
      );
}

export default CartBottom;