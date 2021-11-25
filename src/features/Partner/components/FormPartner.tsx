import React from "react";
import { partnerStyle } from "../style";
import ButtonCus from "../../../components/ButtonCus";
import Checkbox from "@mui/material/Checkbox";
import icon from "../../../constants/icon";
import useFormValidate from "../../../assets/hook/useFormValidate";

export default function FormPartner() {
  const parner = partnerStyle();
  let { form, error, inputChange, check } = useFormValidate(
    {
      name: "",
      phone: "",
      email: "",
      enterprise: "",
      address: "",
      quantity: "",
    },
    {
      rule: {
        name: {
          required: true,
          pattern: "name",
          min: 2,
          max: 32,
        },
        phone: {
          required: true,
          pattern: "phone",
          min: 9,
          max: 11,
        },
        email: {
          required: true,
          pattern: "email",
          min: 11,
        },
        enterprise: {
          required: true,
          pattern: "enterprise",
          min: 2,
          max: 32,
        },
        address: {
          required: true,
          pattern: "address",
          min: 6,
          max: 32,
        },
        quantity: {
          required: true,
          pattern: "quantity",
          min: 1,
          max: 2,
        },
      },
      message: {
        name: {
          required: "* Họ và tên không được bỏ trống",
          pattern: "Tên phải được viết bằng chữ in hoặc chữ thường",
        },
        phone: {
          required: "* Số điện thoại không được bỏ trống",
          pattern: "Số điện thoại bắt đầu bằng 84 hoặc 0",
        },
        email: {
          required: "* Email không được bỏ trống",
          pattern: "Email không đúng định dạng example@gmail.com",
        },
        enterprise: {
          required: "* Tên doanh nghiệp không được bỏ trống",
        },
        address: {
          required: "* Địa chỉ không được bỏ trống",
        },
        quantity: {
          required: "* Số lượng không được bỏ trống",
        },
      },
    }
  );

  function onSubmit(e: React.FormEvent<HTMLInputElement>) {
    console.log(e);
    e.preventDefault();
    let errObj = check();
    if (Object.keys(errObj).length === 0) {
      console.log(form);
      //call API
    }
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
            value={form.name}
            onChange={inputChange}
            placeholder="Họ và tên"
            type="text"
            name="name"
            id="name"
          />
        </div>
        {error.name && <p className={parner.errText}>{error.name}</p>}
        <div className={parner.wrapInput}>
          <img className={parner.inputImgName} src={icon.Phone} alt="" />
          <input
            className={parner.inputName}
            value={form.phone}
            onChange={inputChange}
            placeholder="Số điện thoại"
            type="text"
            name="phone"
            id="phone"
          />
        </div>
        {error.phone && <p className={parner.errText}>{error.phone}</p>}
        <div className={parner.wrapInput}>
          <img className={parner.inputImgName} src={icon.Message} alt="" />
          <input
            className={parner.inputName}
            value={form.email}
            onChange={inputChange}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
          />
        </div>
        {error.email && <p className={parner.errText}>{error.email}</p>}
        <div className={parner.wrapInput}>
          <img className={parner.inputImgName} src={icon.Buildings} alt="" />
          <input
            className={parner.inputName}
            value={form.enterprise}
            onChange={inputChange}
            placeholder="Tên doanh nghiệp"
            type="text"
            name="enterprise"
            id="enterprise"
          />
        </div>
        {error.enterprise && (
          <p className={parner.errText}>{error.enterprise}</p>
        )}
        <div className={parner.wrapInput}>
          <img className={parner.inputImgName} src={icon.Location} alt="" />
          <input
            className={parner.inputName}
            value={form.address}
            onChange={inputChange}
            placeholder="Địa chỉ"
            type="text"
            name="address"
            id="address"
          />
        </div>
        {error.address && <p className={parner.errText}>{error.address}</p>}
        <div className={parner.wrapInput}>
          <img className={parner.inputImgName} src={icon.Storefront} alt="" />
          <input
            className={parner.inputName}
            value={form.quantity}
            onChange={inputChange}
            placeholder="Số lượng chi nhánh"
            type="text"
            name="quantity"
            id="quantity"
          />
        </div>
        {error.quantity && <p className={parner.errText}>{error.quantity}</p>}

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
