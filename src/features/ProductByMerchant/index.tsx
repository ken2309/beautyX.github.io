import React, { useEffect, useState, useMemo, useContext } from 'react';
import productsApi from '../../api/productApi';
import ProductCate from './Components/ProductCate'
import ProductList from './Components/ProductList';
import { Product } from '../../interface/product';
import { AppContext } from '../../context/AppProvider';

function ProductByMerchant(props: any) {
      const { t } = useContext(AppContext)
      const { activeTab, mer_id } = props;
      const [products, setProducts] = useState<Product[]>([]);
      const [loading, setLoading] = useState(false)
      const [page, setPage] = useState(1)
      const [pageLength, setPageLength] = useState();
      const param = useMemo(() => ({
            org_id: mer_id,
            page: page
      }), [mer_id, page])
      useEffect(() => {
            async function handleGetPrByOrgId() {
                  setLoading(true)
                  try {
                        const res = await productsApi.getByOrgId(param)
                        setProducts(res.data.context.data)
                        setPageLength(res.data.context.last_page)
                        setLoading(false);
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetPrByOrgId();
      }, [param])
      // add new values product
      const productsIs = [];
      for(var item of products){
            const product = {...item, is_product: true};
            productsIs.push(product);
      }
      return (
            <div
                  style={activeTab === 3 ? { display: 'block' } : { display: 'none' }}
            >
                  <div
                        className="flex-row-sp ser-content"
                        style={{ alignItems: 'flex-start' }}
                  >
                        <ProductCate
                              t={t}
                              mer_id={mer_id}
                        />
                        <ProductList
                              t={t}
                              pageLength={pageLength}
                              loading={loading}
                              products={productsIs}
                              page={page}
                              setPage={setPage}
                        />
                  </div>
            </div>
      );
}

export default ProductByMerchant;