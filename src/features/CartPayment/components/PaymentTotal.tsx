import React, {useContext, useState} from 'react';
import {Container} from '@mui/material';
import formatPrice from '../../../utils/formatPrice';
import ButtonCus from '../../../components/ButtonCus';
import PopupSuccess from '../../PopupSuccess/index';
import { AppContext } from '../../../context/AppProvider';

const useInPayment: boolean = true;
function PaymentTotal(props: any) {
      const { t } = useContext(AppContext)
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
                              <span>{t('pr.enter_sale_code')}</span>
                              <input type="text" placeholder={t('pr.enter_sale_code')} />
                        </div>
                        <div className="flex-row payment-total__body">
                              <div className="payment-total__body-item">
                                    <p>{t('pm.payment_method')}</p>
                                    <p>{t('pr.total')}</p>
                                    <p>{t('pm.discounts')}</p>
                                    <p>{t('pm.payment_total')}</p>
                              </div>
                              <div className="payment-total__body-item">
                                    <p
                                          style={{ color: 'var(--text-black)' }}
                                    >
                                          {pmMethod ? pmMethod?.title : t('pm.choose_payment_method')}
                                    </p>
                                    <p>{formatPrice(carts.cartAmount)} đ</p>
                                    <p>0 đ</p>
                                    <p>{formatPrice(carts.cartAmount)} đ</p>
                              </div>
                        </div>
                        <div className="flex-row-sp payment-total__body-submit">
                              <span>{t('pm.enter_to_payment')}</span>
                              <ButtonCus
                                    text={t('pm.payment_2')}
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
                        title={t('pm.payment_success')}
                  />
            </div>
      );
}

export default PaymentTotal;