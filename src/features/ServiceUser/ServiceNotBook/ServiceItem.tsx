import React from 'react';
import icon from '../../../constants/icon';

function ServiceItem(props: any) {
      const { service, orgAll, servicesBook, setServicesBook } = props;
      const org = orgAll.find((item:any)=> item.id === service.organization_id)
      const handleServiceBook=()=>{
            setServicesBook((prev:any) => [...prev, service])
      }
      const handleCancelServices = () => {
            setServicesBook(servicesBook.filter((item: any) => item !== service))
      }
      return (
            <li
                  key={service.id}
            >
                  <div className="my-ser-book__list-item">
                        <img
                              className="order-item__img"
                              src={"https://picsum.photos/650/976?random=1" + service.id}
                              alt=""
                        />
                        <div className="__list-item__cnt">
                              <div className="top">
                                    <span className="name">
                                          {service.service_name}
                                    </span>
                                    <span className="org-name">
                                          {org?.name}
                                    </span>
                                    <div className="flex-row quantity">
                                          <img src={icon.DeskAlt} alt="" />
                                          <div className="quantity-text">
                                                <span>Số lượng gói chưa dùng</span>
                                                <span>2/3</span>
                                          </div>
                                    </div>
                              </div>
                              <div className="flex-row-sp bottom">
                                    <span className="bottom-price">
                                          {service.price}đ
                                    </span>
                                    <div className="flex-row bottom-btn">
                                          {
                                                servicesBook.includes(service) === true ?
                                                      <>
                                                            <span className="flex-row">
                                                                  <img src={icon.checkGreen} alt="" />
                                                                  Đã chọn
                                                            </span>
                                                            <button
                                                                  onClick={handleCancelServices}
                                                                  style={{ backgroundColor: 'var(--red-cl)' }}
                                                            >
                                                                  Bỏ chọn
                                                            </button>
                                                      </>
                                                      :
                                                      <button
                                                            onClick={handleServiceBook}
                                                      >
                                                            Chọn dịch vụ
                                                      </button>
                                          }
                                    </div>
                              </div>
                        </div>
                  </div>
            </li>
      );
}

export default ServiceItem;