import React from 'react';
import './account.css';
import icon from '../../constants/icon'

function change() {
      const avtWrap = document.querySelector('.mb-ac__cnt-avt-wrap')
      avtWrap?.classList.add('mb-ac__cnt-avt-wrap-change')
      const avtImg = document.querySelector('.mb-ac__cnt-avt-box-img')
      avtImg?.classList.add('mb-ac__cnt-avt-box-img-change')
      document.querySelector('.mb-ac__cnt-avt-name')?.classList.add('mb-ac__cnt-avt-name-change')
      document.querySelector('.mb-ac__cnt-avt')?.classList.add('mb-ac__cnt-avt-ch')
}
function changeBack() {
      const avtWrap = document.querySelector('.mb-ac__cnt-avt-wrap')
      avtWrap?.classList.remove('mb-ac__cnt-avt-wrap-change')
      const avtImg = document.querySelector('.mb-ac__cnt-avt-box-img')
      avtImg?.classList.remove('mb-ac__cnt-avt-box-img-change')
      document.querySelector('.mb-ac__cnt-avt-name')?.classList.remove('mb-ac__cnt-avt-name-change')
      document.querySelector('.mb-ac__cnt-avt')?.classList.remove('mb-ac__cnt-avt-ch')
}
function AccountMb() {
      document.addEventListener("scroll", () => {
            let scrollY = window.scrollY;
            if (scrollY >= 80) {
                  change()
            } else {
                  changeBack()
            }
      });
      return (
            <div className="mb-ac">
                  <div className="mb-ac__cnt">
                        <div className="mb-ac__cnt-avt">
                              <div className='mb-ac__cnt-avt-wrap'>
                                    <div className="mb-ac__cnt-avt-box">
                                          <img
                                                src="https://picsum.photos/650/976?random=1"
                                                alt=""
                                                className="mb-ac__cnt-avt-box-img"
                                          />
                                          <button>
                                                <img src={icon.Camera_purple} alt="" />
                                          </button>
                                    </div>
                                    <div className="flex-column mb-ac__cnt-avt-name">
                                          Nguyen Ngoc Toan
                                          <div className="mb-ac__cnt-avt-rank">
                                                <ul>
                                                      <li>
                                                            <div className=" flex-row-sp item">
                                                                  <img src={icon.Ticket} alt="" />
                                                                  <div className="item-cnt">
                                                                        <span>Điểm</span>
                                                                        <span>2000</span>
                                                                  </div>
                                                            </div>
                                                      </li>
                                                      <li>
                                                            <div className=" flex-row-sp item">
                                                                  <img src={icon.Wallet} alt="" />
                                                                  <div className="item-cnt">
                                                                        <span>Số dư</span>
                                                                        <span>200.000đ</span>
                                                                  </div>
                                                            </div>
                                                      </li>
                                                      <li>
                                                            <div className=" flex-row-sp item">
                                                                  <img src={icon.Crown} alt="" />
                                                                  <div className="item-cnt">
                                                                        <span>Hạng</span>
                                                                        <span>Vàng</span>
                                                                  </div>
                                                            </div>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="mb-ac__cnt-private">
                              <ul>
                                    <li>
                                          <div className="flex-column mb-ac__cnt-private-item">
                                                <img src={icon.User_purple} alt="" />
                                                <span>Tài khoản của tôi</span>
                                          </div>
                                    </li>
                                    <li>
                                          <div className="flex-column mb-ac__cnt-private-item">
                                                <img src={icon.Credit_card} alt="" />
                                                <span>Phương thức thanh toán</span>
                                          </div>
                                    </li>
                                    <li>
                                          <div className="flex-column mb-ac__cnt-private-item">
                                                <img src={icon.Ticket} alt="" />
                                                <span>Danh sách mã ưu đãi</span>
                                          </div>
                                    </li>
                                    <li>
                                          <div className="flex-column mb-ac__cnt-private-item">
                                                <img src={icon.Ticket} alt="" />
                                                <span>Danh sách mã ưu đãi</span>
                                          </div>
                                    </li>
                              </ul>
                        </div>
                        <div className="mb-ac__cnt-private">
                              <ul>
                                    <li className="flex-row mb-ac__cnt-private-item">
                                          <img src={icon.User_purple} alt="" />
                                          <span>Tài khoản của tôi</span>
                                    </li>
                                    <li className="flex-row mb-ac__cnt-private-item">
                                          <img src={icon.User_purple} alt="" />
                                          <span>Tài khoản của tôi</span>
                                    </li>
                                    <li className="flex-row mb-ac__cnt-private-item">
                                          <img src={icon.User_purple} alt="" />
                                          <span>Tài khoản của tôi</span>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
}

export default AccountMb;