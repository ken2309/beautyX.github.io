import React, {useEffect} from 'react';
import Header from '../Header/index';
import './CartPayment.css';
import {Container} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'
import PaymentForm from './components/PaymentForm';
import PaymentCart from './components/PaymentCart';
import PaymentMethod from './components/PaymentMethod';
import PaymentTotal from './components/PaymentTotal';
import Footer from '../Footer/index';
import img from '../../constants/img';
import {getTotal} from '../../redux/cartSlice'

const isCart: boolean = true;
const headerTitle="THANH TOÁN"
const PAYMENT_METHOD = [
      { id: 1, img:img.money , title: 'Thanh toán tại cơ sở', method: 'PAYMENT_IN_BRANCH' },
      { id: 2, img:img.cardAtm , title: 'Thanh toán bằng thẻ ATM và tài khoản ngân hàng', method: 'PAYMENT_ATM' },
      { id: 3, img:img.creditMachine , title: 'Thanh toán bằng thẻ quốc tế Visa/Master/JCB', method: 'PAYMENT_VISA' },
      { id: 4, img:img.payon , title: 'Thanh toán quan Payon', method: 'PAYMENT_PAYON' },
      { id: 5, img:img.imagePay , title: 'Thanh toán qua Ví Ngân Lượng', method: 'PAYMENT_CL' },
]
function CartPayment(props: any) {
      const [value, setValue] = React.useState('');
      const dispatch = useDispatch();
      const carts = useSelector((state: any) => state.carts);
      const list = carts.cartList.filter((item: any) => item.isConfirm === true);
      useEffect(()=>{
            dispatch(getTotal())
      },[dispatch, carts])
      return (
            <div>
                  <Header
                        isCart={isCart}
                        title={headerTitle}
                  />
                  <Container>
                        <div className="payment-cnt">
                              <PaymentForm/>
                              <PaymentCart
                                    list={list}
                              />
                              <PaymentMethod
                                    methodList={PAYMENT_METHOD}
                                    value={value}
                                    setValue={setValue}
                              />
                        </div>
                  </Container>
                  <PaymentTotal
                        value={value}
                        methodList={PAYMENT_METHOD}
                        carts={carts}
                  />
                  <Footer/>
            </div>
      );
}

export default CartPayment;