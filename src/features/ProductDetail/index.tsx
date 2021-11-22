import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import productsApi from '../../api/productApi';
import orgApi from '../../api/organizationApi'
import {Container} from '@mui/material'
import './Product.css';
import Header from '../Header';
import DetailCard from './components/DetailCard';
import DetailHead from './components/DetailHead'

function ProductDetail(props:any) {
      const location = useLocation();
      const [product, setProduct] = useState({});
      const [org, setOrg] = useState({})
      const url = location.search.slice(1, location.search.length);
      const param = JSON.parse(decodeURI(url))
      const values = {
            org_id : param.org,
            id: param.id
      }
      useEffect(()=>{
            async function handleGetDetailProduct(){
                  try{
                        const res = await productsApi.getDetailById(values);
                        setProduct(res.data.context)
                  }catch(err){
                        console.log(err)
                  }
            }
            handleGetDetailProduct();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      useEffect(()=>{
            async function handleGetDetailOrg(){
                  try{
                        const res = await orgApi.getOrgById(param.org)
                        setOrg(res.data.context);
                  }catch(err){
                        console.log(err)
                  }
            }
            handleGetDetailOrg();
      },[param.org])
      return (
            <div className="product">
                  <Header/>
                  <Container>
                        <div className="product-cnt">
                              <DetailHead
                                    
                              />
                              <DetailCard
                                    org={org}
                                    product={product}
                              />
                        </div>
                  </Container>
            </div>
      );
}

export default ProductDetail;