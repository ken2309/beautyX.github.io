import React from 'react';
import { Dialog } from '@mui/material';
import icon from '../../../constants/icon';
import ButtonCus from '../../../components/ButtonCus';
import { useHistory } from 'react-router-dom'

function PopupNoti(props: any) {
      const { popup, setPopup, isSignIn, title } = props;
      const history = useHistory();
      const later = () => {
            setPopup(false)
      }
      const gotoPageSignIn = () => {
            if (isSignIn === true) {
                  history.push({ pathname: '/sign-up', search: '2' })
            } else {
                  history.push({ pathname: '/sign-in', search: '1' })
            }
      }
      return (
            <Dialog
                  open={popup}
                  onClose={() => setPopup(false)}
            >
                  <div className="flex-column sign-up-noti">
                        <img
                              style={isSignIn ? { display: 'none' } : {}}
                              className="sign-up-noti__check"
                              src={icon.success} alt=""
                        />
                        <span>
                              {isSignIn === true ? title : 'Đăng ký tài khoản thành công'}
                        </span>
                        <div className="flex-row-sp sign-up-noti__btn">
                              <ButtonCus
                                    border="solid 1px var(--purple)"
                                    margin="0px 8px"
                                    borderRadius="16px"
                                    text={isSignIn === true ? 'Đăng ký ngay' : 'Đăng ký ngay'}
                                    backColor="var(--purple)"
                                    color="var(--bgWhite)"
                                    onClick={gotoPageSignIn}
                              />
                              <ButtonCus
                                    border="solid 1px var(--purple)"
                                    margin="0px 8px"
                                    borderRadius="16px"
                                    text="Để sau"
                                    backColor="var(--bgWhite)"
                                    color="var(--purple)"
                                    onClick={later}
                              />
                        </div>
                  </div>
            </Dialog>
      );
}

export default PopupNoti;