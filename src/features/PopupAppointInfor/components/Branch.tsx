import React, { useContext } from "react";
import icon from "../../../constants/icon";
import { AppContext } from "../../../context/AppProvider";

export default function Branch() {
  const { t } = useContext(AppContext)
  return (
    <div className="appointInfor-branch">
      <div className="service-label">
        <p>{t('booking.branch')}</p>
      </div>
      <div className="service-wrap">
        <input
          type="text"
          placeholder={t('Mer_de.search_by_location')}
        />
        <div className="service-input__btn">
          <img src={icon.SearchWhite} alt="" />
        </div>
      </div>
    </div>
  );
}
