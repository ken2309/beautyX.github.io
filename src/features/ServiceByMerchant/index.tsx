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
      const { activeTab, mer_id } = props;
      const [services, setServices] = useState<Service[]>([]);
      const [page, setPage] = useState(1)
      const [totalPage, setTotalPage] = useState(1)
      const [categories, setCategories] = useState([])
      const [chooseCate, setChooseCate] = useState();
      const [loading, setLoading] = useState(false)
      useEffect(() => {
            async function handleGetServices() {
                  setLoading(true)
                  try {
                        const res = await servicesApi.getByOrg_id({
                              org_id: mer_id,
                              page: page
                        });
                        setServices(res.data.context.data);
                        setTotalPage(res.data.context.last_page)
                        setLoading(false)
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetServices()
      }, [mer_id, page])
      useEffect(()=>{
            async function handleGetCategories(){
                  try{
                        const resCate = await categoryApi.getByOrgId_services({
                              org_id: mer_id
                        })
                        setCategories(resCate.data.context.data);
                  }catch(err){
                        console.log(err)
                  }
            }
            handleGetCategories()
      },[mer_id])
      console.log(chooseCate);
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
                        />
                        <ServiceList
                              loading={loading}
                              services={services}
                              t={t}
                              mer_id={mer_id}
                              totalPage={totalPage}
                              setPage={setPage}
                        />
                  </div>
            </div>

      );
}

export default ServiceByMerchant;