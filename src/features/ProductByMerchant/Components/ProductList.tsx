import React, { useEffect, useState } from 'react';
import icon from '../../../constants/icon';
import CardItem from '../../CardItem';
import useFilterPro from '../../../utils/useFilterPro';
import {Product} from '../../../interface/product';
import Loading from '../../Loading/index';
import { Pagination } from '@mui/material';
import scrollTop from '../../../utils/scrollTop';
import {useLocation} from 'react-router-dom'

const buttons = [
      { id: 1, title: 'Phổ biến' },
      { id: 2, title: 'Bán chạy' },
      { id: 3, title: 'Giá thấp' },
      { id: 4, title: 'Giá cao' }
]
const cardStyle = {
      width: '100%'
}
function ProductList(props: any) {
      const location = useLocation();
      const {products, setPage,loading, pageLength} = props;
      const [activeFilter, setActiveFilter] = useState();
      const [serviceSort, setServiceSort] = useState<Product[]>([]);
      const [sort, setSort] = useState({
            _sortPrice: products
      })
      const [searchTerm, setSearchTerm] = useState('')
      const handleSearchOnChange = (e: any) => {
            setSearchTerm(e.target.value)
            setActiveFilter(undefined)
      }
      const productFilter = useFilterPro(searchTerm, products)
      useEffect(() => {
            function handleSort() {
                  setServiceSort(productFilter)
            }
            handleSort()
      }, [sort, productFilter, serviceSort])
      const ascPrice = () => {
            const asc = productFilter.sort((a, b) => a.retail_price - b.retail_price)
            setSort({
                  ...sort,
                  _sortPrice: asc
            })
      }
      const descPrice = () => {
            const desc = productFilter.sort((a, b) => b.retail_price - a.retail_price)
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
      const pageChange=(event:any, value:any)=>{
            setPage(value)
            scrollTop();
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
                                    loading === true ?
                                          <Loading />
                                          :
                                          productFilter?.map((item: any, index) => (
                                                <li
                                                      key={index}
                                                      className="ser-list__content-list-item"
                                                >
                                                      <CardItem
                                                            org_id={location.search.slice(4, location.search.length)}
                                                            name={item.product_name}
                                                            detail={item}
                                                            retail_price={item.retail_price}
                                                            special_price={item.special_price}
                                                            style={cardStyle}
                                                      />
                                                </li>
                                          ))
                              }
                        </ul>
                        <Pagination
                              color='secondary'
                              shape="rounded"
                              count={pageLength}
                              onChange={pageChange}
                        />
                  </div>
            </div>
      );
}

export default ProductList;