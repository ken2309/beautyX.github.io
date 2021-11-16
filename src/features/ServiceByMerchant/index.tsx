import React from 'react';

const tab_id = 2;
function ServiceByMerchant(props:any) {
      const {activeTab} = props;
      return (
            <div style={tab_id === activeTab ? { display: 'block' } : { display: 'none' }}>
                  ServiceByMerchant
            </div>
      );
}

export default ServiceByMerchant;