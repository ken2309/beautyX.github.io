import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import SectionTitle from "../../SectionTitle/index";
import HomeLoggedProductItem from "./HomeLoggedProductItem";
import HomeLoggedProductSelector from "./HomeLoggedProductSelector";
import orgProApi from "../../../api/productApi";

export default function HomeLoggedProduct() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const { t } = useContext(AppContext);
  useEffect(() => {
    async function handleGetOrgs() {
      setLoading(true);
      try {
        const res = await orgProApi.getByOrgId({
          org_id: 51,
        });
        setProducts(res.data.context.data);
        setLoading(false);
        console.log("res :>> ", res);
      } catch (err) {
        console.log(err);
      }
    }
    handleGetOrgs();
  }, []);
  return (
    <div className="homelogged-product">
      <SectionTitle title={t("Home.pr_ser_purchased")} textAlign="left" />
      <div className="homelogged-product__sort">
        <div className="homelogged-product__sort-left">
          <span>Sắp xếp theo:</span>
          <span className="sort-item">Gần nhất</span>
          <span className="sort-item">Sử dụng nhiều</span>
        </div>
        <div className="homelogged-product__sort-right">
          <HomeLoggedProductSelector />
        </div>
      </div>
      <div className="homelogged-product__list">
        {products.map((item: any) => (
          <HomeLoggedProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
