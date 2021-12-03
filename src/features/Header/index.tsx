/* eslint-disable no-mixed-operators */
import React, {useState, useRef, useEffect, useContext} from 'react';
import {Container} from '@mui/material';
import {headerStyle} from './style';
import img from '../../constants/img';
import icon from '../../constants/icon';
import ButtonCus from '../../components/ButtonCus/index';
import Notification from './components/Notification';
import Menu from './components/Menu';
import {useHistory} from 'react-router-dom';
import SectionTitle from '../SectionTitle';
import Language from './components/Language';
import {getTotal} from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {AppContext} from '../../context/AppProvider'

const logged:boolean = true;
const notification = true;
const userInfo={
      userName:'Nguyen Thuy Binh',
      userAvatar: img.Avatar
}
function Header(props: any) {
      const { isCart, title } = props;
      const { t } = useContext(AppContext);
      const dispatch = useDispatch();
      const history = useHistory();
      const useStyle = headerStyle();
      const ref: any = useRef()
      const res = () => {
            console.log('Res')
      }
      const [openNo, setOpenNo] = useState(false);
      const [openMenu, setOpenMenu] = useState(false);
      const [openLang, setOpentLang] = useState(false);
      const openNoClick = () => {
            if (openNo === true) {
                  setOpenNo(false)
                  setOpenMenu(false)
                  setOpentLang(false)
            } else {
                  setOpenNo(true)
                  setOpenMenu(false)
                  setOpentLang(false)
            }
      }
      const openMenuClick = () => {
            if (openMenu === true) {
                  setOpenMenu(false)
                  setOpenNo(false)
                  setOpentLang(false)
            } else {
                  setOpenMenu(true)
                  setOpenNo(false)
                  setOpentLang(false)
            }
      }
      const gotoPartner=()=>{
            if(isCart){
                  history.goBack();
            }else{
                  history.push('/Partner');
            }
      }
      const gotoCart = () =>{
            history.push('/Cart');
      }
      const openLangClick = () => {
            if (openLang === true) {
                  setOpentLang(false)
                  setOpenMenu(false)
                  setOpenNo(false)
            } else {
                  setOpenMenu(false)
                  setOpenNo(false)
                  setOpentLang(true)
            }
      }
      
      useEffect(() => {
      const checkIfClickedOutside = (e:any) => {
            if (
                  openNo
                  || openMenu
                  || openLang
                  && ref.current 
                  && !ref.current.contains(e.target)) {
                  setOpentLang(false);
                  setOpenMenu(false);
                  setOpenNo(false);
                  console.log('ref',ref.current.contains(e.target));
            }
      }

      document.addEventListener("mousedown", checkIfClickedOutside)

      return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [openLang])
      //get total amount cart
      const carts = useSelector((state: any) => state.carts)
      useEffect(() => {
            dispatch(getTotal())
      }, [dispatch, carts])
      return (
            <div className={useStyle.header} ref={ref} >
                  <Container maxWidth="lg">
                        <div className={useStyle.headerContainer}>
                              <ButtonCus
                                    text={isCart ? 'Trở lại' : t('Header.1')}
                                    borderRadius='18px'
                                    lineHeight='20px'
                                    color='var(--purple)'
                                    border='solid 1px var(--purple)'
                                    onClick={gotoPartner}
                              // onClick={}
                              />
                              {
                                    isCart ?
                                          <SectionTitle
                                                title={title}
                                          />
                                          :
                                          <img
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => history.push('/')}
                                                src={icon.Logo} alt=""
                                          />
                              }
                              <div className={useStyle.headerRight}>
                                    <ul className={useStyle.headerRightList}>
                                          <li className={useStyle.headerRightItem}>
                                                {
                                                      logged === true ? ''
                                                            :
                                                            <ButtonCus
                                                                  text='Đăng ký'
                                                                  fontSize='14px'
                                                                  lineHeight='20px'
                                                                  color='var(--purple)'
                                                                  onClick={res}
                                                            />
                                                }
                                          </li>
                                          <li className={useStyle.headerRightItem}>
                                                {
                                                      logged === true ?
                                                            <span className={useStyle.headerUserName} onClick={()=> history.push('/tai-khoan')}>
                                                                  {userInfo.userName}
                                                            </span>
                                                            :
                                                            <ButtonCus
                                                                  text='Đăng nhập'
                                                                  color='var(--bg-gray)'
                                                                  fontSize='14px'
                                                                  lineHeight='20px'
                                                                  backColor='var(--purple)'
                                                                  borderRadius='18px'
                                                            />
                                                }
                                          </li>
                                          <li
                                                onClick={openNoClick}
                                                className={useStyle.headerRightItem}
                                          >
                                                <img
                                                      className={useStyle.headerAvatar}
                                                      src={logged === true ? userInfo.userAvatar : icon.Avatar} alt=""
                                                />
                                                {notification === true ? <div className={useStyle.headerDotNo}></div> : ''}
                                                <Notification
                                                      openNo={openNo}
                                                />
                                          </li>
                                          <li 
                                                onClick={gotoCart}
                                                className={useStyle.headerRightItem}
                                          >
                                                <img src={icon.ShoppingCartSimple} alt="" />
                                                <span className={useStyle.headerCartCount}>{carts.cartQuantity}</span>
                                          </li>
                                          <li className={useStyle.headerRightItem}>
                                                <img 
                                                      onClick={openMenuClick}
                                                      className={useStyle.menu} src={icon.Menu} alt="" 
                                                      />
                                                <Menu
                                                      openMenu={openMenu}
                                                />
                                          </li>
                                          <li className={useStyle.headerRightItem}></li>
                                    </ul>
                                    <Language
                                    openLang={openLang}
                                    openLangClick = {openLangClick}
                                    
                                    />
                              </div>
                        </div>
                  </Container>
            </div>
      );
}
    
export default Header;