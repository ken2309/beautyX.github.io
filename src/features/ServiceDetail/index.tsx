import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { Container } from '@mui/material';
import DetailCard from '../ProductDetail/components/DetailCard';
import { useLocation } from 'react-router-dom';
import orgApi from '../../api/organizationApi';
import serviceApi from '../../api/serviceApi';
import DetailHead from '../ProductDetail/components/DetailHead';
import RecommendList from './components/RecommendList';
import './ServiceDetail.css';
import {Service} from '../../interface/service'

function ServiceDetail(props: any) {
      const location = useLocation();
      const search = location.search.slice(1, location.search.length);
      const params = search.split(',');
      const is_type = parseInt(params[2])
      // console.log(is_type)
      const [org, setOrg] = useState({})
      const [service, setService] = useState({});
      const [services, setServices] = useState<Service[]>([])
      const [loading, setLoading] = useState(false);
      // const url = location.search.slice(1, location.search.length);
      // const param = JSON.parse(decodeURI(url))
      // console.log(param);
      useEffect(() => {
            async function handleGetOrgById() {
                  setLoading(true)
                  try {
                        const resSer = await serviceApi.getDetailById({
                              org_id: params[0], ser_id: params[1]
                        })
                        setService(resSer.data.context);
                        setLoading(false)
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetOrgById();
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [params[0], params[1]])
      useEffect(() => {
            async function handleGetOrg_Ser() {
                  try {
                        if (location.state) {
                              setOrg(location.state)
                        } else {
                              const resOrg = await orgApi.getOrgById(params[0])
                              setOrg(resOrg.data.context)
                        }
                        const resListSer = await serviceApi.getByOrg_id({ org_id: params[0], page: 1 });
                        setServices(resListSer.data.context.data);
                  } catch (err) { console.log(err) }
            }
            handleGetOrg_Ser()
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [params[0]])
      return (
            <div className="product">
                  <Header />
                  <Container>
                        <div className="product-cnt">
                              <DetailHead
                                    product={service}
                                    org={org}
                                    listServices={services}
                                    is_type={is_type}
                              />
                              <DetailCard
                                    org={org}
                                    product={service}
                                    is_type={is_type}
                                    loading={loading}
                              />
                        </div>
                        <RecommendList
                              org={org}
                              list={services}
                        />
                  </Container>
            </div>
      );
}

export default ServiceDetail;