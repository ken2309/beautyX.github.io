import React, { useContext, useState } from 'react';
import './Bottom.css';
import icon from '../../constants/icon';
import {useHistory} from 'react-router-dom';
import SearchFilter from '../SearchResult/SearchFilter';
import { AppContext } from '../../context/AppProvider';
import scrollTop from '../../utils/scrollTop';

function Bottom(props: any) {
      const {t} = useContext(AppContext)
      const Btns = [
            {
                  id: 2,
                  title: t('Bottom.appointment'),
                  icon: icon.Calendar,
                  path: '/Calendar',
                  is_badge: false,
            },
            {
                  id: 3,
                  title: t('cart.noti'),
                  icon: icon.Bell,
                  path: '/Notifications',
                  is_badge: true,
            },
            {
                  id: 1,
                  title: t('Bottom.home'),
                  icon: icon.home,
                  path: '/',
                  is_badge: false,
            },
            {
                  id: 4,
                  title: t('Bottom.account'),
                  icon: icon.User,
                  path: '/tai-khoan',
                  is_badge: false,
            },
      ]
      const [acBtn, setAcBtn] = useState(1);
      const [openFilter, setOpenFilter] = useState(false);
      const history = useHistory();
      const chooseBtn = (item: any) => {
            scrollTop();
            setAcBtn(item.id)
            history.push(`${item.path}`)
      }
      return (
            <div className='bt'>
                  <div className="flex-row-sp bt-cnt">
                        {
                              Btns.map(item => (
                                    <div
                                          key={item.id}
                                          onClick={() => chooseBtn(item)}
                                          className="flex-column bt-cnt__item"
                                    >
                                          <img src={item.icon} alt="" />
                                          {
                                                item.is_badge === true ?
                                                      <span className="bt-cnt__item-badge">
                                                            7
                                                      </span>
                                                      :
                                                      <></>
                                          }
                                          <span
                                                style={item.id === acBtn ? { color: 'var(--purple)', fontWeight:'700' } : {}}
                                                className="bt-cnt__item-title"
                                          >
                                                {item.title}
                                          </span>
                                    </div>
                              ))
                        }
                        <div
                              onClick={() => setOpenFilter(true)}
                              className="flex-column bt-cnt__item"
                        >
                              <img src={icon.searchPurple} alt="" />
                              <span
                                    className="bt-cnt__item-title"
                              >
                                    {t('Bottom.search')}
                              </span>
                        </div>
                  </div>
                  <SearchFilter
                        openFilter={openFilter}
                        setOpenFilter={setOpenFilter}
                  />
            </div>
      );
}

export default Bottom;