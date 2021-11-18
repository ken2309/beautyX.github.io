import React from 'react';
import './popupSignInUp.css';
import img from '../../constants/img';
import icon from '../../constants/icon';
import { Slide, Dialog } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'

const Transition = React.forwardRef(function Transition(
      props: TransitionProps & {
            children: React.ReactElement<any, any>;
      },
      ref: React.Ref<unknown>,
) {
      return <Slide direction="up" ref={ref} {...props} />;
});
const buttons = [{ id: 1, title: 'Đăng nhập' }, { id: 2, title: 'Đăng ký' }]
function SignInUp(props: any) {
      const {
            openSignIn, setOpenSignIn,
            activeTabSign, setActiveTabSign
      } = props;
      const handleClose = () => {
            setOpenSignIn(false)
      }
      const chooseTab=(id:any)=>{
            setActiveTabSign(id)
      }
      return (
            <Dialog
                  open={openSignIn}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
            >
                  <div className="flex-row-sp sign-content">
                        <div
                              className="flex-column sign-content__left"
                              style={{ justifyContent: 'center' }}
                        >
                              <img className="sign-content__left-logo" src={icon.Logo} alt="" />
                              <img className="sign-content__left-partner" src={img.Partner} alt="" />
                        </div>
                        <div className="sign-content__right">
                              <div className="sign-content__right-tab">
                                    {
                                          buttons.map(item => (
                                                <button
                                                      onClick={() => chooseTab(item.id)}
                                                      style={
                                                            item.id === activeTabSign ?
                                                                  { color: 'var(--purple)', borderBottom: 'solid 1px var(--purple)' }
                                                                  :
                                                                  {}
                                                      }
                                                      key={item.id}
                                                >
                                                      {item.title}
                                                </button>
                                          ))
                                    }
                              </div>
                              <SignIn
                                    activeTabSign={activeTabSign}
                                    setActiveTabSign={setActiveTabSign}
                              />
                              <SignUp
                                    activeTabSign={activeTabSign}
                              />
                        </div>
                  </div>
            </Dialog>
      );
}

export default SignInUp;