import React, { useEffect, useState } from 'react';
import icon from '../../../constants/icon';
import CardItem from '../../CardItem';
import {Pagination} from '@mui/material'
import useSearchTerm from '../../../utils/useSearchTerm';
import {Service} from '../../../interface/service';
import GridLoading from '../../Loading/GridLoading';
import scrollTop_2 from '../../../utils/scrollTop_2';

const cardStyle = {
      width: '100%'
}
interface ActiveFilter { id: number, title: string }
function ServiceList(props: any) {
      const { t, mer_id, org, services, totalPage, setPage, loading } = props;
      const buttons = [
            { id: 1, title: t('Mer_de.popular') },
            { id: 2, title: t('Mer_de.selling') },
            { id: 3, title: t('Mer_de.ascending_price') },
            { id: 4, title: t('Mer_de.decrease_price') }
      ]
      const [activeFilter, setActiveFilter] = useState<ActiveFilter>({id:0, title:''});
      const [serviceSort, setServiceSort] = useState<Service[]>([]);
      const [sort, setSort] = useState({
            _sortPrice: services
      })
      const [searchTerm, setSearchTerm] = useState('')
      const handleSearchOnChange = (e: any) => {
            setSearchTerm(e.target.value)
            setActiveFilter({id:0, title:''})
      }
      const serviceByFilter = useSearchTerm(searchTerm, services);
      useEffect(() => {
            function handleSort() {
                  setServiceSort(serviceByFilter)
            }
            handleSort()
      }, [sort, serviceByFilter, serviceSort])
      const ascPrice = () => {
            const asc = serviceByFilter.sort((a, b) => a.price - b.price)
            setSort({
                  ...sort,
                  _sortPrice: asc
            })
      }
      const descPrice = () => {
            const desc = serviceByFilter.sort((a, b) => b.price - a.price)
            setSort({
                  ...sort,
                  _sortPrice: desc
            })
      }
      const handleActiveFilter = (item: any) => {
            setActiveFilter(item);
            if (item.id === 1){
                  console.log('Phổ biến')
            }else if(item.id === 2){
                  console.log('Bán chạy')
            }else if(item.id === 3){
                  ascPrice();
            }else if(item.id === 4){
                  descPrice()
            }
      }
      //Add values is product: false
      const servicesIs = [];
      for (var item of serviceByFilter) {
            const service = { ...item, is_product: false};
            servicesIs.push(service);
      }
      const pageChange=(event:any, value:any)=>{
            setPage(value);
            scrollTop_2(500)
      }
      return (
            <div className='ser-list'>
                  <div className="flex-row-sp list-filter">
                        <div className="flex-row list-filter__left">
                              <span>Sắp xếp theo:</span>
                              {
                                    buttons.map(item => (
                                          <button
                                                style={activeFilter.id === item.id ?
                                                      { backgroundColor: 'var(--purple)', color: 'var(--bg-gray)' }
                                                      :
                                                      {}
                                                }
                                                onClick={() => handleActiveFilter(item)}
                                                key={item.id}
                                          >
                                                {item.title}
                                          </button>
                                    ))
                              }
                        </div>
                        <div className="flex-row list-filter__right">
                              <input 
                                    value={searchTerm}
                                    onChange={handleSearchOnChange}
                                    type="text" 
                                    placeholder={t('Mer_de.search_by_service')}
                              />
                              <button><img src={icon.search} alt="" /></button>
                        </div>
                  </div>
                  <div className="flex-column ser-list__content">
                        <ul className="ser-list__content-list">
                              {
                                    loading === true ?
                                          <GridLoading />
                                          :
                                          servicesIs.map((item: any) => (
                                                <li
                                                      key={item.id}
                                                      className="ser-list__content-list-item"
                                                >
                                                      <CardItem
                                                            org_id={mer_id}
                                                            org={org}
                                                            name={item.service_name}
                                                            retail_price={item.price}
                                                            special_price={item.special_price}
                                                            detail={item}
                                                            style={cardStyle}
                                                      />
                                                </li>
                                          ))
                              }
                        </ul>
                        <Pagination
                              color='secondary'
                              shape="rounded"
                              count={totalPage}
                              onChange={pageChange}
                        />
                  </div>
            </div>
      );
}

export default ServiceList;