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
      const cartConfirm = carts.cartList.filter((item: any) => item.isConfirm === true);
      const firstItem = cartConfirm[0];
      const cartFirstList = cartConfirm.filter((item: any) => item.org_id === firstItem.org_id)
      const gotoPayment = () => {
            // if (carts.cartAmount > 0 && cartFirstList.length === cartConfirm.length) {
            //       history.push('/Payment')
            // }
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