import React from 'react';
import img from '../../../constants/img';
import SectionTitle from '../../SectionTitle';

const title = 'Ngoài ra, khi sử dụng Booking Flatform Myspa bạn còn có thể'
function HomeFlatForm(props:any) {
      return (
            <div className="home-flatform">
                  <SectionTitle
                        title={title}
                        textAlign="center"
                  />
                  <div className="home-flatform__content">
                        <div className="flatform-card">
                              <img src={img.flatform1} alt="" />
                              <div>
                                    Lưu thông tin doanh nghiệp bạn từng ghé đến và thông tin của bạn tại doanh nghiệp đó bao gồm (Tên, số điểm tích được, số dư, hạng,...)
                              </div>
                        </div>
                        <div className="flatform-card">
                              <img src={img.flatform1} alt="" />
                              <div>
                                    Lưu thông tin doanh nghiệp bạn từng ghé đến và thông tin của bạn tại doanh nghiệp đó bao gồm (Tên, số điểm tích được, số dư, hạng,...)
                              </div>
                        </div>
                        <div className="flatform-card">
                              <img src={img.flatform1} alt="" />
                              <div>
                                    Lưu thông tin doanh nghiệp bạn từng ghé đến và thông tin của bạn tại doanh nghiệp đó bao gồm (Tên, số điểm tích được, số dư, hạng,...)
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default HomeFlatForm;