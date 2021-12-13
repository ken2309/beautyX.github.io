import React, {useContext, useEffect, useState} from 'react';
import Head from '../Head/index';
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
import { AppContext } from '../../context/AppProvider';
import payments from '../../api/paymentApi'
// import {useHistory} from 'react-router-dom'

const isCart: boolean = true;
// const PAYMENT_METHOD = [
//       { id: 1, img: img.money, title: 'Thanh toán tại cơ sở', method: 'PAYMENT_IN_BRANCH' },
//       { id: 2, img: img.cardAtm, title: 'Thanh toán bằng thẻ ATM và tài khoản ngân hàng', method: 'PAYMENT_ATM' },
//       { id: 3, img: img.cardAtm, title: 'Thanh toán qua ví điện tử', method: 'CARD_ONLINE' },
//       { id: 4, img:img.creditMachine , title: 'Thanh toán bằng thẻ quốc tế Visa/Master/JCB', method: 'PAYMENT_VISA' },
//       { id: 5, img:img.payon , title: 'Thanh toán qua Payon', method: 'PAYMENT_PAYON' },
//       { id: 6, img:img.imagePay , title: 'Thanh toán qua Ví Ngân Lượng', method: 'PAYMENT_CL' },
// ]
interface User {
      cus_name: string;
      cus_phone: string;
      cus_address: string;
      cus_note: string;
}
function CartPayment(props: any) {
      const { t, profile } = useContext(AppContext)
      const headerTitle=t('pm.payment')
      const [value, setValue] = React.useState('');
      const [userInfo, setUserInfo] = useState<User>();
      const [paymentMethodOnl, setPaymentMethodOnl] = useState();
      const [chooseE_wall, setChooseE_wall] = useState();
      const dispatch = useDispatch();
      const carts = useSelector((state: any) => state.carts);
      const list = carts.cartList.filter((item: any) => item.isConfirm === true);
      useEffect(() => {
            dispatch(getTotal())
      }, [dispatch, carts])
      useEffect(() => {
            const userPayment = JSON.parse(`${localStorage.getItem('user-payment-wb')}`);
            if (userPayment) {
                  setUserInfo(userPayment)
            }
      }, [])
      useEffect(()=>{
            async function handleGetPaymentMethod(){
                  try{
                        const res = await payments.getAllPayment();
                        setPaymentMethodOnl(res.data.context.data);
                  }catch(err){console.log(err)}
            }
            handleGetPaymentMethod();
      }, [])
      const PAYMENT_METHOD = [
            { id: 1, img: img.money, title: 'Thanh toán tại cơ sở', method: 'PAYMENT_IN_BRANCH', method_list:[] },
            { id: 2, img: img.cardAtm, title: 'Thanh toán bằng thẻ ATM và tài khoản ngân hàng', method: 'PAYMENT_ATM', method_list:[] },
            { 
                  id: 3, 
                  img: img.cardAtm, 
                  title: 'Thanh toán qua ví điện tử', 
                  method: 'CARD_ONLINE',
                  method_list:paymentMethodOnl
            },
            // { id: 4, img: img.creditMachine, title: 'Thanh toán bằng thẻ quốc tế Visa/Master/JCB', method: 'PAYMENT_VISA', method_list:[] },
            // { id: 6, img: img.imagePay, title: 'Thanh toán qua Ví Ngân Lượng', method: 'PAYMENT_CL', method_list:[] },
      ]
      return (
            <div className="payment">
                  <Head
                        isCart={isCart}
                        title={headerTitle}
                  />
                  <Container>
                        <div className="payment-cnt">
                              <PaymentForm
                                    setUserInfo={setUserInfo}
                              />
                              <PaymentCart
                                    list={list}
                              />
                              <PaymentMethod
                                    methodList={PAYMENT_METHOD}
                                    value={value}
                                    setValue={setValue}
                                    chooseE_wall={chooseE_wall}
                                    setChooseE_wall={setChooseE_wall}
                              />
                        </div>
                  </Container>
                  <PaymentTotal
                        userInfo={userInfo}
                        value={value}
                        methodList={PAYMENT_METHOD}
                        carts={carts}
                        list={list}
                        profile={profile}
                        chooseE_wall={chooseE_wall}
                  />
                  <Footer />
            </div>
      );
}

export default CartPayment;