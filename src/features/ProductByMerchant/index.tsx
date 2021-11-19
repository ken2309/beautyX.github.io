import React, { useEffect, useState, useMemo } from 'react';
import productsApi from '../../api/productApi';
import ProductCate from './Components/ProductCate'
import ProductList from './Components/ProductList';
import { Product } from '../../interface/product';

function ProductByMerchant(props:any) {
      const {activeTab, mer_id} = props;
      const [products, setProducts] = useState<Product[]>([]);
      const [loading, setLoading] = useState(false)
      const [page, setPage] = useState(1)
      const [pageLength, setPageLength] = useState();
      const param = useMemo(() => ({
            org_id: mer_id,
            page: page
      }), [mer_id, page])
      console.log(page);
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
      return (
            <div
                  style={activeTab === 3 ? { display: 'block' } : { display: 'none' }}
            >
                  <div
                        className="flex-row-sp ser-content"
                        style={{ alignItems: 'flex-start' }}
                  >
                        <ProductCate
                              mer_id={mer_id}
                        />
                        <ProductList
                              pageLength={pageLength}
                              loading={loading}
                              products={products}
                              page={page}
                              setPage={setPage}
                        />
                  </div>
            </div>
      );
}

export default ProductByMerchant;