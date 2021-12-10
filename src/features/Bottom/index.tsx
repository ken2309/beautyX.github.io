import React from 'react';
import './Bottom.css';
import icon from '../../constants/icon';

function Bottom(props:any) {
      return (
            <div className='bt'>
                  <div className="flex-row-sp bt-cnt">
                        <div className="flex-column bt-cnt__item">
                              <img src={icon.home} alt="" />
                              <span className="bt-cnt__item-title">
                                    Trang chủ
                              </span>
                        </div>
                        <div className="flex-column bt-cnt__item">
                              <img src={icon.Calendar} alt="" />
                              <span className="bt-cnt__item-title">
                                    Lịch hẹn
                              </span>
                        </div>
                        <div className="flex-column bt-cnt__item">
                              <img src={icon.home} alt="" />
                              <span className="bt-cnt__item-title">
                                    Thông báo
                              </span>
                        </div>
                        <div className="flex-column bt-cnt__item">
                              <img src={icon.User} alt="" />
                              <span className="bt-cnt__item-title">
                                    Tài khoản
                              </span>
                        </div>
                  </div>
            </div>
      );
}

export default Bottom;