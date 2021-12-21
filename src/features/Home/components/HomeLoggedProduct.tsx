import React, { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import SectionTitle from "../../SectionTitle/index";
import HomeLoggedProductItem from "./HomeLoggedProductItem";
import HomeLoggedProductSelector from "./HomeLoggedProductSelector";
const dataProduct = [
  {
    id: 1,
    name: "Spa 1",
  },
  {
    id: 2,
    name: "Spa 2",
  },
  {
    id: 3,
    name: "Spa 3",
  },
  {
    id: 4,
    name: "Spa 4",
  },
  {
    id: 5,
    name: "Spa 5",
  },
  {
    id: 6,
    name: "Spa 6",
  },
  {
    id: 7,
    name: "Spa 7",
  },
  {
    id: 8,
    name: "Spa 8",
  },
];
export default function HomeLoggedProduct() {
  const { t } = useContext(AppContext);
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
        {dataProduct.map((item, i) => (
          <HomeLoggedProductItem key={i} />
        ))}
      </div>
    </div>
  );
}
