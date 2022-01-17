import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppProvider";
import SectionTitle from "../../../SectionTitle/index";
import HomeLoggedLocationItem from "./HomeLoggedLocationItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import orgApi from "../../../../api/organizationApi";
import { IOrganization } from "../../../../interface/organization";

export default function HomeLoggedLocation(props: any) {
  const { t } = useContext(AppContext);
  const [org, setSetOrg] = useState<IOrganization[]>([]);
  console.log(`org`, org);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: org.length > 3 ? 3 : org.length,
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
          slidesToShow: org.length > 3 ? 3 : org.length,
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
        const res = await orgApi.getAll();
        const orgList = await res.data.context.data;
        const orgFavorite = orgList.filter(
          (item: any) => item.is_favorite === true
        );
        setSetOrg(orgFavorite);
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

      <Slider {...settings}>
        {org.map((item: any, i: number) => (
          <HomeLoggedLocationItem key={i} org={item} />
        ))}
      </Slider>

      {/* </div> */}
    </div>
  );
}
