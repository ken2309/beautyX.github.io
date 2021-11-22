import React, { useState } from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import {Container} from '@mui/material';
import icon from '../../constants/icon';
import {listOrg} from '../../data/listOrg';
import CartList from './components/CartList';
import CartBottom from './components/CartBottom'
import {useSelector, useDispatch} from 'react-redux';
import {chooseAll, checkConfirm} from '../../redux/cartSlice'
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
      const [chooseOrg, setChooseOrg] = useState<Org>();
      const handleShowOrgBox = () => {
            setShowOrg(!showOrg)
      }
      const chooseOrgClick = (org: any) => {
            setChooseOrg(org)
            setShowOrg(false)
      }
      const cartByOrgId = carts.cartList.filter((item: any) => item.org_id === chooseOrg?.id);
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
                                                            chooseOrg ? chooseOrg.name : 'Tên doanh nghiệp'
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
                                                            listOrg.map(item => (
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
                                                                        key={item.id
                                                                        }
                                                                  >{item.name}</li>
                                                            ))
                                                      }
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                              <CartList
                                    cartByOrgId={cartByOrgId}
                                    carts={carts}
                                    listOrg={listOrg}
                                    chooseOrg={chooseOrg}
                              />
                        </div>
                  </Container>
                  <CartBottom/>
                  <Footer />
            </div>
      );
}

export default Cart;