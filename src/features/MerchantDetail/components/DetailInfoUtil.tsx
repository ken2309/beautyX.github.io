import React, { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import SectionTitle from "../../SectionTitle";

function DetailInfoUtil(props: any) {
  const { t } = useContext(AppContext);
  const { utilsList } = props;
  return (
    <div className="mer__content-info__util-wrap">
      <SectionTitle title={t("Mer_de.utilities")} />
      <ul className="mer__content-info__util-list">
        {utilsList.map((item: any, index: number) => (
          <li key={index}>
            <div className="flex-row-sp mer__content-info__util-item">
              <img src={item.icon} alt="" />
              <span>
                <h5>{item.text}</h5>
                <p>{item.count}</p>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailInfoUtil;
