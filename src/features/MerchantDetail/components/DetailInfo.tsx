import React, { useState } from 'react';
import SectionTitle from '../../SectionTitle';
import icon from '../../../constants/icon';
import {imgRotate} from '../../../utils/imgRotate'

const introText='Với những thành phần thiên nhiên mang đến những tác dụng tốt cho làn da, được bào chế, pha trộn theo tỷ lệ vàng thích hợp cùng công nghệ hiện đại tiên tiến. Vì thế hiệu quả trị nám của dòng kem này được đánh giá khá tốt. Cụ thể như sau:Kem trị nám dùng cho ban ngày với thành phần Glycerol momonnostearate có tác dụng thẩm thấu nhanh, sâu vào tế bào da, ngăn chặn, ức chế sự hình thành melanin.Không gian sang trọng, tư vấn cũng ok, dịch vụ cũng khá ổn nhưng hơi đắt. Đánh giá 3 sao vì nhân viên mượn đt nói là check in gì đấy nhưng thật ra là tự đánh giá 5 sao...Xem thêm'
const ultiesList=[
      {icon: icon.car, text:'Bãi đỗ xe'},
      {icon: icon.bed, text:'Giường'}
]
function DetailInfo(props:any) {
      const {merDetail} = props;
      const [showViewMore, setShowViewMore] = useState(false)
      return (
            <div className="mer-detail__content-info">
                  <div className="mer__content-info__introduction">
                        <SectionTitle
                              title={merDetail?.name}
                        />
                        <div
                              style={showViewMore === true ? { height: 'fit-content', boxShadow: 'unset' } : {}}
                              className='text'
                        >
                              {introText}
                        </div>
                        <span
                              onClick={() => setShowViewMore(!showViewMore)}
                        >
                              <img
                                    style={showViewMore === true ? imgRotate : {}}
                                    src={icon.down} alt=""
                              />
                              {showViewMore === false ? 'Xem thêm' : 'Ẩn bớt'}
                        </span>
                  </div>
                  <div className="mer__content-info__util">
                        <SectionTitle
                              title="Tiện ích"
                        />
                        <ul className="mer__content-info__util-list">
                              <li>
                                    <div className="mer__content-info__util-item">
                                          <img src={icon.car} alt="" />     
                                    </div>
                              </li>
                              <li>
                                    <div className="mer__content-info__util-item">
                                      <img src={icon.bed} alt="" />    
                                    </div>
                              </li>
                              <li>
                                    <div className="mer__content-info__util-item">
                                          <img src={icon.door} alt="" />
                                    </div>
                              </li>
                              <li>
                                    <div className="mer__content-info__util-item">
                                          <img src={icon.car} alt="" />
                                    </div>
                              </li>
                        </ul>
                  </div>
            </div>
      );
}

export default DetailInfo;