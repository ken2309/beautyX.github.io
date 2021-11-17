import React, {useState} from 'react';
import {Container} from '@mui/material';
import {headerStyle} from './style';
import img from '../../constants/img';
import icon from '../../constants/icon';
import ButtonCus from '../../components/ButtonCus/index';
import Notification from './components/Notification';
import Menu from './components/Menu';
import {useHistory} from 'react-router-dom'

const logged:boolean = true;
const notification = true;
const userInfo={
      userName:'Nguyen Thuy Binh',
      userAvatar: img.Avatar
}
function Header(props: any) {
      const history = useHistory();
      const useStyle = headerStyle();
      const res=()=>{
            console.log('Res')
      }
      const [openNo, setOpenNo] = useState(false);
      const [openMenu, setOpenMenu] = useState(false);
      const openNoClick = () => {
            if (openNo === true) {
                  setOpenNo(false)
            } else {
                  setOpenNo(true)
                  setOpenMenu(false)
            }
      }
      const openMenuClick = () => {
            if (openMenu === true) {
                  setOpenMenu(false)
                  setOpenNo(false)
            } else {
                  setOpenMenu(true)
                  setOpenNo(false)
            }
      }
      const gotoPartner=()=>{
            history.push('/Partner')
      }
      return (
            <div className={useStyle.header}>
                  <Container maxWidth="lg">
                        <div className={useStyle.headerContainer}>
                              <ButtonCus
                                    text='Trở thành đối tác'
                                    borderRadius='18px'
                                    lineHeight='20px'
                                    color='var(--purple)'
                                    border='solid 1px var(--purple)'
                                    onClick={gotoPartner}
                              />
                              <img
                                    style={{cursor:'pointer'}}
                                    onClick={()=>history.push('/')}
                                    src={img.Logo2} alt=""
                              />
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
                                          <li className={useStyle.headerRightItem}>
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
                        </div>
                  </Container>
            </div>
      );
}

export default Header;