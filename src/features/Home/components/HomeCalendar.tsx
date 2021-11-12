import React from 'react';
import Title from './Title';
import img from '../../../constants/img';
import icon from '../../../constants/icon';

const title = 'Sắp xếp, theo dõi và nhắc nhở lịch hẹn';
const array = [
      {
            icon: icon.miniMapIcon,
            title: 'Sắp xếp các lịch hẹn',
            text: 'Bạn sẽ không phải lo việc trùng lịch hẹn khi đặt hẹn tại quá nhiều nơi. Hệ thống sẽ thông báo ngay nếu bạn vô tình chọn nhầm vào khung giờ đã có hẹn'
      },
      {
            icon: icon.miniMapIcon,
            title: 'Theo dõi lịch hẹn theo ngày, tuần, tháng',
            text: 'Xem lịch hẹn theo ngày, tuần, tháng sẽ giúp bạn nắm rõ được lịch hẹn và sắp xếp thời gian hợp lý. Cập nhật nhanh nhất các trạng thái đặt hẹn (Đã xác nhận, chưa xác nhận, hoàn thành và hủy hẹn)'
      },
      {
            icon: icon.miniMapIcon,
            title: 'Thông báo nhắc hẹn khi đến lịch',
            text: 'Hệ thống sẽ gửi thông báo nhắc hẹn về điện thoại hoặc email để bạn không bị bỏ lỡ bất kỳ buổi hẹn nào.'
      }
]
function HomeCalendar(props:any) {
      return (
            <div className="home-calendar">
                 <Title
                        title = {title}
                 />
                  <div className="home-calendar-content">
                        <ul>
                              {
                                    array.map((item, index) => (
                                          <li key={index}>
                                                <div className="calendar-item">
                                                      <div className="calendar-item__header">
                                                            <img src={icon.miniMapIcon} alt="" />
                                                            <span>{item.title}</span>
                                                      </div>
                                                      <span className="calendar-item__text">
                                                            {item.text}
                                                      </span>
                                                </div>
                                          </li>
                                    ))
                              }
                        </ul>
                        <img className="calendar-img" src={img.homeCalendar} alt="" />
                  </div>
            </div>
      );
}

export default HomeCalendar;