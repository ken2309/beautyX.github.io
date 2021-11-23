import React from 'react';
import SectionTitle from '../../SectionTitle';
import icon from '../../../constants/icon';
import CartItem from '../../Cart/components/CartItem';

function PaymentCart(props: any) {
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
                        Dịch vụ
                  </span>
                  <div className="flex-row cart-list-item__title">
                        <span>Tên dịch vụ</span>
                        <span style={{ width: '16.67%' }} >Số lượng</span>
                        <span style={{ width: '16.67%' }} >Đơn giá</span>
                        <span style={{ width: '16.67%' }} >Thành tiền</span>
                  </div>
                  <ul className="flex-column">
                        {
                              list.filter((item: any) => item.isPr === false).map((child: any) => (
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
                        Sản phẩm
                  </span>
                  <ul className="flex-column">
                        {
                              list.filter((item: any) => item.isPr === true).map((child: any) => (
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