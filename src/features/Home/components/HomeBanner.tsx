import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import HomeFilter from "./HomeFilter";
import Slider from "react-slick";
import bannerApi from "../../../api/bannerApi";

const styleFilter = {
  position: "absolute",
  width: "66.66%",
  boxShadow: "0px 6px 37px rgba(113, 97, 186, 0.1)",
  padding: "36px",
};
function HomeBanner(props: any) {
  const [chooseBanner, setChooseBanner] = useState();
  console.log("choose", chooseBanner);
  const [banners, setBanners] = useState([]);
  console.log("banners", banners);
  const { t } = useContext(AppContext);
  useEffect(() => {
    async function getBanners() {
      try {
        const res = await bannerApi.getAll();
        setBanners(res.data.context.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBanners();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    afterChange: function (index: number) {
      setChooseBanner(banners[index]);
    },
  };
  return (
    <div className="home-banner">
      <Slider {...settings}>
        {banners.map((item: any, index: number) => (
          <div key={index + item.url} className="home-banner__img">
            <img src={item.imageURL} alt="" />
          </div>
        ))}
      </Slider>
      <span className="home-banner__slogan">{t("Banner.1")}</span>
      <HomeFilter styleFilter={styleFilter} />
    </div>
  );
}

export default HomeBanner;
