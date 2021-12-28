import React, { useContext } from 'react';
import CartItem from './CartItem';
import SectionTitle from '../../SectionTitle';
import icon from '../../../constants/icon';
import { AppContext } from '../../../context/AppProvider';

function CartList(props: any) {
      const { listOrg, chooseOrg, carts, cartByOrgId } = props;
      const { t } = useContext(AppContext)
      const cartJoin = [];
      for (var org of listOrg) {
            // eslint-disable-next-line no-loop-func
            const arr = carts.cartList.filter((item: any) => item.org_name === org);
            const arrJoin = {
                  name: org,
                  cart: arr
            }
            cartJoin.push(arrJoin);
      }
      return (
            <div className="cart-list">
                  {
                        cartByOrgId.length === 0 ?
                              cartJoin.map((item, index) => (
                                    <div
                                          className="cart-section-item"
                                          key={index}
                                          style={item.cart.length === 0 ?
                                                {
                                                      display: 'none',
                                                }
                                                :
                                                { display: 'block' }
                                          }
                                    >
                                          <SectionTitle
                                                title={item.name}
                                          />
                                          {/* services */}
                                          {
                                                item.cart.filter((item: any) => item.is_type === 2).length === 0 ?
                                                      <div className="flex-row cart-list-item__title">
                                                            <span>{t('Mer_de.services_name')}</span>
                                                            <span>{t('pr.quantity')}</span>
                                                            <span>{t('cart.unit_price')}</span>
                                                            <span>{t('pr.total')}</span>
                                                            <span>{t('cart.option')}</span>
                                                      </div>
                                                      :
                                                      <>
                                                            <span
                                                                  className="flex-row cart-list-item__head"
                                                            >
                                                                  <img src={icon.box} alt="" />
                                                                  {t('Mer_de.services')}
                                                            </span>
                                                            <div className="flex-row cart-list-item__title">
                                                                  <span>{t('Mer_de.services_name')}</span>
                                                                  <span>{t('pr.quantity')}</span>
                                                                  <span>{t('cart.unit_price')}</span>
                                                                  <span>{t('pr.total')}</span>
                                                                  <span>{t('cart.option')}</span>
                                                            </div>
                                                            <ul className="flex-column">
                                                                  {
                                                                        item.cart.filter((item: any) => item.is_type === 2).map((child: any) => (
                                                                              <CartItem
                                                                                    key={child.cart_id}
                                                                                    cartItem={child}
                                                                                    chooseOrg={chooseOrg}
                                                                              />
                                                                        ))
                                                                  }
                                                            </ul>
                                                      </>
                                          }
                                          {/* products list */}
                                          {
                                                item.cart.filter((item: any) => item.is_type === 1).length === 0 ?
                                                      <></>
                                                      :
                                                      <>
                                                            <span
                                                                  className="flex-row cart-list-item__head"
                                                            >
                                                                  <img src={icon.bag} alt="" />
                                                                  {t('Mer_de.products')}
                                                            </span>
                                                            <ul className="flex-column">
                                                                  {
                                                                        item.cart.filter((item: any) => item.is_type === 1).map((child: any) => (
                                                                              <CartItem
                                                                                    key={child.cart_id}
                                                                                    cartItem={child}
                                                                                    chooseOrg={chooseOrg}
                                                                              />
                                                                        ))
                                                                  }
                                                            </ul>
                                                      </>
                                          }
                                          {/* combos */}
                                          {
                                                item.cart.filter((item: any) => item.is_type === 3).length === 0 ?
                                                      <></>
                                                      :
                                                      <>
                                                            <span
                                                                  className="flex-row cart-list-item__head"
                                                            >
                                                                  <img src={icon.bag} alt="" />
                                                                  Combos
                                                            </span>
                                                            <ul className="flex-column">
                                                                  {
                                                                        item.cart.filter((item: any) => item.is_type === 3).map((child: any) => (
                                                                              <CartItem
                                                                                    key={child.cart_id}
                                                                                    cartItem={child}
                                                                                    chooseOrg={chooseOrg}
                                                                              />
                                                                        ))
                                                                  }
                                                            </ul>
                                                      </>
                                          }
                                    </div>
                              ))
                              :
                              <>
                                    <SectionTitle
                                          title={chooseOrg}
                                    />
                                    <span
                                          className="flex-row cart-list-item__head"
                                    >
                                          <img src={icon.box} alt="" />
                                          Dịch vụ
                                    </span>
                                    <div className="flex-row cart-list-item__title">
                                          <span>Tên dịch vụ</span>
                                          <span>Số lượng</span>
                                          <span>Đơn giá</span>
                                          <span>Thành tiền</span>
                                          <span>Lựa chọn</span>
                                    </div>
                                    <ul className="flex-column">
                                          {
                                                cartByOrgId.filter((item: any) => item.is_type === 2).map((child: any) => (
                                                      <CartItem
                                                            key={child.cart_id}
                                                            cartItem={child}
                                                            chooseOrg={chooseOrg}
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
                                                cartByOrgId.filter((item: any) => item.is_type === 1).map((child: any) => (
                                                      <CartItem
                                                            key={child.cart_id}
                                                            cartItem={child}
                                                            chooseOrg={chooseOrg}
                                                      />
                                                ))
                                          }
                                    </ul>
                              </>
                  }
            </div>
      );
}

export default CartList;