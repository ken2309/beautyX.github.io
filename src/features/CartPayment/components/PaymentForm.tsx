import React, { useContext, useState } from 'react';
import icon from '../../../constants/icon';
import PopupSuccess from '../../PopupSuccess/index';
import {useHistory} from 'react-router-dom'
//import {useFormik} from 'formik';
//import * as Yup from 'yup'
import { AppContext } from '../../../context/AppProvider';

//const phoneFormat = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
function PaymentForm(props: any) {
      const {setNote} = props;
      const { t } = useContext(AppContext);
      const history = useHistory();
      const { address } = props;
      const [popup, setPopup] = useState(false);
      const user = JSON.parse(`${localStorage.getItem('_WEB_US')}`);
      return (
            <>
                  <div
                        className="flex-column payment-form"
                  >
                        <div style={{ width: '100%' }} className="flex-row-sp payment-form__box">
                              <div className="payment-form__left">
                                    <span>{t('pm.payment_info')}</span>
                                    <div className="payment-form__left-cnt">
                                          <span className="flex-row-sp sec-title">
                                                Thông tin người nhận
                                                <button
                                                      className='flex-row'
                                                      onClick={()=>history.push('/tai-khoan/thong-tin-ca-nhan')}
                                                >
                                                      <img src={icon.editWhite} alt="" />
                                                      Thay đổi
                                                </button>
                                          </span>
                                          <div className="sec-item">
                                                <div className="sec-item__label">
                                                      <span>Họ và tên:</span>
                                                      <span>{user?.fullname}</span>
                                                </div>
                                                <div className="sec-item__label">
                                                      <span>Email:</span>
                                                      <span>{user?.email}</span>
                                                </div>
                                                <div className="sec-item__label">
                                                      <span>Số điện thoại:</span>
                                                      <span>{user?.telephone}</span>
                                                </div>
                                          </div>
                                          <span
                                                style={{ marginTop: '6px' }}
                                                className="flex-row-sp sec-title"
                                          >
                                                Địa chỉ giao hàng
                                                <button
                                                      className='flex-row'
                                                      onClick={()=>history.push('/tai-khoan/thong-tin-ca-nhan')}
                                                >
                                                      <img src={icon.editWhite} alt="" />
                                                      Thay đổi
                                                </button>
                                          </span>
                                          <div className="sec-item__label">
                                                <span>Đia chỉ:</span>
                                                <span>{address?.address}</span>
                                          </div>
                                    </div>
                              </div>
                              <div className="payment-form__right">
                                    <textarea
                                          name="cus_note"
                                          onChange={(e)=> setNote(e.target.value)}
                                          //value={formik.values.cus_note}
                                          //onChange={formik.handleChange}
                                          placeholder={t('pm.note')}
                                    ></textarea>
                              </div>
                        </div>
                  </div>
                  <PopupSuccess
                        popup={popup}
                        setPopup={setPopup}
                        title={t('pm.save_success')}
                  />
            </>
      );
}

export default PaymentForm;