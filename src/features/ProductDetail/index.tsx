import React, { useEffect, useMemo, useState } from 'react';
import {useLocation} from 'react-router-dom';
import productsApi from '../../api/productApi';
import orgApi from '../../api/organizationApi'
import {Container} from '@mui/material'
import './Product.css';
import Header from '../Header';
import DetailCard from './components/DetailCard';
import DetailHead from './components/DetailHead';
import Footer from '../Footer';
import RecommendList from '../RecommendList/index';
import {Product} from '../../interface/product'

function ProductDetail(props:any) {
      const location = useLocation();
      const [product, setProduct] = useState({});
      const [products, setProducts] = useState<Product[]>([])
      const [org, setOrg] = useState({})
      const url = location.search.slice(1, location.search.length);
      const param = JSON.parse(decodeURI(url))
      const values = useMemo(() => ({
            org_id: param.org,
            id: param.id
      }), [param.id, param.org])
      useEffect(() => {
            async function handleGetDetailProduct() {
                  try {
                        const res = await productsApi.getDetailById(values);
                        const resOrg = await orgApi.getOrgById(param.org);
                        const resProducts = await productsApi.getByOrgId({ org_id: param.org, page: 1 })
                        setProduct(res.data.context)
                        setOrg(resOrg.data.context);
                        setProducts(resProducts.data.context.data);
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetDetailProduct();
      }, [param.org, values])
      //ad values is product:true
      const productsIs = [];
      for(var item of products){
            const product = {...item, is_product: true};
            productsIs.push(product);
      }
      return (
            <div className="product">
                  <Header />
                  <Container>
                        <div className="product-cnt">
                              <DetailHead
                                    product={product}
                                    org={org}
                              />
                              <DetailCard
                                    org={org}
                                    product={product}
                              />
                        </div>
                        <RecommendList
                              org={org}
                              list={productsIs}
                        />
                  </Container>
                  <Footer/>
            </div>
      );
}

export default ProductDetail;