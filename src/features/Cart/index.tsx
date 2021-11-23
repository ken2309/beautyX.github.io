import React, { useState } from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import {Container} from '@mui/material';
import icon from '../../constants/icon';
import CartList from './components/CartList';
import CartBottom from './components/CartBottom'
import {useSelector, useDispatch} from 'react-redux';
import {unCheck} from '../../redux/cartSlice';
import scrollTop from '../../utils/scrollTop'
import './Cart.css'

interface Org{
      id:number, name:string
}
const headerTitle="GIỎ HÀNG"
const isCart: boolean = true
function Cart(props: any) {
      const dispatch = useDispatch();
      const carts = useSelector((state: any) => state.carts);
      const [showOrg, setShowOrg] = useState(false);
      const orgCart: any[] = []
      const [chooseOrg, setChooseOrg] = useState<Org>();
      const handleShowOrgBox = () => {
            setShowOrg(!showOrg)
      }
      const chooseOrgClick = (org: any) => {
            scrollTop();
            setChooseOrg(org)
            setShowOrg(false)
            for (var item of carts.cartList) {
                  const action = unCheck(item);
                  dispatch(action);
            }
      }
      const cartByOrgId = carts.cartList.filter((item: any) => item.org_name === chooseOrg);
      //
      const listOrg:any[] = [];
      for (var i of carts.cartList) {
            listOrg.push({ id: i.org_id, name: i.org_name })
      }
      for (var item of carts.cartList) {
            const org = {
                  name: item.org_name
            }
            orgCart.push(org);
      }
      function unique(arr:any) {
            var newArr = []
            for (var i = 0; i < arr.length; i++) {
              if (newArr.indexOf(arr[i].name) === -1) {
                newArr.push(arr[i].name)
              }
            }
            return newArr
          }
      const orgs = unique(orgCart)
      return (
            <div className="cart" >
                  <Header
                        isCart={isCart}
                        title={headerTitle}
                  />
                  <Container>
                        <div className="flex-column">
                              <div className="flex-column cart-notification">
                                    <div className="flex-row cart-notification__header">
                                          <img src={icon.warning} alt="" />
                                          <span>Lưu ý</span>
                                    </div>
                                    <p>
                                          Để thuận lơi cho khâu đặt hẹn, quý khách hàng chỉ
                                          được chọn thanh toán sản phẩm/dịch vụ
                                          trong cùng một doanh nghiệp
                                    </p>
                                    <div className="cart-notification__or">
                                          <div className="flex-row-sp cart-notification__or-box">
                                                <div className="cart-notification__or-box-dis">
                                                      {
                                                            chooseOrg ? chooseOrg : 'Tên doanh nghiệp'
                                                      }
                                                </div>
                                                <div 
                                                      onClick={handleShowOrgBox}
                                                      className="cart-notification__or-box-dr" 
                                                >
                                                      <img src={icon.arrowDown} alt=""/>
                                                </div>
                                          </div>
                                          <div
                                                style={showOrg === false ? { display: 'none' } : { display: 'block' }}
                                                className="cart-notification__or-list"
                                          >
                                                <ul>
                                                      <li
                                                            onClick={() => chooseOrgClick(undefined)}
                                                      >Tất cả</li>
                                                      {
                                                            orgs.map((item, index) => (
                                                                  <li
                                                                        style={item === chooseOrg ?
                                                                              {
                                                                                    backgroundColor: 'var(--purple)',
                                                                                    color: 'var(--bg-gray)'
                                                                              }
                                                                              :
                                                                              {}
                                                                        }
                                                                        onClick={() => chooseOrgClick(item)}
                                                                        key={index}
                                                                  >{item}</li>
                                                            ))
                                                      }
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                              <CartList
                                    cartByOrgId={cartByOrgId}
                                    carts={carts}
                                    listOrg={orgs}
                                    chooseOrg={chooseOrg}
                              />
                        </div>
                  </Container>
                  <CartBottom
                        orgs={orgs}
                        chooseOrg={chooseOrg}
                        chooseOrgClick={chooseOrgClick}
                  />
                  <Footer />
            </div>
      );
}

export default Cart;