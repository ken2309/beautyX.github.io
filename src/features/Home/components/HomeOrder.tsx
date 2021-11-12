import React from 'react';
import Title from './Title';
import img from '../../../constants/img';

const title = 'Đặt mua sản phẩm, đặt hẹn dịch vụ \n và thanh toán online ngay trên nền tảng'
const steps = [
      { image: img.homeSt1, step: 1, title: 'Tìm kiếm sản phẩm, dịch vụ' },
      { image: img.homeSt2, step: 2, title: 'Thêm sản phẩm, dich vụ vào giỏ hàng' },
      { image: img.homeSt3, step: 3, title: 'Thanh toán sản phẩm, dịch vụ' },
      { image: img.homeSt4, step: 4, title: 'Đặt hẹn ngay' }
]
function HomeOrder(props:any) {
      return (
            <div className="home-order">
                  <Title
                        title = {title}
                  />
                  <div className="home-step__line"></div>
                  <div className="home-order__step">
                        {
                              steps.map((item, index) => (
                                    <div key={index} className="home-order__card">
                                          <span className="home-order__card-step">
                                                Bước {item.step}
                                          </span>
                                          <span className="home-order__card-title">
                                                {item.title}
                                          </span>
                                          <img src={item.image} alt="" />
                                    </div>
                              ))
                        }
                  </div>
            </div>
      );
}

export default HomeOrder;