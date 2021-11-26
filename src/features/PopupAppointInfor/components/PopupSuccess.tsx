import React, {useContext} from 'react';
import { Dialog } from '@mui/material';
import icon from '../../../constants/icon';
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../../context/AppProvider';

function PopupSuccess(props: any) {
      const { t } = useContext(AppContext);
      const history = useHistory();
      const { popup, setPopup } = props;
      const goto = () => {
            setPopup(true)
            history.push('/')
      }
      return (
            <Dialog
                  open={popup}
            >
                  <div className="flex-column ap-pu-cnt">
                        <img src={icon.success} alt="" />
                        <span className="ap-pu-cnt__title">
                              {t('booking.success')}
                        </span>
                        <div className="ap-pu-cnt__text">
                              {t('booking.review')}
                              <span
                                    onClick={goto}
                              >
                                    {t('booking.here')}
                              </span>
                        </div>
                  </div>
            </Dialog>
      );
}

export default PopupSuccess;