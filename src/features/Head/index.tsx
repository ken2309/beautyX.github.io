import React, { useContext, useState, useEffect } from 'react';
import './Head.css';
import { Container } from '@mui/material';
import ButtonCus from '../../components/ButtonCus'
import { AppContext } from '../../context/AppProvider';
import { useHistory } from 'react-router-dom';
import icon from '../../constants/icon';
import img from '../../constants/img';
import Notification from './components/Notification';
import Language from './components/Language';
import Menu from './components/Menu';
import SectionTitle from '../SectionTitle';
import { useSelector, useDispatch } from 'react-redux';
import { getTotal } from '../../redux/cartSlice';
import MbMenu from '../../featuresMobile/Menu';

function Head(props: any) {
      const { t, profile, userInfo } = useContext(AppContext)
      const { isCart, title } = props;
      const dispatch = useDispatch();
      const [openNo, setOpenNo] = useState(false)
      const [openLang, setOpenLang] = useState(false);
      const [openMenu, setOpenMenu] = useState(false);
      const [openMbMenu, setOpenMbMenu] = useState(false);
      const [unit, setUnit] = useState('VND')
      const history = useHistory()

      //get total amount cart
      const carts = useSelector((state: any) => state.carts)
      useEffect(() => {
            dispatch(getTotal())
      }, [dispatch, carts])
      const gotoPartner = () => {
            if (isCart) {
                  history.goBack();
            } else {
                  history.push('/Partner');
            }
      }
      const gotoPageSignUp = () => {
            history.push({
                  pathname: '/sign-up', search: '2'
            })
      }
      const gotoPageSignIn = () => {
            history.push({
                  pathname: '/sign-in', search: '1'
            })
      }
      const openNotiClick=()=>{
            setOpenNo(!openNo);
            setOpenLang(false)
            setOpenMenu(false)
      }
      const openLangClick=()=>{
            setOpenLang(!openLang)
            setOpenNo(false)
            setOpenMenu(false)
      }
      const openMenuClick=()=>{
            setOpenMenu(!openMenu)
            setOpenLang(false)
            setOpenNo(false)
      }
      return (
            <div className="hd">
                  <Container>
                        <div className="flex-row-sp hd-cnt">
                              <div className="hd-logo">
                                    {
                                          isCart ?
                                                <SectionTitle
                                                      title={title}
                                                />
                                                :
                                                <img
                                                      onClick={() => history.push('/')}
                                                      src={img.beautyX}
                                                      alt=""
                                                />
                                    }
                              </div>
                              <div className="hd-cnt__left">
                                    <ButtonCus
                                          text={isCart ? t('Header.back') : t('Header.1')}
                                          borderRadius='18px'
                                          lineHeight='20px'
                                          color='var(--purple)'
                                          border='solid 1px var(--purple)'
                                          onClick={gotoPartner}
                                    />
                              </div>
                              <div
                                    style={profile ? { justifyContent: 'space-between' } : { justifyContent: 'flex-end' }}
                                    className="flex-row hd-cnt__right"
                              >
                                    {
                                          !profile ?
                                                <>
                                                      <div className="flex-row hd-cnt__sign-btn">
                                                            <ButtonCus
                                                                  text={t('Home.Sign_up')}
                                                                  fontSize='14px'
                                                                  lineHeight='20px'
                                                                  color='var(--purple)'
                                                                  onClick={gotoPageSignUp}
                                                            />
                                                            <ButtonCus
                                                                  text={t('Home.Sign_in')}
                                                                  color='var(--bg-gray)'
                                                                  fontSize='14px'
                                                                  lineHeight='20px'
                                                                  backColor='var(--purple)'
                                                                  borderRadius='18px'
                                                                  onClick={gotoPageSignIn}
                                                            />
                                                            <img className="hd-cnt__right-avatar" src={icon.userCircle} alt="" />
                                                      </div>
                                                </>
                                                :
                                                <div className="flex-row hd-cnt__right-user">
                                                      <span className="hd-cnt__right-user-name">
                                                            {userInfo?.fullname}
                                                      </span>
                                                      <div className="hd-cnt__right-avatar">
                                                            <img onClick={openNotiClick} src={img.Avatar} alt="" />
                                                            <div className="hd-cnt__right-avatar-dot"></div>
                                                            <Notification
                                                                  openNo={openNo}
                                                            />
                                                      </div>
                                                </div>
                                    }
                                    {/* menu for mobile */}
                                    <div className="mb-hd-cnt__right">
                                          <div className="flex-row">
                                                <div
                                                      onClick={() => history.push('/Cart')}
                                                      className="hd-cnt__right-cart"
                                                >
                                                      <img src={icon.ShoppingCartSimpleWhite} alt="" />
                                                      <div className="hd-cnt__right-cart-total">
                                                            {carts.cartQuantity}
                                                      </div>
                                                </div>
                                                <img
                                                      onClick={() => setOpenMbMenu(true)}
                                                      src={icon.menuWhite} alt=""
                                                />
                                          </div>
                                    </div>
                                    <MbMenu
                                          openMbMenu={openMbMenu}
                                          setOpenMbMenu={setOpenMbMenu}
                                    />
                                    {/* --- */}
                                    <div 
                                          onClick={()=>history.push('/Cart')}
                                          className="hd-cnt__right-cart"
                                    >
                                          <img src={icon.ShoppingCartSimple} alt="" />
                                          <div className="hd-cnt__right-cart-total">
                                                {carts.cartQuantity}
                                          </div>
                                    </div>
                                    <div className="hd-cnt__right-menu">
                                          <img 
                                                onClick={openMenuClick}
                                                src={icon.Menu} 
                                                alt="" 
                                          />
                                          <Menu
                                                profile={profile}
                                                openMenu={openMenu}
                                                setOpenMenu={setOpenMenu}
                                          />
                                    </div>
                                    <div onClick={openLangClick} className="hd-cnt__right-lang">
                                          <div className="flex-row">
                                                <img src={icon.Money} alt="" />
                                                {unit}
                                          </div>
                                          <Language
                                                openLang={openLang}
                                                unit={unit}
                                                setUnit={setUnit}
                                                setOpenLang={setOpenLang}
                                          />
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
}

export default Head;