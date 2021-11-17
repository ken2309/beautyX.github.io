import React, { useEffect, useState, useMemo } from 'react';
import productsApi from '../../api/productApi';
import ProductCate from './Components/ProductCate'
import ProductList from './Components/ProductList';
import { Product } from '../../interface/product'

function ProductByMerchant(props:any) {
      const {activeTab, mer_id} = props;
      const [products, setProducts] = useState<Product[]>([]);
      const [page, setPage] = useState(1)
      const param = useMemo(() => ({
            org_id: mer_id,
            page: page
      }), [mer_id, page])
      useEffect(() => {
            async function handleGetPrByOrgId() {
                  try {
                        const res = await productsApi.getByOrgId(param)
                        setProducts([...products, ...res.data.context.data])
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetPrByOrgId();
      }, [param])
      console.log(products);
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
                              products={products}
                              page={page}
                              setPage={setPage}
                        />
                  </div>
            </div>
      );
}

export default ProductByMerchant;