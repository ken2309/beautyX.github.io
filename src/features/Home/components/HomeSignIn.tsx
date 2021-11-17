import React, { useState } from 'react';
import ButtonCus from '../../../components/ButtonCus';
import SectionTitle from '../../SectionTitle';
import SignInUp from '../../poupSignInUp/index'

const title = 'Đăng ký tài khoản tại Myspa Booking Flatform \n để có trải nghiệm tốt nhất'
function HomeSignIn(props:any) {
      const [openSignIn, setOpenSignIn] = useState(false);
      const [activeTabSign, setActiveTabSign] = useState(1);
      const popupSignInClick=()=>{
            setOpenSignIn(true)
            setActiveTabSign(1)
      }
      const popupSignUpClick=()=>{
            setOpenSignIn(true);
            setActiveTabSign(2)
      }
      return (
            <div className="home-sign">
                  <SectionTitle
                        title={title}
                        textAlign='center'
                  />
                  <div className="home-sign-button">
                        <ButtonCus
                              onClick={popupSignInClick}
                              text="Đăng nhập"
                              backColor="var(--purple)"
                              color='var(--bg-gray)'
                              fontSize="20px"
                              lineHeight='24px'
                              margin='36px 12px'
                              borderRadius='20px'
                        />
                        <ButtonCus
                              onClick={popupSignUpClick}
                              text="Đăng ký"
                              color='var(--purple)'
                              fontSize="20px"
                              lineHeight='24px'
                              border='solid 1px var(--purple)'
                              margin='36px 12px'
                              borderRadius='20px'
                        />
                  </div>
                  <div className="home-sign">
                        <SignInUp
                              openSignIn={openSignIn}
                              setOpenSignIn={setOpenSignIn}
                              activeTabSign={activeTabSign}
                              setActiveTabSign={setActiveTabSign}
                        />
                  </div>
            </div>
      );
}

export default HomeSignIn;