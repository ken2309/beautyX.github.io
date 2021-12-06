import React, { useContext, useState } from 'react';
import {headerStyle} from '../style';
import icon from '../../../constants/icon';
import ButtonCus from '../../../components/ButtonCus';
import CheckNotification from './CheckNotification'
import '../header.css';
import { AppContext } from '../../../context/AppProvider';

function Menu(props:any) {
      const {t} = useContext(AppContext)
      const {openMenu, setSign} = props;
      const menu = headerStyle();
      const [openSetting, setOpenSetting] = useState(false);
      const handleSignOut = () => {
            console.log('logout');
            setSign(false);
            const token = '';
            window.sessionStorage.setItem('_WEB_TK', token)
      }
      return (
            <div
                  style={openMenu === true ? { top: '3rem', opacity: '1', visibility: 'visible' } : {top: '5rem', opacity:'0', visibility: 'hidden' }}
                  className={menu.menuBox}
            >
                  <div className={menu.menuBoxTitle}>Menu</div>
                  <ul>
                        <li className={menu.menuBoxItem}>
                              <div className={menu.menuItemContent}>
                                    <img src={icon.User_purple} alt="" />
                                    <span className={menu.menuItemText}>{t('Header.my_acc')}</span>
                              </div>
                        </li>
                        <li className={menu.menuBoxItem}>
                              <div className={menu.menuItemContent}>
                                    <img src={icon.Credit_card} alt="" />
                                    <span className={menu.menuItemText}>{t('pm.payment_method')}</span>
                              </div>
                        </li>
                        <li className={menu.menuBoxItem}>
                              <div className={menu.menuItemContent}>
                                    <img src={icon.Clock_purple} alt="" />
                                    <span className={menu.menuItemText}>{t('Header.my_order')}</span>
                              </div>
                        </li>
                        <li className={menu.menuBoxItem}>
                              <div className={menu.menuItemContent}>
                                    <img src={icon.Ticket} alt="" />
                                    <span className={menu.menuItemText}>{t('Header.my_codes')}</span>
                              </div>
                        </li>
                        <li className={menu.menuBoxItem}>
                              <div className={menu.menuItemContent}>
                                    <img src={icon.Bell} alt="" />
                                    <span className={menu.menuItemText}>{t('cart.noti')}</span>
                              </div>
                        </li>
                        <li className={menu.menuBoxItem}>
                              <div 
                                    onClick={()=>setOpenSetting(!openSetting)}
                                    className={menu.menuItemDrop}
                              >
                                    <div className={menu.menuItemContent}>
                                          <img src={icon.Setting} alt="" />
                                          <span className={menu.menuItemText}>{t('Header.settings')}</span>
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
                                    <img src={icon.Headphones_purple} alt="" />
                                    <span className={menu.menuItemText}>{t('Header.support')}</span>
                              </div>
                        </li>
                  </ul>
                  <div className={menu.menuBottom}>
                        <img src={icon.Menu} alt="" />
                        <ButtonCus
                              text={t('Header.sign_out')}
                              color='var(--purple)'
                              fontSize='14px'
                              lineHeight='20px'
                              paddingLeft='4px'
                              onClick={handleSignOut}
                        />
                  </div>
            </div>
      );
}

export default Menu;