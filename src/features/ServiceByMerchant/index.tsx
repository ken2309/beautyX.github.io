import React from 'react';
import ServiceCate from './components/ServiceCate';
import ServiceList from './components/ServiceList'
import './ServiceByMerchant.css'

const tab_id = 2;
function ServiceByMerchant(props:any) {
      const { activeTab } = props;
      return (
            <div style={tab_id === activeTab ? { display: 'block' } : { display: 'none' }}>
                  <div
                        className="flex-row-sp ser-content"
                        style={{alignItems:'flex-start'}}
                  >
                        <ServiceCate />
                        <ServiceList />
                  </div>
            </div>

      );
}

export default ServiceByMerchant;