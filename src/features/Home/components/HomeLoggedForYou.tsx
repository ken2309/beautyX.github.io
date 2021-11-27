import React from "react";
import SectionTitle from "../../SectionTitle";
import HomeLoggedForYouItem from "./HomeLoggedForYouItem";
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
];
export default function HomeLoggedForYou() {
  const [openForYouEnterprise, setOpenopenForYouEnterprise] =
    React.useState(false);
  return (
    <div className="homelogged-product">
      <SectionTitle
        title="Ưu đãi nổi bật dành riêng cho bạn"
        textAlign="left"
      />
      <div className="homelogged-product__sort">
        <div className="homelogged-product__sort-left">
          <span>Sắp xếp theo:</span>
          <span className="sort-item">Sắp hết hạn</span>
          <span className="sort-item">Giảm nhiều</span>
        </div>
        <div className="homelogged-product__sort-right">
          <HomeLoggedProductSelector
            openEnterprise={openForYouEnterprise}
            setOpenEnterprise={setOpenopenForYouEnterprise}
          />
        </div>
      </div>
      <div className="homelogged-product__list">
        {dataProduct.map((item, i) => (
          <HomeLoggedForYouItem key={i} />
        ))}
      </div>
    </div>
  );
}
