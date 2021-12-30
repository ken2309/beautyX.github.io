import React from 'react';
import {headerStyle} from '../style';
import icon from '../../../constants/icon';
import ButtonCus from '../../../components/ButtonCus/index'

const notifications=[
      {
            id:1,
            orgName:'Kanessa Beauty & Spa',
            detail:'Chào Bình, 14h00 chiều này bạn có lịch hẹn điều trị buổi 2 liệu trình trị nám chuyên sâu tại Kanessa....',
            isRead: true
      },
      {
            id:2,
            orgName:'Spa',
            detail:'Chào Bình, 14h00 chiều này bạn có lịch hẹn điều trị buổi 2 liệu trình trị nám chuyên sâu tại Kanessa....',
            isRead: true
      },
      {
            id:3,
            orgName:'Kanessa ',
            detail:'Chào Bình, 14h00 chiều này bạn có lịch hẹn điều trị buổi 2 liệu trình trị nám chuyên sâu tại Kanessa....',
            isRead: false
      }
]
const noRead= notifications.filter(item => item.isRead === false)
function Notification(props:any) {
      const {openNo} = props;
      const NoStyle=headerStyle();
      const viewMoreNotification=()=>{
            // console.log('Xem tất cả thông báo')
      }
      return (
            <div
                  style={openNo === true ? { top: '3rem', opacity: '1', visibility: 'visible' } : {top: '5rem', opacity:'0', visibility: 'hidden' }}
                  className={NoStyle.noBox} id="notification"
            >
                  <div className={NoStyle.noBoxTitle}>
                        <span className={NoStyle.noBoxTitleText}>
                              Thông báo ({noRead.length})
                        </span>
                        <span className={NoStyle.noBoxTitleCheck}>
                              Đánh dấu tất cả đã xem
                              <img src={icon.Check} alt="" />
                        </span>
                  </div>
                  <ul className={NoStyle.noList}>
                        {
                              notifications.map(item => (
                                    <li
                                          key={item.id}
                                          className={NoStyle.noItem}
                                    >
                                          <div className={NoStyle.noItemBox}>
                                                <img src={item.isRead === true ? icon.Check2 : icon.dotPurple} alt="" />
                                                <div
                                                      style={
                                                            item.isRead === true ?
                                                                  { opacity: '0.5' }
                                                                  :
                                                                  { opacity: '1' }
                                                      }
                                                      className={NoStyle.noBoxItemText}
                                                >
                                                      <p className={NoStyle.noItemOrg}>
                                                            {item.orgName}
                                                      </p>
                                                      <p className={NoStyle.noItemContent}>
                                                            {item.detail}
                                                      </p>
                                                      <p className={NoStyle.noItemTime}>2 giờ trước</p>
                                                </div>
                                          </div>
                                    </li>
                              ))
                        }
                  </ul>
                  <ButtonCus
                        text='Xem tất cả thông báo'
                        fontSize='14px'
                        lineHeight='20px'
                        color='var(--purple)'
                        border='solid 1px var(--purple)'
                        borderRadius='26px'
                        imgIcon={icon.next}
                        onClick={viewMoreNotification}
                  />
            </div>
      );
}

export default Notification;