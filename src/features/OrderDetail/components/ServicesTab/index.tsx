import React from 'react';
import ServiceItem from './ServiceItem';

function ServicesTab(props: any) {
      const { services, tab_id, org, open } = props;
      return (
            <div
                  style={tab_id === 2 ? { display: 'block' } : { display: 'none' }}
            >
                  <ul className="order-item-list">
                        {
                              services?.map((item: any, index: number) => (
                                    <ServiceItem
                                          open={open}
                                          key={index}
                                          serviceItem={item}
                                          org={org}
                                    />
                              ))
                        }
                  </ul>
            </div>
      );
}

export default ServicesTab;