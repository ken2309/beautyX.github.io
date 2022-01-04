import React, { useEffect, useState, useMemo, useContext } from "react";
import productsApi from "../../api/productApi";
import ProductCate from "./Components/ProductCate";
import ProductList from "./Components/ProductList";
import { Product } from "../../interface/product";
import { AppContext } from "../../context/AppProvider";
import ServiceCateMb from "../ServiceByMerchant/components/ServiceCateMb";
import { Category } from "../../interface/category";

function ProductByMerchant(props: any) {
  const { t } = useContext(AppContext);
  const { activeTab, mer_id, org } = props;
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [cate_id, setCate_id] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageLength, setPageLength] = useState();
  const param = useMemo(
    () => ({
      org_id: mer_id,
      page: page,
    }),
    [mer_id, page]
  );
  useEffect(() => {
    async function handleGetPrByOrgId() {
      setLoading(true);
      try {
        if (!cate_id || cate_id === 0) {
          const res = await productsApi.getByOrgId(param);
          setProducts(res.data.context.data);
          setPageLength(res.data.context.last_page);
        } else {
          const resByCate_id = await productsApi.getByOrgId_cateId({
            org_id: mer_id,
            cate_id: cate_id,
            page: page,
          });
          setProducts(resByCate_id.data.context.data);
          setPageLength(resByCate_id.data.context.last_page);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    handleGetPrByOrgId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param, cate_id, mer_id, page]);
  // add new values product
  const productsIs = [];
  for (var item of products) {
    const product = { ...item, is_product: true };
    productsIs.push(product);
  }
  return (
    <div style={activeTab === 3 ? { display: "block" } : { display: "none" }}>
      <div
        className="flex-row-sp ser-content"
        style={{ alignItems: "flex-start" }}
      >
        <ProductCate
          t={t}
          mer_id={mer_id}
          setCate_id={setCate_id}
          setPage={setPage}
          activeTab={activeTab}
          categories={categories}
          setCategories={setCategories}
        />
        {/* for mobile */}
        <ServiceCateMb
          categories={categories}
          chooseCate={cate_id}
          setChooseCate={setCate_id}
          setPage={setPage}
        />
        {/* ----- */}
        <ProductList
          t={t}
          pageLength={pageLength}
          loading={loading}
          products={productsIs}
          page={page}
          setPage={setPage}
          org={org}
          mer_id={mer_id}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default ProductByMerchant;
