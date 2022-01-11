import React, { useRef, useState, useContext } from "react";
import { Container } from "@mui/material";
import icon from "../../../constants/icon";
import { AppContext } from "../../../context/AppProvider";
//import { useElementSize } from "usehooks-ts";
import { IOrganization } from "../../../interface/organization";
import img from "../../../constants/img";
import OrgCardLoading from "../../Loading/OrgCardLoading";
import PopupDetailContact from "./PopupDetailContact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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

interface IProps {
  org: IOrganization | undefined;
  loading: boolean;
}

function DetailHead(props: IProps) {
  const { org, loading } = props;
  const { t } = useContext(AppContext);
  //const slider = useRef(null);
  const infoBox = useRef(null);
  //const { width, height } = useElementSize(slider);
  const [follow, setFollow] = useState(false);
  const [openPopupContact, setOpenPopupContact] = useState(false);

  function handleOpenPopupContact() {
    setOpenPopupContact(true);
  }

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
                      <span>121</span>
                      <img src={icon.Favorite} alt="" />
                    </div>
                  </div>
                </div>
                <div className="content-left__info">
                  <div className="content-left__info-detail">
                    <img src={icon.location} alt="" />
                    <span>
                      <h5>{t("Mer_de.address")}</h5>
                      {org?.full_address}
                    </span>
                  </div>
                </div>
                <div className="content-left__info">
                  <div className="content-left__info-detail">
                    <img src={icon.time} alt="" />
                    <span>
                      <h5>{t("Mer_de.time_work")}</h5>
                    </span>
                  </div>
                </div>
                <div className="content-left__work">
                  <div className="content-left__work-item">
                    <span>{t("Mer_de.weeks_day")}</span>
                    <p>09.00 - 21.00</p>
                  </div>
                  <div className="content-left__work-item">
                    <span>{t("Mer_de.sunday")}</span>
                    <p>09.00 - 21.00</p>
                  </div>
                </div>
                <div className="content-left__follow">
                  <button onClick={handleOpenPopupContact}>
                    {t("Mer_de.contact")}
                  </button>
                  <button
                    style={
                      follow === true
                        ? {
                            backgroundColor: "var(--purple)",
                            color: "var(--bg-gray)",
                          }
                        : {}
                    }
                    onClick={() => setFollow(!follow)}
                  >
                    {follow === true ? t("Mer_de.flowing") : t("Mer_de.flow")}
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="merchant-slider mer-detail__content-right">
            <Slider {...settings}>
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
    </div>
  );
}

export default DetailHead;
