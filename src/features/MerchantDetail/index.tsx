import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import Header from '../Header/index';
import './MerchantDetail.css';
import {Container} from '@mui/material'
import DetailHead from './components/DetailHead';
import DetailMer from './components/DetailMer';
import DetailBranchList from './components/DetailBranchList';
import DetailSaleList from './components/DetailSaleList';
import ServiceByMerchant from '../ServiceByMerchant/index';
import ProductByMerchant from '../ProductByMerchant/index'
import Footer from '../Footer';

const id_tab = 1;
function MerchantDetail(props:any) {
      const location = useLocation();
      //const mer_id = location.search.slice(4, location.search.length);
      //console.log(location)
      const merDetail = location.state
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
                  <div style={{ backgroundColor: 'var(--bg-gray)', paddingBottom: '92px' }}>
                        <Container>
                              <div style={id_tab === activeTab ? { display: 'block' } : { display: 'none' }} >
                                    <DetailMer
                                          merDetail={merDetail}
                                    />
                                    <DetailBranchList/>
                                    <DetailSaleList
                                          merDetail={merDetail}
                                    />
                              </div>
                              <ServiceByMerchant
                                    activeTab={activeTab}
                              />
                              {/* <ProductByMerchant
                                    mer_id={mer_id}
                                    activeTab={activeTab}
                              /> */}
                        </Container>
                  </div>
                  <Footer />
            </div>
      );
}

export default MerchantDetail;