import React, { useEffect, useState } from 'react';
import formatPrice from '../../../utils/formatPrice';
import icon from '../../../constants/icon';
import { IOrganization } from '../../../interface/organization';
import orgApi from '../../../api/organizationApi';

function OrderItem(props: any) {
      const { order } = props;
      const status = order.status;
      const countItem = order.items_product.length + order.items_service.length + order.items_treatment_combo.length
      const [org, setOrg] = useState<IOrganization>()
      useEffect(() => {
            async function getOrgById() {
                  try {
                        const response = await orgApi.getOrgById(order.organization_id)
                        setOrg(response.data.context)
                  } catch (error) {
                        console.log(error)
                  }
            }
            getOrgById()
      }, [order.organization_id])
      const checkStatus = (status: string) => {
            switch (status) {
                  case 'CANCELED':
                        return <span style={{ color: '#EE6955' }} className="status"><img src={icon.orderCancel} alt="" /> Đã hủy</span>;
                  case 'CANCELED_BY_USER':
                        return <span style={{ color: '#EE6955' }} className="status"><img src={icon.orderCancel} alt="" /> Đã hủy</span>;
                  case 'PENDING':
                        return <span style={{ color: '#F9D646' }} className="status"><img src={icon.orderPending} alt="" /> Đang xử lý</span>;
                  case 'PAID':
                        return <span style={{ color: '#7FC128' }} className="status"><img src={icon.orderFinish} alt="" /> Hoàn thành</span>;
                  default:
                        break
            }
      }

      return (
            <li>
                  <div className="order-item">
                        <img
                              className="order-item__img"
                              src={"https://picsum.photos/650/976?random=1" + order.id}
                              alt=""
                        />
                        <div className="order-item__cnt">
                              <div className="order-item__cnt-head">
                                    <span className="org-name">
                                          {org?.name}
                                    </span>
                                    <span className="org-address">
                                          {org?.full_address}
                                    </span>
                                    <div className="order-at">
                                          <span className="flex-row">Ngày:<h4>{order.created_at}</h4></span>
                                    </div>
                                    <div className="order-item__cnt-count">
                                          {countItem} (items)
                                    </div>
                              </div>
                              <div className="flex-row-sp order-item__cnt-bot">
                                    <span className="order-item__count">
                                          {formatPrice(order.amount)} đ
                                    </span>
                                    <div className="flex-row order-item__status">
                                          {checkStatus(status)}
                                          <button>
                                                Chi tiết
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </li>
      );
}

export default OrderItem;