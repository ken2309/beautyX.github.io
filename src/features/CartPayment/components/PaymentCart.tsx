import React, { useContext } from 'react';
import SectionTitle from '../../SectionTitle';
import icon from '../../../constants/icon';
import CartItem from '../../Cart/components/CartItem';
import { AppContext } from '../../../context/AppProvider';

function PaymentCart(props: any) {
      const { t } = useContext(AppContext)
      const inPayment: boolean = true
      const { list } = props;
      const org_name = list[0].org_name;
      return (
            <div className="cart-list cart-list__payment">
                  <SectionTitle
                        title={org_name}
                  />
                  <span
                        className="flex-row cart-list-item__head"
                  >
                        <img src={icon.box} alt="" />
                        {t('Mer_de.services')}
                  </span>
                  <div className="flex-row cart-list-item__title">
                        <span>{t('Mer_de.services_name')}</span>
                        <span style={{ width: '25%' }} >{t('pr.quantity')}</span>
                        <span style={{ width: '25%' }} >{t('cart.unit_price')}</span>
                        <span style={{ width: '25%' }} >{t('pr.total')}</span>
                  </div>
                  <ul className="flex-column">
                        {
                              list.filter((item: any) => item.is_type === 2).map((child: any) => (
                                    <CartItem
                                          inPayment={inPayment}
                                          key={child.cart_id}
                                          cartItem={child}
                                    />
                              ))
                        }
                  </ul>
                  <span
                        className="flex-row cart-list-item__head"
                  >
                        <img src={icon.bag} alt="" />
                        {t('Mer_de.products')}
                  </span>
                  <ul className="flex-column">
                        {
                              list.filter((item: any) => item.is_type === 1).map((child: any) => (
                                    <CartItem
                                          key={child.cart_id}
                                          cartItem={child}
                                          inPayment={inPayment}
                                    />
                              ))
                        }
                  </ul>
                  <span
                        className="flex-row cart-list-item__head"
                  >
                        <img src={icon.bag} alt="" />
                        Combo
                  </span>
                  <ul className="flex-column">
                        {
                              list.filter((item: any) => item.is_type === 3).map((child: any) => (
                                    <CartItem
                                          key={child.cart_id}
                                          cartItem={child}
                                          inPayment={inPayment}
                                    />
                              ))
                        }
                  </ul>
            </div>
      );
}

export default PaymentCart;