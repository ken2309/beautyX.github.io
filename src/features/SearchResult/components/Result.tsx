import React from 'react';
import HomeFilter from '../../Home/components/HomeFilter';
import icon from '../../../constants/icon';
import '../../Home/Home.css';
import {useHistory} from 'react-router-dom';
import scrollTop from '../../../utils/scrollTop';
import {Pagination} from '@mui/material'

const serviceOfCardOrg=[
      {title:'Bãi đỗ xe', text:'100m2', icon: icon.car},
      {title:'Giường', text:'80', icon: icon.bed},
      {title:'Phòng', text:'190', icon: icon.door},
      {title:'Sức chứa', text:'106 người', icon: icon.car},
]

function Result(props:any) {
      const {
            keySearch,
            resultList,
            setChooseItem,
      } = props;
      const pageCount = (resultList.length / 3).toFixed()
      const history = useHistory();
      const handleChooseItem =(item:any)=>{
            setChooseItem(item);
      }
      const gotoDetail=(item:any)=>{
            history.push({
                  pathname: `/Merchant-detail/`,
                  search: `id=${item.id}`,
                  state: item
            })
            scrollTop();
      }
      const pageChange=()=>{
            
      }
      return (
            <div className='result-detail'>
                  <HomeFilter/>
                  <div className="result-detail__title">
                        <div className="result-detail__result">
                              <h3>"{keySearch}"</h3>
                              <span className="result-detail__result-total">
                                    có <span>212</span> kết quả tìm kiếm
                              </span>
                        </div>
                        <div className="result-detail__path">
                              <span>Trang chủ</span>
                              <img src={icon.Expand_right_2} alt="" />
                              <span>Tìm kiếm</span>
                              <img src={icon.Expand_right_2} alt="" />
                              <span>Tp. Hồ Chí Minh</span>
                              <img src={icon.Expand_right_2} alt="" />
                              <span>Quận 3</span>
                        </div>
                  </div>
                  <ul className="result-detail__org">
                        {
                              resultList.map((item:any) => (
                                    <li 
                                          onMouseEnter={()=>handleChooseItem(item)}
                                          onClick={()=> gotoDetail(item)}
                                          key={item.id}
                                    >
                                          <div className="result-item">
                                                <img
                                                      className="result-item__thumbnail"
                                                      src={"https://picsum.photos/650/976?random="+item.id}
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
                                                                  <span className="time">Đang mở cửa  09.00 - 21.00</span>
                                                            </div>
                                                      </div>
                                                      <ul className="org__service">
                                                            {
                                                                  serviceOfCardOrg.map((item, index) => (
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
                              ))
                        }
                  </ul>
                  <Pagination
                        color='secondary'
                        shape="rounded"
                        count={parseInt(pageCount)}
                        onChange={pageChange}
                  />
            </div>
      );
}

export default Result;