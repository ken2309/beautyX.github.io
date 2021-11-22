import React from "react";
import icon from "../../../constants/icon";

export default function Branch() {
  return (
    <div className="appointInfor-branch">
      <div className="service-label">
        <p>Chi nhánh</p>
      </div>
      <div className="service-wrap">
        <input
          type="text"
          placeholder="Tìm chi nhánh theo khu vực gần bạn..."
        />
        <div className="service-input__btn">
          <img src={icon.SearchWhite} alt="" />
        </div>
      </div>
    </div>
  );
}
