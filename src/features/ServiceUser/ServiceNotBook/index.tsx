import React from 'react';
import myServices from '../../../data/listMyServices'
import ServiceItem from './ServiceItem';

function ServiceNotBook(props: any) {
      const { tab_id, orgAll, chooseOrg, setServicesBook, servicesBook } = props;
      return (
            <div
                  style={tab_id === 1 ? { display: 'block' } : { display: 'none' }}
            >
                  <div className="my-ser-book">
                        <ul className="my-ser-book__list">
                              {
                                    chooseOrg === 0 ?
                                          myServices.map((item, index) => (
                                                <ServiceItem
                                                      key={index}
                                                      service={item}
                                                      orgAll={orgAll}
                                                      servicesBook={servicesBook}
                                                      setServicesBook={setServicesBook}
                                                />
                                          ))
                                          :
                                          myServices.filter((item: any) => item.organization_id === chooseOrg)?.map((item: any, index: number) => (
                                                <ServiceItem
                                                      key={index}
                                                      service={item}
                                                      orgAll={orgAll}
                                                      servicesBook={servicesBook}
                                                      setServicesBook={setServicesBook}
                                                />
                                          ))
                              }
                        </ul>
                  </div>
            </div>
      );
}

export default ServiceNotBook;