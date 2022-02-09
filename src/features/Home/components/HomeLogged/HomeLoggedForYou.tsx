import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppProvider";
import SectionTitle from "../../../SectionTitle";
import HomeLoggedForYouItem from "./HomeLoggedForYouItem";
import HomeLoggedForYouSelector from "./HomeLoggedForYouSelector";
import orgProApi from "../../../../api/productApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function HomeLoggedForYou() {
  const { t } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false,
    appendDots: (dots: any) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          swipe: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          swipe: true,
        },
      },
    ],
  };
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
    <div className="homelogged-foryou">
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
      {/* <div className="homelogged-product__list"> */}
      <div>
        <Slider {...settings}>
          {products.map((item: any) => (
            <HomeLoggedForYouItem key={item.id} products={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
