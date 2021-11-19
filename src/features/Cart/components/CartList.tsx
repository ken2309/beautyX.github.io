import React from 'react';
import CartItem from './CartItem';
import SectionTitle from '../../SectionTitle';
import icon from '../../../constants/icon';

function CartList(props:any) {
      const {listOrg, chooseOrg, carts, cartByOrgId} = props;
      const cartJoin = [];
      for(var org of listOrg){
            const orgId = org.id;
            const arr = carts.cartList.filter((item:any) => item.org_id === orgId);
            const arrJoin={
                  orgId: org.id,
                  name: org.name,
                  cart: arr
            }
            cartJoin.push(arrJoin)
      }
      return (
            <div className="cart-list">
                  {
                        cartByOrgId.length === 0 ?
                              cartJoin.map(item => (
                                    <div
                                          className="cart-section-item"
                                          key={item.orgId}
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
                                                      item.cart.filter((item: any) => item.isPr === false).map((child: any) => (
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
                                                      item.cart.filter((item: any) => item.isPr === true).map((child: any) => (
                                                            <CartItem
                                                                  key={child.cart_id}
                                                                  cartItem={child}
                                                                  chooseOrg={chooseOrg}
                                                            />
                                                      ))
                                                }
                                          </ul>
                                    </div>
                              ))
                              :
                              <>
                                    <SectionTitle
                                          title={chooseOrg.name}
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
                                                cartByOrgId.filter((item: any) => item.isPr === false).map((child: any) => (
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
                                                cartByOrgId.filter((item: any) => item.isPr === true).map((child: any) => (
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