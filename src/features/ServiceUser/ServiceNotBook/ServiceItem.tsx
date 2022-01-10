import React, { useContext } from 'react';
import icon from '../../../constants/icon';
import {AppContext} from '../../../context/AppProvider'

function ServiceItem(props: any) {
      const {t} = useContext(AppContext)
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
                                                <span>{t('my_ser.count_unused')}</span>
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
                                                                  {t('my_ser.selected')}
                                                            </span>
                                                            <button
                                                                  onClick={handleCancelServices}
                                                                  style={{ backgroundColor: 'var(--red-cl)' }}
                                                            >
                                                                  {t('cart.cancel')}
                                                            </button>
                                                      </>
                                                      :
                                                      <button
                                                            onClick={handleServiceBook}
                                                      >
                                                            {t('my_ser.choose')}
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