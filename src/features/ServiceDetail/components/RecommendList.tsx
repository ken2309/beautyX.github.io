import React, { useState } from "react";
import SectionTitle from "../../SectionTitle/index";
import CardItem from "../../CardItem";
import Carousel from "react-elastic-carousel";

const cardStyle = {
  width: "272px",
};
const buttons = [
  { id: 1, text: "Sắp hết hạn" },
  { id: 2, text: "Giảm nhiều" },
];
function RecommendList(props: any) {
  const { org, list, is_type } = props;
  const title = `Ưu đãi của "${org?.name}"`;
  const [activeBtn, setActiveBtn] = useState();
  return (
    <>
      <div className="flex-row-sp mer-sale-head">
        <SectionTitle title={title} />
        <div className="flex-row mer-sale-head__sort">
          Sắp xếp theo:
          {buttons.map((item: any, index) => (
            <button
              style={
                activeBtn === item
                  ? {
                      backgroundColor: "var(--purple)",
                      color: "var(--bg-gray)",
                    }
                  : {}
              }
              onClick={() => setActiveBtn(item)}
              key={index}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
      <div className="mer-sale-list">
        <Carousel
          children={list.map((item: any) => (
            <CardItem
              is_type={is_type}
              key={item.id}
              style={cardStyle}
              detail={item}
              name={item.service_name}
              org_name={org.name}
              org_id={org.id}
              retail_price={item.price}
              special_price={item.special_price}
            />
          ))}
          isRTL={false}
          itemsToShow={4}
          showArrows={false}
        />
      </div>
    </>
  );
}

export default RecommendList;
