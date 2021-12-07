import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import scrollTop from '../../../utils/scrollTop';
import slugify from '../../../utils/formatUrlString';
import icon from '../../../constants/icon';
import {AppContext} from '../../../context/AppProvider'

function ResultItem(props: any) {
      const { item, setChooseItem, serviceOfCardOrg } = props;
      const {t} = useContext(AppContext)
      const history = useHistory();
      const handleChooseItem=()=>{
            if(setChooseItem){
                  setChooseItem(item)
            }
      }
      const gotoDetail = () => {
            history.push({
                  pathname: `/Merchant-detail/${slugify(item.name)}`,
                  search: `${item.id}`,
                  state: item
            })
            scrollTop();
      }
      return (
            <li
                  onMouseEnter={handleChooseItem}
                  onClick={gotoDetail}
            >
                  <div className="result-item">
                        <img
                              className="result-item__thumbnail"
                              src={"https://picsum.photos/650/976?random=" + item.id}
                              alt=""
                        />
                        <div className="result-item__detail">
                              <div className="org__detail">
                                    <div className="result-item__detail-header">
                                          <span className="org-name">{item.name}</span>
                                          <div className="detail-header__rate">
                                                <span>4.5</span>
                                                <img style={{ marginRight: '8px' }} src={icon.star} alt="" />
                                                <span>500</span>
                                                <img src={icon.chatAll} alt="" />
                                          </div>
                                    </div>
                                    <div
                                          className="result-item__detail-address"
                                    >
                                          <img src={icon.location} alt="" />
                                          <span>{item.full_address}</span>
                                    </div>
                                    <div className="result-item__detail-address">
                                          <img src={icon.time} alt="" />
                                          <span className="time">{t('Search_result.opening')}  09.00 - 21.00</span>
                                    </div>
                              </div>
                              <ul className="org__service">
                                    {
                                          serviceOfCardOrg.map((item:any, index:number) => (
                                                <li key={index} className="org__service-item">
                                                      <img src={item.icon} alt="" />
                                                      <span>
                                                            <h4>{item.title}</h4>
                                                            <p>{item.text}</p>
                                                      </span>
                                                </li>
                                          ))
                                    }
                              </ul>
                        </div>
                  </div>
            </li>
      );
}

export default ResultItem;