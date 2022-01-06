import React, { useEffect, useState } from 'react';
import { Service } from '../../../../interface/service';
import serviceApi from '../../../../api/serviceApi';
import ButtonCus from '../../../../components/ButtonCus';
import formatPrice from '../../../../utils/formatPrice'

function ServiceItem(props: any) {
      const { serviceItem, org } = props;
      const [service, setService] = useState<Service>()
      useEffect(() => {
            async function handleGetSerDetail() {
                  try {
                        const res = await serviceApi.getDetailById({
                              org_id: org.id,
                              ser_id: serviceItem.productable_id
                        })
                        setService(res.data.context)
                  } catch (error) {
                        console.log(error)
                  }
            }
            handleGetSerDetail()
      }, [org.id, serviceItem.productable_id])
      return (
            <li>
                  <div className="order-de-list__item">
                        <img
                              src={"https://picsum.photos/650/976?random=1" + service?.id}
                              alt=""
                              className="order-de-pr-item__img"
                        />
                        <div className="order-de-pr-item__cnt">
                              <div className="item-detail">
                                    <span className="flex-row-sp item-name">
                                          {service?.service_name}
                                          <span>
                                                x {serviceItem.quantity}
                                          </span>
                                    </span>
                                    <span className="item-org__name">
                                          {org.name}
                                    </span>
                              </div>
                              <div className="flex-row-sp item-bottom">
                                    <span className="price">
                                          {formatPrice(service?.price)} đ
                                    </span>
                                    <div className="flex-row item-button">
                                          <ButtonCus
                                                text='Xem thông tin'
                                                padding='4px 8px'
                                                color='var(--purple)'
                                                backColor='var(--bgGray)'
                                                borderRadius='12px'
                                                margin='0px 16px 0px 0px'
                                          />
                                          <ButtonCus
                                                text='Pre-Order'
                                                padding='4px 8px'
                                                color='var(--bgWhite)'
                                                backColor='var(--purple)'
                                                borderRadius='12px'
                                          />
                                    </div>
                              </div>
                        </div>
                  </div>
            </li>
      );
}

export default ServiceItem;