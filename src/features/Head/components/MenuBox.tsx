import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppProvider';
import icon from '../../../constants/icon'

function MenuBox(props: any) {
      const { t, profile } = useContext(AppContext)
      return (
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
                              className='flex-row-sp hd-menu__item'
                        >
                              <div className='flex-row'>
                                    <img src={icon.Setting} alt="" />
                                    <span className='hd-menu__item-text'>{t('Header.settings')}</span>
                              </div>
                              <img src={icon.down} alt="" />
                        </div>
                  </li>
                  <li className=''>
                        <div className='flex-row hd-menu__item'>
                              <img src={icon.Headphones_purple} alt="" />
                              <span className='hd-menu__item-text'>{t('Header.support')}</span>
                        </div>
                  </li>
            </ul>
      );
}

export default MenuBox;