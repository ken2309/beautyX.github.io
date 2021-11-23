import React, { useEffect, useState } from 'react';
import icon from '../../../constants/icon';
import {listServices} from '../../../data/listService';
import CardItem from '../../CardItem';
import ButtonCus from '../../../components/ButtonCus';
import useSearchTerm from '../../../utils/useSearchTerm'

const buttons = [
      { id: 1, title: 'Phổ biến' },
      { id: 2, title: 'Bán chạy' },
      { id: 3, title: 'Giá thấp' },
      { id: 4, title: 'Giá cao' }
]
const cardStyle = {
      width: '100%'
}
interface Services {
      id: number, product_name: string, is_product: boolean, retail_price: number, special_price: number
}
function ServiceList(props: any) {
      const { mer_id } = props;
      const [activeFilter, setActiveFilter] = useState();
      const [serviceSort, setServiceSort] = useState<Services[]>([]);
      const [sort, setSort] = useState({
            _sortPrice: listServices
      })
      const [searchTerm, setSearchTerm] = useState('')
      const handleSearchOnChange = (e: any) => {
            setSearchTerm(e.target.value)
            setActiveFilter(undefined)
      }
      const serviceByFilter = useSearchTerm(searchTerm, listServices);
      useEffect(() => {
            function handleSort() {
                  setServiceSort(serviceByFilter)
            }
            handleSort()
      }, [sort, serviceByFilter, serviceSort])
      const ascPrice = () => {
            const asc = serviceByFilter.sort((a, b) => a.special_price - b.special_price)
            setSort({
                  ...sort,
                  _sortPrice: asc
            })
      }
      const descPrice = () => {
            const desc = serviceByFilter.sort((a, b) => b.special_price - a.special_price)
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
      return (
            <div className='ser-list'>
                  <div className="flex-row-sp list-filter">
                        <div className="flex-row list-filter__left">
                              <span>Sắp xếp theo:</span>
                              {
                                    buttons.map(item => (
                                          <button
                                                style={activeFilter === item ?
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
                                    placeholder="Tìm theo tên dịch vụ"
                              />
                              <button><img src={icon.search} alt="" /></button>
                        </div>
                  </div>
                  <div className="flex-column ser-list__content">
                        <ul className="ser-list__content-list">
                              {
                                    servicesIs.map(item => (
                                          <li
                                                key={item.id}
                                                className="ser-list__content-list-item"
                                          >
                                                <CardItem
                                                      org_id={mer_id}
                                                      name={item.product_name}
                                                      retail_price={item.retail_price}
                                                      special_price={item.special_price}
                                                      detail={item}
                                                      style={cardStyle}
                                                />
                                          </li>
                                    ))
                              }
                        </ul>
                        <ButtonCus
                              text="Xem thêm"
                              imgIcon={icon.down}
                              fontSize="14px"
                              lineHeight="20px"
                              color="var(--purple)"
                              border="solid 1px var(--purple)"
                              borderRadius="20px"
                        />
                  </div>
            </div>
      );
}

export default ServiceList;