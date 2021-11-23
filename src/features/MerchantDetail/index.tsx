import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import Header from '../Header/index';
import './MerchantDetail.css';
import {Container} from '@mui/material'
import DetailHead from './components/DetailHead';
import DetailMer from './components/DetailMer';
import DetailBranchList from './components/DetailBranchList';
import DetailSaleList from './components/DetailSaleList';
import ServiceByMerchant from '../ServiceByMerchant/index';
import ProductByMerchant from '../ProductByMerchant/index';
import Footer from '../Footer';
import orgApi from '../../api/organizationApi';

const id_tab = 1;
function MerchantDetail(props:any) {
      const location = useLocation();
      const mer_id = location.search.slice(4, location.search.length);
      const [org, setOrg] = useState({})
      //console.log(location)
      //---
      const [activeTab, setActiveTab] = useState(1);
      useEffect(()=>{
            async function handleGetOrgById(){
                  try{
                        const res = await orgApi.getOrgById(mer_id);
                        setOrg(res.data.context);
                  }catch(err){
                        console.log(err)
                  }
            }
            handleGetOrgById()
      },[mer_id])
      return (
            <div>
                  <Header />
                  <DetailHead
                        merDetail={org}
                        setActiveTab={setActiveTab}
                        activeTab={activeTab}
                  />
                  <div style={{ backgroundColor: 'var(--bg-gray)', paddingBottom: '92px' }}>
                        <Container>
                              <div style={id_tab === activeTab ? { display: 'block' } : { display: 'none' }} >
                                    <DetailMer
                                          merDetail={org}
                                    />
                                    <DetailBranchList
                                          mer_id={mer_id}
                                          org={org}
                                    />
                                    <DetailSaleList
                                          merDetail={org}
                                    />
                              </div>
                              <ServiceByMerchant
                                    activeTab={activeTab}
                                    mer_id = {mer_id}
                              />
                              <ProductByMerchant
                                    mer_id={mer_id}
                                    activeTab={activeTab}
                              />
                        </Container>
                  </div>
                  <Footer />
            </div>
      );
}

export default MerchantDetail;