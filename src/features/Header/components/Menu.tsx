import React, { useState } from 'react';
import {headerStyle} from '../style';
import icon from '../../../constants/icon';
import ButtonCus from '../../../components/ButtonCus';
import CheckNotification from './CheckNotification'
import '../header.css';

function Menu(props:any) {
      const {openMenu} = props;
      const menu = headerStyle();
      const [openSetting, setOpenSetting] = useState(false);
      const openSettingClick = () => {
            if (openSetting === false) { setOpenSetting(true) }
            else { setOpenSetting(false) }
      }
      return (
            <div
                  style={openMenu === false ? { display: 'none' } : { display: 'block' }}
                  className={menu.menuBox}
            >
                  <div className={menu.menuBoxTitle}>Menu</div>
                  <ul>
                        <li className={menu.menuBoxItem}>
                              <div className={menu.menuItemContent}>
                                    <img src={icon.ShoppingCartSimple} alt="" />
                                    <span className={menu.menuItemText}>Tài khoản của tôi</span>
                              </div>
                        </li>
                        <li className={menu.menuBoxItem}>
                              <div className={menu.menuItemContent}>
                                    <img src={icon.ShoppingCartSimple} alt="" />
                                    <span className={menu.menuItemText}>Tài khoản của tôi</span>
                              </div>
                        </li>
                        <li className={menu.menuBoxItem}>
                              <div className={menu.menuItemContent}>
                                    <img src={icon.ShoppingCartSimple} alt="" />
                                    <span className={menu.menuItemText}>Tài khoản của tôi</span>
                              </div>
                        </li>
                        <li className={menu.menuBoxItem}>
                              <div className={menu.menuItemContent}>
                                    <img src={icon.ShoppingCartSimple} alt="" />
                                    <span className={menu.menuItemText}>Tài khoản của tôi</span>
                              </div>
                        </li>
                        <li className={menu.menuBoxItem}>
                              <div className={menu.menuItemContent}>
                                    <img src={icon.ShoppingCartSimple} alt="" />
                                    <span className={menu.menuItemText}>Tài khoản của tôi</span>
                              </div>
                        </li>
                        <li className={menu.menuBoxItem}>
                              <div 
                                    onClick={openSettingClick}
                                    className={menu.menuItemDrop}
                              >
                                    <div className={menu.menuItemContent}>
                                          <img src={icon.ShoppingCartSimple} alt="" />
                                          <span className={menu.menuItemText}>Cài đặt</span>
                                    </div>
                                    <img src={icon.down} alt="" />
                              </div>
                              <ul
                                    style={openSetting === false ? { display: 'none' } : { display: 'block' }}
                                    className={menu.menuSetting}
                              >
                                    <li className={menu.menuSettingItem}>
                                          <span>Nhận thông báo</span>
                                          <CheckNotification/>
                                    </li>
                                    <li className={menu.menuSettingItem}>
                                          <span>Ngôn ngữ</span>
                                          <CheckNotification />
                                    </li>
                              </ul>
                        </li>
                        <li className={menu.menuBoxItem}>
                              <div className={menu.menuItemContent}>
                                    <img src={icon.ShoppingCartSimple} alt="" />
                                    <span className={menu.menuItemText}>Tài khoản của tôi</span>
                              </div>
                        </li>
                  </ul>
                  <div className={menu.menuBottom}>
                        <img src={icon.Menu} alt="" />
                        <ButtonCus
                              text='Đăng xuất'
                              color='var(--purple)'
                              fontSize='14px'
                              lineHeight='20px'
                              paddingLeft='4px'
                        />
                  </div>
            </div>
      );
}

export default Menu;