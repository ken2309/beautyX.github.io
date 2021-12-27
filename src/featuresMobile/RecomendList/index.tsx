import React, { useEffect, useState } from 'react';
import {Product} from '../../interface/product';
import CardItem from '../../features/CardItem/index';
import productsApi from '../../api/productApi';
import './RecommendList.css'

const style={
      width:'172px'
}
function RecommendList(props:any) {
      const {org} = props;
      const [products, setProducts] = useState<Product[]>([])
      useEffect(()=>{
            async function getProducts() {
                  const response = await productsApi.getByOrgId({
                        org_id: 51,
                        page: 1
                  })
                  setProducts(response.data.context.data);
            }
            getProducts();
      },[])
      console.log(products)
      return (
            <div className="mb-rcm-wrapper">
                  <div className="mb-rcm-wrapper__title">
                        Ưu đãi khác của Dev.spa
                  </div>
                  <div className="mb-rcm-wrapper__cnt">
                        <ul className="mb-rcm-wrapper__cnt-list">
                              {
                                    products.map(item => (
                                          <li key={item.id}>
                                                <CardItem
                                                      name={item.product_name}
                                                      detail={item}
                                                      style={style}
                                                      retail_price={item.retail_price}
                                                      special_price={item.special_price}
                                                      org={org}
                                                      org_name={org.name}
                                                />
                                          </li>
                                    ))
                              }
                        </ul>
                  </div>
            </div>
      );
}

export default RecommendList;