import React, { useContext, useEffect, useMemo, useState } from 'react';
import {useLocation} from 'react-router-dom';
import productsApi from '../../api/productApi';
import orgApi from '../../api/organizationApi'
import { Container } from '@mui/material'
import './Product.css';
import Header from '../Header';
import DetailCard from './components/DetailCard';
import DetailHead from './components/DetailHead';
import Footer from '../Footer';
import RecommendList from '../RecommendList/index';
import { Product } from '../../interface/product'
import { AppContext } from '../../context/AppProvider';

function ProductDetail(props: any) {
      const { t } = useContext(AppContext);
      const location = useLocation();
      const search = location.search.slice(1, location.search.length)
      const params = search.split(',');
      const is_type = params[2];
      const [product, setProduct] = useState({});
      const [products, setProducts] = useState<Product[]>([])
      const [org, setOrg] = useState({})
      const values = useMemo(() => ({
            org_id: params[0],
            id: params[1]
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }), [params[1]])
      useEffect(() => {
            async function handleGetDetailProduct() {
                  try {
                        const res = await productsApi.getDetailById(values);
                        const resOrg = await orgApi.getOrgById(params[0]);
                        const resProducts = await productsApi.getByOrgId({ org_id: params[0], page: 1 })
                        setProduct(res.data.context)
                        setOrg(resOrg.data.context);
                        setProducts(resProducts.data.context.data);
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetDetailProduct();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [params[1]])
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
                                    t={t}
                                    product={product}
                                    org={org}
                                    is_type={is_type}
                              />
                              <DetailCard
                                    org={org}
                                    product={product}
                                    is_type={is_type}
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