import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { IBanner } from '../../../interface/banner';
import bannersApi from '../../../api/bannersApi'
//import HomeFilter from "./HomeFilter";

// const styleFilter = {
//   position: "absolute",
//   width: "66.66%",
//   boxShadow: "0px 6px 37px rgba(113, 97, 186, 0.1)",
//   padding: "36px",
// };
function HomeBanner(props: any) {
  const { t } = useContext(AppContext);
  const [banners, setBanners] = useState<IBanner[]>([])
  useEffect(() => {
    async function handleGetBanner() {
      try {
        const res = await bannersApi.getAll();
        setBanners(res.data.context.data)
      } catch (error) {
        console.log(error)
      }
    }
    handleGetBanner()
  },[])
  return (
    <div className="home-banner home-banner__demo">
      <span className="home-banner__slogan">{t("Banner.1")}</span>
      {/* <HomeFilter styleFilter={styleFilter} /> */}
    </div>
  );
}

export default HomeBanner;
