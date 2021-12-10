import React, { useContext, useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import Head from '../Head/index';
import './MerchantDetail.css';
import {Container} from '@mui/material'
import DetailHead from './components/DetailHead';
import DetailMer from './components/DetailMer';
import DetailBranchList from './components/DetailBranchList';
import DetailSaleList from './components/DetailSaleList';
import ServiceByMerchant from '../ServiceByMerchant/index';
import ProductByMerchant from '../ProductByMerchant/index';
import ComboByMerchant from '../ComboByMerchant/index';
import Footer from '../Footer';
import orgApi from '../../api/organizationApi';
import {AppContext} from '../../context/AppProvider';

const id_tab = 1;
function MerchantDetail(props: any) {
      const { t } = useContext(AppContext)
      const location = useLocation();
      const mer_id = location.search.slice(1, location.search.length);
      const [loading, setLoading] = useState(false);
      //console.log(mer_id)
      const [org, setOrg] = useState({})
      //console.log(location)
      //---
      const [activeTab, setActiveTab] = useState(1);
      useEffect(() => {
            async function handleGetOrgById() {
                  setLoading(true);
                  if (location.state) {
                        setOrg(location.state)
                        setLoading(false);
                  } else {
                        try {
                              const res = await orgApi.getOrgById(mer_id);
                              setOrg(res.data.context);
                              setLoading(false);
                        } catch (err) {
                              console.log(err)
                        }
                  }
            }
            handleGetOrgById()
      }, [location.state, mer_id])
      // console.log(org);
      return (
            <div>
                  <Head/>
                  <DetailHead
                        t={t}
                        loading={loading}
                        merDetail={org}
                        setActiveTab={setActiveTab}
                        activeTab={activeTab}
                  />
                  <div style={{ backgroundColor: 'var(--bg-gray)', paddingBottom: '92px' }}>
                        <Container>
                              <div style={id_tab === activeTab ? { display: 'block' } : { display: 'none' }} >
                                    <DetailMer
                                          t={t}
                                          merDetail={org}
                                    />
                                    <DetailBranchList
                                          t={t}
                                          mer_id={mer_id}
                                          org={org}
                                    />
                                    <DetailSaleList
                                          t={t}
                                          merDetail={org}
                                    />
                              </div>
                              <ServiceByMerchant
                                    activeTab={activeTab}
                                    mer_id={mer_id}
                                    org={org}
                              />
                              <ProductByMerchant
                                    mer_id={mer_id}
                                    activeTab={activeTab}
                                    org={org}
                              />
                              <ComboByMerchant
                                    org={org}
                                    org_id={mer_id}
                                    activeTab={activeTab}
                              />
                        </Container>
                  </div>
                  <Footer />
            </div>
      );
}

export default MerchantDetail;