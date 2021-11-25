import React, { useState } from 'react';
import icon from '../../../constants/icon';
import PopupSuccess from '../../PopupSuccess/index'
import {useFormik} from 'formik';
import * as Yup from 'yup'

const phoneFormat = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
function PaymentForm(props: any) {
      const { setUserInfo } = props;
      const [popup, setPopup] = useState(false);
      const user = JSON.parse(`${localStorage.getItem('user-payment-wb')}`);
      const formik = useFormik({
            initialValues: {
                  cus_name: user ? user.cus_name : '',
                  cus_address: user ? user.cus_address : '',
                  cus_phone: user ? user.cus_phone : '',
                  cus_note: user ? user.cus_note : ''
            },
            validationSchema: Yup.object({
                  cus_name: Yup.string()
                        .required("Vui lòng nhập đầy đủ họ và tên !"),
                  cus_address: Yup.string()
                        .required("Vui lòng nhập địa chỉ !"),
                  cus_phone: Yup.string()
                        .matches(phoneFormat, 'Số điện thoại không đúng !')
                        .required("Vui lòng nhập số điện thoại !")
            }),
            onSubmit: (values: any) => {
                  setUserInfo(values);
                  localStorage.setItem('user-payment-wb', JSON.stringify(values));
                  setPopup(true)
            }
      });

      return (
            <>
                  <form
                        onSubmit={formik.handleSubmit}
                        autoComplete="off"
                        className="flex-column payment-form"
                  >
                        <div style={{ width: '100%' }} className="flex-row-sp">
                              <div className="payment-form__left">
                                    <span>Thông tin thanh toán</span>
                                    <div className="flex-row-sp pm-form__top">
                                          <div className="pm-form__top-item">
                                                <div className="pm-form__top-item_ip">
                                                      <img src={icon.User} alt="" />
                                                      <input
                                                            name="cus_name"
                                                            value={formik.values.cus_name}
                                                            onChange={formik.handleChange}
                                                            type="text"
                                                            placeholder="Họ và tên"
                                                      />
                                                </div>
                                                {formik.errors.cus_name && formik.touched.cus_name && (
                                                      <span className="pm-form__top-item_err">{formik.errors.cus_name}</span>
                                                )}
                                          </div>
                                          <div className="pm-form__top-item">
                                                <div className="pm-form__top-item_ip">
                                                      <img src={icon.phone} alt="" />
                                                      <input
                                                            name="cus_phone"
                                                            value={formik.values.cus_phone}
                                                            onChange={formik.handleChange}
                                                            type="text"
                                                            placeholder="Số điện thoại"
                                                      />
                                                </div>
                                                {formik.errors.cus_phone && formik.touched.cus_phone && (
                                                      <span className="pm-form__top-item_err">{formik.errors.cus_phone}</span>
                                                )}
                                          </div>
                                    </div>
                                    <div className="pm-form__bot">
                                          <div className="pm-form__top-item_ip">
                                                <img src={icon.Location} alt="" />
                                                <input
                                                      name="cus_address"
                                                      value={formik.values.cus_address}
                                                      onChange={formik.handleChange}
                                                      type="text"
                                                      placeholder="Địa chỉ"
                                                />
                                          </div>
                                          {formik.errors.cus_address && formik.touched.cus_address && (
                                                <span className="pm-form__top-item_err">{formik.errors.cus_address}</span>
                                          )}
                                    </div>
                              </div>
                              <div className="payment-form__right">
                                    <textarea
                                          name="cus_note"
                                          value={formik.values.cus_note}
                                          onChange={formik.handleChange}
                                          placeholder="Ghi chú cho doanh nghiệp"
                                    ></textarea>
                              </div>
                        </div>
                        <button className="payment-submit" type="submit" >Lưu thông tin</button>
                  </form>
                  <PopupSuccess
                        popup={popup}
                        setPopup={setPopup}
                        title="Lưu thông tin thành công"
                  />
            </>
      );
}

export default PaymentForm;