import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import scrollTop from "../../../utils/scrollTop";
//import slugify from "../../../utils/formatUrlString";
import icon from "../../../constants/icon";
import { AppContext } from "../../../context/AppProvider";
import Map from "../../../featuresMobile/Map";

const d = new Date();
const dayWeek = d.getDay() + 1;
function ResultItem(props: any) {
  const { t } = useContext(AppContext);
  const { item, setChooseItem, serviceOfCardOrg, resultList } = props;
  const [openMap, setOpenMap] = useState(false);
  const opening_time = item?.opening_time;
  const history = useHistory();
  const handleChooseItem = () => {
    if (setChooseItem) {
      setChooseItem(item);
    }
  };
  const gotoDetail = () => {
    //console.log(item.domain)
    history.push({
      //pathname: `/merchant-detail/${slugify(item.name)}`,
      pathname: `/org/${item.subdomain}`,
      search: `${item.id}`,
      state: item,
    });
    scrollTop();
  };
  return (
    <>
      <li onMouseEnter={handleChooseItem}>
        <div className="wraper-search">
          <img
            onClick={() => setOpenMap(true)}
            className="result-detail__org-pin-map"
            src={icon.pinMap_2}
            alt=""
          />
          <div onClick={gotoDetail} className="result-item">
            <img
              className="result-item__thumbnail"
              src={"https://picsum.photos/650/976?random=" + item.id}
              alt=""
            />
            <div className="result-item__detail">
              <div className="wrapper-header ">
                <span className="org-name">{item.name}</span>
                <div className="detail-header__rate">
                  <span>4.5</span>
                  <img style={{ marginRight: "8px" }} src={icon.star} alt="" />
                  <span>500</span>
                  <img src={icon.chatAll} alt="" />
                </div>
              </div>
              <div className="wrapper-content">
                <div>
                  <div className="result-item__detail-address">
                    <img src={icon.location} alt="" />
                    <span>{item.full_address}</span>
                  </div>
                  {opening_time?.map((item: any, index: number) => (
                    <div
                      key={index}
                      style={
                        dayWeek === index + 2
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      <div className="result-item__detail-address">
                        <img src={icon.time} alt="" />
                        <span className="time">
                          {index + 2 === 8 ? "Ch??? nh???t" : `Th??? ${index + 2}`}:
                          {item.time_opening === "off" ? (
                            <span className="time__status">????ng c???a</span>
                          ) : (
                            <>
                              <span className="time__status">
                                {t("Search_result.opening")}
                              </span>
                              :
                              <span className="time_op_cl">
                                {item.from_time_opening} -{" "}
                                {item.to_time_opening}
                              </span>
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="org__service">
                  {serviceOfCardOrg.map((item: any, index: number) => (
                    <li key={index} className="org__service-item">
                      <img src={item.icon} alt="" />
                      <span>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* Map for mobile */}
      <Map openMap={openMap} setOpenMap={setOpenMap} list={resultList} />
    </>
  );
}

export default ResultItem;
