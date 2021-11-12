import React from 'react';
import Title from './Title';
import ButtonCus from '../../../components/ButtonCus';

const title = 'Đăng ký tài khoản tại Myspa Booking Flatform \n để có trải nghiệm tốt nhất'
function HomeSignIn(props:any) {
      const popupSignInClick=()=>{
            console.log('sign in')
      }
      const popupSignUpClick=()=>{
            console.log('sign up')
      }
      return (
            <div className="home-sign">
                  <Title
                        title={title}
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
            </div>
      );
}

export default HomeSignIn;