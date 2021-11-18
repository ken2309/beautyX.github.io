import React, {useState, useEffect} from 'react';
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

const logged:boolean = true;
const notification = true;
const userInfo={
      userName:'Nguyen Thuy Binh',
      userAvatar: img.Avatar
}
function Header(props: any) {
      const {isCart} = props;
      const history = useHistory();
      const useStyle = headerStyle();
      const res=()=>{
            console.log('Res')
      }
      const [openNo, setOpenNo] = useState(false);
      const [openMenu, setOpenMenu] = useState(false);
      const [openLang, setOpentLang] = useState(false);
      const openNoClick = () => {
            if (openNo === true) {
                  setOpenNo(false)
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
      // if (openLang === true) {
      //       setOpenMenu(false)
      //       setOpenNo(false)
      //       setOpentLang(false)
      // } else {
      //       setOpentLang(true)
      //       setOpenMenu(false)
      //       setOpenNo(false)
      // }
      
      return (
            <div className={useStyle.header}>
                  <Container maxWidth="lg">
                        <div className={useStyle.headerContainer}>
                              <ButtonCus
                                    text={isCart ? 'Trở lại' : 'Trở thành đối tác'}
                                    borderRadius='18px'
                                    lineHeight='20px'
                                    color='var(--purple)'
                                    border='solid 1px var(--purple)'
                                    onClick={gotoPartner}
                                    // onClick={}
                              />
                              <img
                                    style={{cursor:'pointer'}}
                                    onClick={()=>history.push('/')}
                                    src={icon.Logo} alt=""
                              />
                              {
                                    isCart ?
                                          <SectionTitle
                                                title="Giỏ hàng"
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
                                                            <span className={useStyle.headerUserName}>
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
                                                onClick={()=> history.push("/Cart")}
                                                className={useStyle.headerRightItem}
                                          >
                                                <img src={icon.ShoppingCartSimple} alt="" />
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
                              </div>
                              <Language
                                    openLang={openLang}
                                    openLangClick = {openLangClick}
                              />
                        </div>
                  </Container>
            </div>
      );
}

export default Header;