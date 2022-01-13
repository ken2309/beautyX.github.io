import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppProvider";
import SectionTitle from "../../../SectionTitle/index";
import HomeLoggedLocationItem from "./HomeLoggedLocationItem";
import orgProApi from "../../../../api/productApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function HomeLoggedLocation() {
  const { t } = useContext(AppContext);
  const [org, setSetOrg] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        const res = await orgProApi.getByOrgId({ org_id: 1 });
        setSetOrg(res.data.context.data);
      } catch (error) {
        console.log(error);
      }
    }
    handleGetOrgs();
  }, []);

  return (
    <div className="homelogged-location">
      <SectionTitle title={t("Home.favorite_list")} textAlign="left" />
      {/* <div className="homelogged-location__list"> */}
      <div>
        <Slider {...settings}>
          {org.map((item, i) => (
            <HomeLoggedLocationItem key={i} org={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
