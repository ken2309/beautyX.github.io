import React from "react";
import SectionTitle from "../../SectionTitle";
import HomeLoggedForYouItem from "./HomeLoggedForYouItem";
import HomeLoggedForYouSelector from "./HomeLoggedForYouSelector";
const dataProduct = [
  {
    id: 1,
    name: "Massage Thái Lan, giảm đau xương khớp",
    desc: "Bay Spa & Massage",
  },
  {
    id: 2,
    name: "Liệu pháp lưng vai",
    desc: "Temple Tree Spa",
  },
  {
    id: 3,
    name: "Chăm sóc da mặt bằng đất sét tự nhiên",
    desc: "YKC Wellness Spa",
  },
  {
    id: 4,
    name: "Massage trị liệu đá nóng",
    desc: "Payya Thái Spa & Massage",
  },
];
export default function HomeLoggedForYou() {
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
          <HomeLoggedForYouSelector />
        </div>
      </div>
      <div className="homelogged-product__list">
        {dataProduct.map((item, i) => (
          <HomeLoggedForYouItem key={i} name={item.name} desc={item.desc} />
        ))}
      </div>
    </div>
  );
}
