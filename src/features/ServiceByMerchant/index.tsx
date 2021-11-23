import React from 'react';
import ServiceCate from './components/ServiceCate';
import ServiceList from './components/ServiceList';
import './ServiceByMerchant.css'

const tab_id = 2;
function ServiceByMerchant(props:any) {
      const { activeTab, mer_id } = props;
      return (
            <div style={tab_id === activeTab ? { display: 'block' } : { display: 'none' }}>
                  <div
                        className="flex-row-sp ser-content"
                        style={{alignItems:'flex-start'}}
                  >
                        <ServiceCate />
                        <ServiceList
                              mer_id={mer_id}
                        />
                  </div>
            </div>

      );
}

export default ServiceByMerchant;