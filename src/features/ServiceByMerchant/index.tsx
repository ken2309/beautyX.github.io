import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppProvider';
import ServiceCate from './components/ServiceCate';
import ServiceList from './components/ServiceList';
import servicesApi from '../../api/serviceApi';
import {Service} from '../../interface/service';
import categoryApi from '../../api/categoryApi'
import './ServiceByMerchant.css'

const tab_id = 2;
function ServiceByMerchant(props: any) {
      const { t } = useContext(AppContext);
      const { activeTab, mer_id, org } = props;
      const [services, setServices] = useState<Service[]>([]);
      const [page, setPage] = useState(1)
      const [totalPage, setTotalPage] = useState(1)
      const [categories, setCategories] = useState([])
      const [chooseCate, setChooseCate] = useState();
      const [loading, setLoading] = useState(false)
      const [loading_cate, setLoading_cate] = useState(false);
      useEffect(() => {
            async function handleGetServices() {
                  setLoading(true)
                  try {
                        if (!chooseCate) {
                              const res = await servicesApi.getByOrg_id({
                                    org_id: mer_id,
                                    page: page
                              });
                              setServices(res.data.context.data);
                              setTotalPage(res.data.context.last_page)
                        } else {
                              const resByCate = await servicesApi.getByOrgId_cateId({
                                    cate_id: chooseCate, page: page, org_id: mer_id,
                              })
                              setServices(resByCate.data.context.data);
                              setTotalPage(resByCate.data.context.last_page)
                        }
                        setLoading(false)
                  } catch (err) {
                        console.log(err)
                  }
            }
            if (tab_id === activeTab) {
                  handleGetServices()
            }
      }, [mer_id, page, chooseCate, activeTab])
      useEffect(() => {
            setLoading_cate(true)
            async function handleGetCategories() {
                  try {
                        const resCate = await categoryApi.getByOrgId_services({
                              org_id: mer_id
                        })
                        setCategories(resCate.data.context.data);
                        setLoading_cate(false)
                  } catch (err) {
                        console.log(err)
                  }
            }
            if (tab_id === activeTab) {
                  handleGetCategories()
            }
      }, [activeTab, mer_id])
      return (
            <div style={tab_id === activeTab ? { display: 'block' } : { display: 'none' }}>
                  <div
                        className="flex-row-sp ser-content"
                        style={{ alignItems: 'flex-start' }}
                  >
                        <ServiceCate
                              t={t}
                              categories={categories}
                              setChooseCate={setChooseCate}
                              setPage={setPage}
                              loading_cate={loading_cate}
                        />
                        <ServiceList
                              loading={loading}
                              services={services}
                              t={t}
                              mer_id={mer_id}
                              org={org}
                              totalPage={totalPage}
                              setPage={setPage}
                        />
                  </div>
            </div>

      );
}

export default ServiceByMerchant;