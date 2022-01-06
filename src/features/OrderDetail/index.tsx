import React, { useEffect, useState } from 'react';
import './orderDetail.css';
import { useLocation } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {Order} from '../../interface/order';
import {IOrganization} from '../../interface/organization';
import ButtonCus from '../../components/ButtonCus';
import formatPrice from '../../utils/formatPrice';
import TabOrder from './components/TabOrder'

function OrderDetail() {
      const location = useLocation();
      const history = useHistory();
      const [org, setOrg] = useState<IOrganization>();
      const [order, setOrder] = useState<Order>();
      const [acTab, setAcTab] = useState();
      const [countItem, setCountItem] = useState();
      useEffect(()=>{
            if(location.state){
                  setOrder(location.state.order)
                  setOrg(location.state.org)
                  setCountItem(location.state.countItem)
            }else{
                  history.push('/tai-khoan/lich-su-mua')
            }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      return (
            <div className="order-de">
                  <div className="flex-row-sp order-de__head">
                        <span className="order-de__head-title">
                              Chi tiết đơn hàng
                        </span>
                        <div className="flex-row order-de__head-date">
                              <span className="flex-row date">Ngày Order: <h4>01-01-2000</h4></span>
                              <span className="flex-row time">Thời gian: <h4>20-00-00</h4></span>
                        </div>
                  </div>
                  <div className="order-de__count">
                        <span className="flex-row count">
                              Tổng : <h4>{formatPrice(order?.amount)} đ ({countItem} item)</h4>
                        </span>
                  </div>
                  <div className="flex-row order-de__org">
                        <img src={"https://picsum.photos/650/976?random=1" + org?.id} alt="" className="order-de__org-img" />
                        <div className="order-de__org-cnt">
                              <span className="name">{org?.name}</span>
                              <span className="address">{org?.full_address}</span>
                              <ButtonCus
                                    text='Xem doanh nghiệp'
                                    backColor='var(--purple)'
                                    padding='6px 8px'
                                    color='var(--bgWhite)'
                                    borderRadius='14px'
                                    width='fit-content'
                              />
                        </div>
                  </div>
                  <TabOrder
                        org={org}
                        order={order}
                        acTab={acTab}
                        setAcTab={setAcTab}
                  />
            </div>
      );
}

export default OrderDetail;