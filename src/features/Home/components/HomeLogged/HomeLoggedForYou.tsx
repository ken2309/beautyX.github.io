import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppProvider";
import SectionTitle from "../../../SectionTitle";
import HomeLoggedForYouItem from "./HomeLoggedForYouItem";
import HomeLoggedForYouSelector from "./HomeLoggedForYouSelector";
import orgProApi from "../../../../api/productApi";

export default function HomeLoggedForYou() {
  const { t } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function handleGetOrgs() {
      try {
        const res = await orgProApi.getByOrgId({
          org_id: 1,
        });
        setProducts(res.data.context.data);
        // console.log("res :>> ", res.data.context.data);
      } catch (error) {
        console.log(error);
      }
    }
    handleGetOrgs();
  }, []);
  return (
    <div className="homelogged-product">
      <SectionTitle title={t("Home.sale_for_me")} textAlign="left" />
      <div className="homelogged-product__sort">
        <div className="homelogged-product__sort-left">
          <span>Sắp xếp theo:</span>
          <span className="sort-item">Sắp hết hạn</span>
          <span className="sort-item">Giảm nhiều</span>
        </div>
        <div className="homelogged-product__sort-right">
          <HomeLoggedForYouSelector />
        </div>
      </div>
      <div className="homelogged-product__list">
        {products.map((item: any) => (
          <HomeLoggedForYouItem key={item.id} products={item} />
        ))}
      </div>
    </div>
  );
}
