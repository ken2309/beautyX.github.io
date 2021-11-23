import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { Container } from '@mui/material';
import DetailCard from '../ProductDetail/components/DetailCard';
import { listServices } from '../../data/listService';
import { useLocation } from 'react-router-dom';
import orgApi from '../../api/organizationApi';
import DetailHead from '../ProductDetail/components/DetailHead';
import './ServiceDetail.css';

function ServiceDetail(props: any) {
      const [org, setOrg] = useState({})
      const location = useLocation();
      const url = location.search.slice(1, location.search.length);
      const param = JSON.parse(decodeURI(url))
      useEffect(() => {
            async function handleGetOrgById() {
                  try {
                        const resOrg = await orgApi.getOrgById(param.org)
                        setOrg(resOrg.data.context)
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetOrgById();
      }, [param.org])
      //service demo
      const service = listServices.find(item => item.id === param.id)
      return (
            <div className="product">
                  <Header />
                  <Container>
                        <div className="product-cnt">
                              <DetailHead
                                    product={service}
                                    org={org}
                                    listServices={listServices}
                              />
                              <DetailCard
                                    org={org}
                                    product={service}
                              />
                        </div>
                  </Container>
            </div>
      );
}

export default ServiceDetail;