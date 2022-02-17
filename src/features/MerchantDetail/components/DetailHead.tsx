import React, { useRef, useState, useContext } from "react";
import { Container } from "@mui/material";
import icon from "../../../constants/icon";
import { AppContext } from "../../../context/AppProvider";
//import { IOrganization } from "../../../interface/organization";
import img from "../../../constants/img";
import OrgCardLoading from "../../Loading/OrgCardLoading";
import PopupDetailContact from "./PopupDetailContact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DetailHeadOpenTime from "../components/DetailHeadOpenTime";
import favorites from "../../../api/favorite";
import SignInUp from "../../poupSignInUp/index";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [],
  appendDots: (dots: any) => (
    <div>
      <ul>{dots}</ul>
    </div>
  ),
};

// interface IProps {
//   org: IOrganization;
//   loading: boolean;
// }

function DetailHead(props: any) {
  const { org, loading, tempCount, setTempleCount, follow, setFollow } = props;
  const [openSignIn, setOpenSignIn] = useState(false);
  const { t, profile } = useContext(AppContext);
  const infoBox = useRef(null);
  const [openPopupContact, setOpenPopupContact] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  const handleOpenPopupContact = () => {
    setOpenPopupContact(true);
  };

  async function handlePostFavorites(org_id: number) {
    try {
      await favorites.postFavorite(org_id);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleDeleteFavorite(org_id: number) {
    try {
      await favorites.deleteFavorite(org_id);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFollowClick = () => {
    if (profile) {
      setFollow(!follow);
      if (follow === true) {
        setTempleCount(tempCount - 1);
        handleDeleteFavorite(org.id);
      } else {
        setTempleCount(tempCount + 1);
        handlePostFavorites(org.id);
      }
    } else {
      setOpenSignIn(true);
    }
  };
  return (
    <div className="mer-detail">
      <Container>
        <div className="mer-detail__content">
          <div ref={infoBox} className="mer-detail__content-left">
            {loading === true ? (
              <OrgCardLoading />
            ) : (
              <>
                <div className="content-left__header">
                  <img src={icon.logoBusiness} alt="" />
                  <div className="content-left__header-name">
                    <span>{org?.name}</span>
                    <div className="mer-detail__rate">
                      <span>4.5</span>
                      <img src={icon.star} alt="" />
                      <span>250</span>
                      <img src={icon.chatAll} alt="" />
                      <span>{`${org?.favorites_count + tempCount}`}</span>
                      <img src={icon.Favorite} alt="" />
                    </div>
                  </div>
                </div>
                <div className="content-left__info">
                  <div className="content-left__info-detail">
                    <img src={icon.location} alt="" />
                    <p>
                      <span>
                        {t("Mer_de.address")}
                        {": "}
                      </span>
                      <span className="content-left__info-detail-add">
                        {org?.full_address}
                      </span>
                    </p>
                  </div>
                </div>

                {/* calendar work */}
                <DetailHeadOpenTime
                  org={org}
                  openTime={openTime}
                  setOpenTime={setOpenTime}
                />
                {/* end calendar work */}

                <div className="content-left__follow">
                  <button onClick={handleOpenPopupContact}>
                    {t("Mer_de.contact")}
                  </button>
                  <button
                    disabled={profile ? false : true}
                    style={
                      follow === true && profile
                        ? {
                            backgroundColor: "var(--purple)",
                            color: "var(--bg-gray)",
                          }
                        : {}
                    }
                    onClick={handleFollowClick}
                  >
                    {follow === true && profile
                      ? t("Mer_de.flowing")
                      : t("Mer_de.flow")}
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="merchant-slider mer-detail__content-right">
            <Slider lazyLoad="progressive" {...settings}>
              <div className="merchant-slider__img">
                <img src={img.slider} alt="" />
              </div>
              <div className="merchant-slider__img">
                <img src={img.slider4} alt="" />
              </div>
              <div className="merchant-slider__img">
                <img src={img.slider} alt="" />
              </div>
              <div className="merchant-slider__img">
                <img src={img.slider4} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </Container>
      <PopupDetailContact
        setOpenPopupContact={setOpenPopupContact}
        openPopupContact={openPopupContact}
      />
      <SignInUp
        openSignIn={openSignIn}
        setOpenSignIn={setOpenSignIn}
        activeTabSign={1}
      />
    </div>
  );
}

export default DetailHead;
