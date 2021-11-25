import React, {useState} from 'react';
import {Container} from '@mui/material';
import formatPrice from '../../../utils/formatPrice';
import ButtonCus from '../../../components/ButtonCus';
import PopupSuccess from '../../PopupSuccess/index';

const useInPayment: boolean = true;
function PaymentTotal(props: any) {
      const { methodList, value, list, carts, userInfo } = props;
      const pmMethod = methodList.find((item: any) => item.method === value);
      const [popup, setPopup] = useState(false);
      const handleSubmitPayment = () => {
            if (value && userInfo) {
                  // const params = {
                  //       name: userInfo.cus_name,
                  //       phone: userInfo.cus_phone,
                  //       address: userInfo.cus_address,
                  //       note: userInfo.cus_note,
                  //       payment_method: value,
                  //       cart: list
                  // }
                  console.log(list);
                  localStorage.setItem('booking-service', JSON.stringify(list))
                  setPopup(true)
            } else {
                  console.log('err !')
            }
      }
      return (
            <div className="payment-total">
                  <Container>
                        <div className="flex-row payment-total__head">
                              <span>Nhập mã khuyến mại</span>
                              <input type="text" placeholder="Mã khuyến mại" />
                        </div>
                        <div className="flex-row payment-total__body">
                              <div className="payment-total__body-item">
                                    <p>Phương thức thanh toán</p>
                                    <p>Tổng tiền</p>
                                    <p>Giảm giá</p>
                                    <p>Tổng thanh toán</p>
                              </div>
                              <div className="payment-total__body-item">
                                    <p
                                          style={{ color: 'var(--text-black)' }}
                                    >
                                          {pmMethod ? pmMethod?.title : 'Vui lòng chọn phương thức thanh toán'}
                                    </p>
                                    <p>{formatPrice(carts.cartAmount)} đ</p>
                                    <p>0 đ</p>
                                    <p>{formatPrice(carts.cartAmount)} đ</p>
                              </div>
                        </div>
                        <div className="flex-row-sp payment-total__body-submit">
                              <span>Nhấn "Thanh toán" để hoàn tất</span>
                              <ButtonCus
                                    text="Thanh toán"
                                    color="var(--purple)"
                                    border="solid 1px var(--purple)"
                                    borderRadius="16px"
                                    onClick={handleSubmitPayment}
                              />
                        </div>
                  </Container>
                  <PopupSuccess
                        popup={popup}
                        setPopup={setPopup}
                        useInPayment={useInPayment}
                        title="Thanh toán thành công"
                  />
            </div>
      );
}

export default PaymentTotal;