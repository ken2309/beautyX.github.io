import React from "react";
import { partnerStyle } from "../style";
import ButtonCus from "../../../components/ButtonCus";
import Checkbox from "@mui/material/Checkbox";
import icon from "../../../constants/icon";

export default function FormPartner() {
  const parner = partnerStyle();

  function onSubmit(e: React.FormEvent<HTMLInputElement>) {
    console.log(e);
    e.preventDefault();
  }
  return (
    <div className={parner.partnerRegis}>
      <h2 className={parner.partnerRegisTitle}>
        Trở thành đối tác Myspa để kinh doanh hiệu quả hơn trong giai đoạn
        chuyển đối số
      </h2>
      <form action="#" className={parner.form}>
        <div className={parner.wrapInput}>
          <img className={parner.inputImgName} src={icon.User} alt="" />
          <input
            className={parner.inputName}
            placeholder="Họ và tên"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className={parner.wrapInput}>
          <img className={parner.inputImgName} src={icon.Phone} alt="" />
          <input
            className={parner.inputName}
            placeholder="Số điện thoại"
            type="text"
            name="phone"
            id="phone"
          />
        </div>
        <div className={parner.wrapInput}>
          <img className={parner.inputImgName} src={icon.Message} alt="" />
          <input
            className={parner.inputName}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className={parner.wrapInput}>
          <img className={parner.inputImgName} src={icon.Buildings} alt="" />
          <input
            className={parner.inputName}
            placeholder="Tên doanh nghiệp"
            type="text"
            name="enterprise"
            id="enterprise"
          />
        </div>

        <div className={parner.wrapInput}>
          <img className={parner.inputImgName} src={icon.Location} alt="" />
          <input
            className={parner.inputName}
            placeholder="Địa chỉ"
            type="text"
            name="address"
            id="address"
          />
        </div>
        <div className={parner.wrapInput}>
          <img className={parner.inputImgName} src={icon.Storefront} alt="" />
          <input
            className={parner.inputName}
            placeholder="Số lượng chi nhánh"
            type="text"
            name="quantity"
            id="quantity"
          />
        </div>

        <div className={parner.checkbox}>
          <Checkbox
            defaultChecked
            sx={{
              color: "#7161BA",
              "&.Mui-checked": {
                color: "#7161BA",
              },
            }}
          />
          <div className={parner.checkboxText}>
            <p>
              Tôi đã đọc và đồng ý với
              <a href={" "}> Điều khoản & Điều kiện của Myspa</a>
            </p>
          </div>
        </div>
        <div className={parner.btnWrap}>
          <ButtonCus
            text="Đăng kí ngay"
            fontSize="14px"
            lineHeight="20px"
            color="#ffffff"
            border="solid 1px var(--purple)"
            borderRadius="26px"
            backColor="var(--purple"
            onClick={(e: any) => onSubmit(e)}
          />
        </div>
      </form>
    </div>
  );
}
