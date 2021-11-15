import React from 'react';
import SectionTitle from '../../SectionTitle';
import img from '../../../constants/img';
import icon from '../../../constants/icon';

const title = 'Dễ dàng xem xét và chọn lựa \n sản phẩm, dịch vụ, địa điểm làm đẹp ưng ý';
const miniCards=[
      {icon: icon.miniMapIcon, text:'Tìm kiếm chính xác nhu cầu của bạn với bộ lọc nâng cao theo danh mục, vị trí và khoảng giá mong muốn'},
      {icon: icon.miniMapIcon, text:'Cung cấp cho bạn thông tin chi tiết của các doanh nghiệp như: hình ảnh, địa chỉ, đánh giá, thời gian làm việc,...'},
      {icon: icon.miniMapIcon, text:'Thể hiện vị trí doanh nghiệp trên bản đồ, đồng thời chỉ đường cho bạn đến nơi làm đẹp bạn mong muốn'}

]
function HomeMiniMap(props: any) {
      return (
            <div className="home-mini-map">
                  <SectionTitle
                        title={title}
                        textAlign='center'
                  />
                  <div className="home-mini-map__content">
                        <img className="home-mini-map__img" src={img.miniMap} alt="" />
                        <div className="home-mini-map__card">
                              {
                                    miniCards.map((item, index) => (
                                          <div key={index} className="mini-map__content-item">
                                                <img src={item.icon} alt="" />
                                                <span>
                                                      {item.text}
                                                </span>
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
            </div>
      );
}

export default HomeMiniMap;