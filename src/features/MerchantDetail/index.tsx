import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import Header from '../Header/index';
import './MerchantDetail.css';
import {Container} from '@mui/material'
import DetailHead from './components/DetailHead';
import DetailMer from './components/DetailMer';

function MerchantDetail(props:any) {
      const location = useLocation();
      //const mer_id = location.search.slice(4, location.search.length);
      //console.log(location)
      const merDetail = location.state
      //console.log(merDetail)
      //---
      const [activeTab, setActiveTab] = useState(1);
      return (
            <div>
                  <Header />
                  <DetailHead
                        merDetail={merDetail}
                        setActiveTab={setActiveTab}
                        activeTab={activeTab}
                  />
                  <div style={{ backgroundColor: 'var(--bg-gray-dark)' }}>
                        <Container>
                              <DetailMer
                                    merDetail={merDetail}
                              />
                        </Container>
                  </div>
            </div>
      );
}

export default MerchantDetail;