import React, { useContext, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { getTotal } from '../../../redux/cartSlice'
import ButtonCus from '../../../components/ButtonCus/index';
import { useSelector, useDispatch } from 'react-redux';
import formatPrice from '../../../utils/formatPrice';
import { useHistory } from 'react-router-dom';
import CartPopupNoti from './CartPopupNoti';
import scrollTop from '../../../utils/scrollTop';
import CartPopupNotiSign from './CartPopupNotiSign'
import { AppContext } from '../../../context/AppProvider';
import SignInUp from '../../poupSignInUp/index'

function CartBottom(props: any) {
      const { orgs, chooseOrg, chooseOrgClick } = props;
      const { t, profile } = useContext(AppContext)
      const dispatch = useDispatch();
      const history = useHistory();
      const [popUp, setPopUp] = useState(false)
      const [popupSign, setPopupSign] = useState(false)
      const [openSignIn, setOpenSignIn] = useState(false);
      const [activeTabSign, setActiveTabSign] = useState(1);
      const carts = useSelector((state: any) => state.carts)
      useEffect(() => {
            dispatch(getTotal())
      }, [dispatch, carts])
      const cartConfirm = carts.cartList.filter((item: any) => item.isConfirm === true);
      const firstItem = cartConfirm[0];
      const cartFirstList = cartConfirm.filter((item: any) => item.org_id === firstItem.org_id)
      const gotoPayment = () => {
            if (profile) {
                  if (carts.cartAmount > 0 && cartFirstList.length === cartConfirm.length) {
                        scrollTop();
                        history.push('/Payment')
                  } else {
                        setPopUp(true);
                  }
            }else{
                  setPopupSign(true)
            }

      }
      return (
            <div className="cart-bottom">
                  <Container>
                        <div className="flex-row cart-bottom__content">
                              <span>
                                    {t('cart.total_payment')} ({carts.cartQuantity} {t('Mer_de.services')}/{t('Mer_de.products')})
                              </span>
                              <span>
                                    {formatPrice(carts.cartAmount)} đ
                              </span>
                              <ButtonCus
                                    text={t('cart.payment_now')}
                                    fontSize="14px"
                                    lineHeight="20px"
                                    color="var(--purple)"
                                    border="solid 1px var(--purple)"
                                    borderRadius="18px"
                                    onClick={gotoPayment}
                              />
                        </div>
                  </Container>
                  <CartPopupNoti
                        popUp={popUp}
                        setPopUp={setPopUp}
                        orgs={orgs}
                        chooseOrg={chooseOrg}
                        chooseOrgClick={chooseOrgClick}
                  />
                  <CartPopupNotiSign
                        popupSign={popupSign}
                        setPopupSign={setPopupSign}
                        setOpenSignIn={setOpenSignIn}
                        setActiveTabSign={setActiveTabSign}
                  />
                  <SignInUp
                        openSignIn={openSignIn}
                        setOpenSignIn={setOpenSignIn}
                        activeTabSign={activeTabSign}
                        setActiveTabSign={setActiveTabSign}
                  />
            </div>
      );
}

export default CartBottom;