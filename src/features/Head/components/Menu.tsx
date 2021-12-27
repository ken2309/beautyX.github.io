import React, { useContext } from 'react';
import icon from '../../../constants/icon';
import ButtonCus from '../../../components/ButtonCus';
import {AppContext} from '../../../context/AppProvider';
import MenuBox from './MenuBox';

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
                  <MenuBox/>
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