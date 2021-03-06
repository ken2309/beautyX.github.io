import React, { useContext } from 'react';
import { Slide, Dialog } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import MenuBox from '../../features/Head/components/MenuBox';
import LanguageBox from '../../features/Head/components/LanguageBox';
import './mbMenu.css';
import icon from '../../constants/icon';
import { AppContext } from '../../context/AppProvider';
import {useHistory} from 'react-router-dom'

const Transition = React.forwardRef(function Transition(
      props: TransitionProps & {
            children: React.ReactElement;
      },
      ref: React.Ref<unknown>,
) {
      return <Slide direction="left" ref={ref} {...props} />;
});

function MbMenu(props: any) {
      const history = useHistory();
      const { t, profile, userInfo, setSign } = useContext(AppContext)
      const { openMbMenu, setOpenMbMenu } = props;
      const onSignIn = () => {
            setOpenMbMenu(false)
            history.push({
                  pathname: '/sign-in', search: '1'
            })
      }
      const onSignUp = () => {
            setOpenMbMenu(false)
            history.push({
                  pathname: '/sign-up', search: '2'
            })
      }
      const handleSignOut = () => {
            setOpenMbMenu(false)
            setSign(false);
            const token = '';
            localStorage.setItem('_WEB_TK', token)
      }
      return (
            <Dialog
                  fullScreen
                  open={openMbMenu}
                  TransitionComponent={Transition}
            >
                  <div className="mb-hd-menu">
                        <div>
                              <div
                                    style={!profile ? { padding: '14px 24px' } : {}}
                                    className="mb-hd-menu__btn"
                              >
                                    {
                                          profile ?
                                                <span>{userInfo?.fullname}</span>
                                                :
                                                <div className="mb-hd-menu__btn-sign">
                                                      <span
                                                            onClick={onSignIn}
                                                      >
                                                            {t('Home.Sign_in')}
                                                      </span>
                                                      <span
                                                            onClick={onSignUp}
                                                      >
                                                            {t('Home.Sign_up')}
                                                      </span>
                                                </div>
                                    }
                                    <button onClick={() => setOpenMbMenu(false)} >
                                          <img src={icon.chevronRight} alt="" />
                                    </button>
                              </div>
                              <div className="mb-hd-menu__cnt">
                                    <MenuBox />
                                    <div className="flex-row-sp">
                                          <LanguageBox />
                                    </div>
                              </div>
                        </div>
                        <div className="mb-hd-menu__sign-out">
                              {
                                    profile ?
                                          <button
                                                onClick={handleSignOut}
                                          >
                                                {t('Header.sign_out')}
                                          </button>
                                          :
                                          ''
                              }
                        </div>
                  </div>
            </Dialog>
      );
}

export default MbMenu;