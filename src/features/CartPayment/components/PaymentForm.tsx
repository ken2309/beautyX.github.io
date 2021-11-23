import React from 'react';
import icon from '../../../constants/icon';

function PaymentForm(props: any) {
      return (
            <form className="flex-row payment-form">
                  <div className="payment-form__left">
                        <span>Thông tin thanh toán</span>
                        <div className="flex-row-sp payment-form__left-ipt">
                              <div className="flex-row payment-form__ipt-top">
                                    <img src={icon.User} alt="" />
                                    <input type="text" placeholder="Tên người đặt hàng" />
                              </div>
                              <div className="flex-row payment-form__ipt-top">
                                    <img src={icon.Phone} alt="" />
                                    <input type="text" placeholder="Tên người đặt hàng" />
                              </div>
                        </div>
                        <div className="flex-row payment-form__left-bt">
                              <img src={icon.location} alt="" />
                              <input type="text" placeholder="Địa chỉ" />
                        </div>
                  </div>
                  <div className="payment-form__right">
                        <textarea placeholder="Ghi chú cho doanh nghiệp"></textarea>
                  </div>
            </form>
      );
}

export default PaymentForm;