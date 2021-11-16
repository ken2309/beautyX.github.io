import React from 'react';
import icon from '../../../constants/icon';
import DetailCommentItem from './DetailCommentItem'
import SectionTitle from '../../SectionTitle';
import ButtonCus from '../../../components/ButtonCus/index'

const cmtList = [
      { id: 1, name: 'Quế Trâm', rateStar: 4, date: '18-10-2021', text: 'Không gian sang trọng, tư vấn cũng ok, dịch vụ cũng khá ổn nhưng hơi đắt.Đánh giá 3 sao vì nhân viên mượn đt nói là check in gì đấy nhưng thật ra là tự đánh giá 5 sao' },
      { id: 2, name: 'Tam Nguyen', rateStar: 5, date: '20-11-2021', text: 'Chất lượng phục vụ tốt . Nhân viên rất thân thiện và nhiệt tình tư vấn theo nhu cầu khác hàng' },
      { id: 3, name: 'Vuong Xuan Duy', rateStar: 4, date: '21-11-2021', text: 'Nhân viên tư vấn nhiệt tình , chế độ chăm sóc hậu mãi lâu dài. Sẽ quay lại sử dụng dịch vụ lần sau. ' }
]
function DetailComment(props:any) {
      return (
            <div className="mer-detail__content-cmt">
                  <div className="flex-row-sp mer-detail-cmt__head">
                        <span className="flex-row-sp">
                              <SectionTitle
                                    title="Đánh giá"
                              />
                              <h1 className="mer-detail-cmt__head-star">
                                    4.5/5
                                    <img src={icon.star} alt="" />
                              </h1>
                        </span>
                        <div className="mer-detail-cmt__head-total">
                              <span>150</span> Lượt đánh giá
                        </div>
                  </div>
                  <ul className="mer-detail-cmt__box">
                        {
                              cmtList.map(item => (
                                    <DetailCommentItem
                                          key={item.id}
                                          comment={item}
                                    />
                              ))
                        }
                  </ul>
                  <ButtonCus
                        text="Xem tất cả đánh giá"
                        imgIcon={icon.next}
                        color="var(--purple)"
                        border="solid 1px var(--purple)"
                        borderRadius="18px"
                  />
            </div>
      );
}

export default DetailComment;