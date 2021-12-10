import React, { useContext } from 'react';
import icon from '../../../constants/icon';
import ButtonCus from '../../../components/ButtonCus';
import {AppContext} from '../../../context/AppProvider'

function Menu(props:any) {
      const { openMenu, setOpenMenu, profile } = props;
      const { t, setSign } = useContext(AppContext)
      const handleSignOut = () => {
            setSign(false);
            const token = '';
            setOpenMenu(!openMenu)
            localStorage.setItem('_WEB_TK', token)
      }
      return (
            <div
                  style={openMenu === true ? { top: '3rem', opacity: '1', visibility: 'visible' } : { top: '5rem', opacity: '0', visibility: 'hidden' }}
                  className="hd-menu"
            >
                  <div className="hd-menu__title">Menu</div>
                  <ul>
                        {
                              profile ?
                                    <>
                                          <li className="{menu.menuBoxItem}">
                                                <div className="flex-row hd-menu__item">
                                                      <img src={icon.User_purple} alt="" />
                                                      <span className="hd-menu__item-text">{t('Header.my_acc')}</span>
                                                </div>
                                          </li>
                                          <li className="{menu.menuBoxItem}">
                                                <div className="flex-row hd-menu__item">
                                                      <img src={icon.Credit_card} alt="" />
                                                      <span className="hd-menu__item-text">{t('pm.payment_method')}</span>
                                                </div>
                                          </li>
                                          <li className="{menu.menuBoxItem}">
                                                <div className="flex-row hd-menu__item">
                                                      <img src={icon.Clock_purple} alt="" />
                                                      <span className="hd-menu__item-text">{t('Header.my_order')}</span>
                                                </div>
                                          </li>
                                          <li className="{menu.menuBoxItem}">
                                                <div className="flex-row hd-menu__item">
                                                      <img src={icon.Ticket} alt="" />
                                                      <span className="hd-menu__item-text">{t('Header.my_codes')}</span>
                                                </div>
                                          </li>
                                          <li className="{menu.menuBoxItem}">
                                                <div className="flex-row hd-menu__item">
                                                      <img src={icon.Bell} alt="" />
                                                      <span className="hd-menu__item-text">{t('cart.noti')}</span>
                                                </div>
                                          </li>
                                    </>
                                    :
                                    ''
                        }
                        <li className="{menu.menuBoxItem}">
                              <div
                                    // onClick={() => setOpenSetting(!openSetting)}
                                    className='flex-row-sp hd-menu__item'
                              >
                                    <div className='flex-row'>
                                          <img src={icon.Setting} alt="" />
                                          <span className='hd-menu__item-text'>{t('Header.settings')}</span>
                                    </div>
                                    <img src={icon.down} alt="" />
                              </div>
                              <ul
                                    // style={openSetting === false ? { display: 'none' } : { display: 'block' }}
                                    className={'menu.menuSetting'}
                              >
                                    {/* <li className={menu.menuSettingItem}>
                                          <span>Nhận thông báo</span>
                                          <CheckNotification />
                                    </li>
                                    <li className={menu.menuSettingItem}>
                                          <span>Ngôn ngữ</span>
                                          <CheckNotification />
                                    </li> */}
                              </ul>
                        </li>
                        <li className=''>
                              <div className='flex-row hd-menu__item'>
                                    <img src={icon.Headphones_purple} alt="" />
                                    <span className='hd-menu__item-text'>{t('Header.support')}</span>
                              </div>
                        </li>
                  </ul>
                  {
                        profile ?
                              <div className="hd-menu-box__bot">
                                    <img src={icon.signOut} alt="" />
                                    <ButtonCus
                                          text={t('Header.sign_out')}
                                          color='var(--purple)'
                                          fontSize='14px'
                                          lineHeight='20px'
                                          paddingLeft='4px'
                                          onClick={handleSignOut}
                                    />
                              </div>
                              :
                              ''
                  }
            </div>
      );
}

export default Menu;