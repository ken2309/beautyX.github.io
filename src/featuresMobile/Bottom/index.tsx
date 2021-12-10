import React, { useState } from 'react';
import './Bottom.css';
import icon from '../../constants/icon';
import {useHistory} from 'react-router-dom'

function Bottom(props: any) {
      const Btns = [
            {
                  id: 1,
                  title: 'Trang chủ',
                  icon: icon.home,
                  path: '/'
            },
            {
                  id: 2,
                  title: 'Lịch hẹn',
                  icon: icon.Calendar,
                  path: '/Calendar'
            },
            {
                  id: 3,
                  title: 'Thông báo',
                  icon: icon.Bell,
                  path: ''
            },
            {
                  id: 4,
                  title: 'Tài khoản',
                  icon: icon.User,
                  path: '/tai-khoan'
            }
      ]
      const [acBtn, setAcBtn] = useState(1);
      const history = useHistory();
      const chooseBtn = (item: any) => {
            setAcBtn(item.id)
            history.push(`${item.path}`)
      }
      return (
            <div className='bt'>
                  <div className="flex-row-sp bt-cnt">
                        {
                              Btns.map(item => (
                                    <div
                                          key={item.id}
                                          onClick={() => chooseBtn(item)}
                                          className="flex-column bt-cnt__item"
                                    >
                                          <img src={item.icon} alt="" />
                                          <span
                                                style={item.id === acBtn ? { color: 'var(--purple)', fontWeight:'700' } : {}}
                                                className="bt-cnt__item-title"
                                          >
                                                {item.title}
                                          </span>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      );
}

export default Bottom;