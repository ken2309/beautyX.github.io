import React from "react";
import { partnerStyle } from "../style";
import ButtonCus from "../../../components/ButtonCus";
import Checkbox from "@mui/material/Checkbox";
import icon from "../../../constants/icon";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function FormPartner() {
  const parner = partnerStyle();
  const formikPartner = useFormik({
    initialValues: {
      Name: "",
      Phone: "",
      Email: "",
      Enterprise: "",
      Address: "",
      Quantity: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .min(2, "Tên lớn hơn 2 ký tự")
        .max(32, "Tên nhỏ hơn 32 ký tự")
        .required("Vui lòng nhập họ và tên")
        .matches(
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
          "Tên không đúng định dạng"
        ),
      Phone: Yup.string()
        .min(10, "Số điện thoại phải lớn hơn 10 chữ số")
        .max(11, "Số điện thoại phải nhỏ hơn 11 chữ số")
        .required("Vui lòng nhập số điện thoại")
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          "Số điện thoại không đúng định dạng"
        ),
      Email: Yup.string()
        .required("Vui lòng nhập Email")
        .matches(
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i,
          "Email không đúng định dạng Example@gmail.com"
        ),
      Enterprise: Yup.string()
        .required("Vui lòng nhập tên doanh nghiệp")
        .matches(
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ0-9\s\W|_]+$/,
          ""
        ),
      Address: Yup.string()
        .required("Vui lòng nhập địa chỉ")
        .matches(
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ0-9\s\W|_]+$/,
          ""
        ),
      Quantity: Yup.string()
        .max(2, "Vui lòng nhập tối đa 2 chữ số")
        .required("Vui lòng nhập số lượng")
        .matches(/^[0-9]+$/, "Vui lòng nhập số"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={parner.partnerRegis}>
      <h2 className={parner.partnerRegisTitle}>
        Trở thành đối tác Myspa để kinh doanh hiệu quả hơn trong giai đoạn
        chuyển đối số
      </h2>
      <form onSubmit={formikPartner.handleSubmit} className={parner.form}>
        <div style={{ width: "100%", padding: "0 0 8px 0" }}>
          <div className={parner.wrapInput}>
            <img className={parner.inputImgName} src={icon.User} alt="" />
            <input
              className={parner.inputName}
              value={formikPartner.values.Name}
              onChange={formikPartner.handleChange}
              placeholder="Họ và tên"
              type="text"
              name="Name"
              id="Name"
            />
          </div>
        </div>
        {formikPartner.errors.Name && formikPartner.touched.Name && (
          <p className={parner.errtext}>{formikPartner.errors.Name}</p>
        )}
        <div style={{ width: "100%", padding: "8px 0" }}>
          <div className={parner.wrapInput}>
            <img className={parner.inputImgName} src={icon.Phone} alt="" />
            <input
              className={parner.inputName}
              value={formikPartner.values.Phone}
              onChange={formikPartner.handleChange}
              placeholder="Số điện thoại"
              type="text"
              name="Phone"
              id="Phone"
            />
          </div>
        </div>
        {formikPartner.errors.Phone && formikPartner.touched.Phone && (
          <p className={parner.errtext}>{formikPartner.errors.Phone}</p>
        )}
        <div style={{ width: "100%", padding: "8px 0" }}>
          <div className={parner.wrapInput}>
            <img className={parner.inputImgName} src={icon.Message} alt="" />
            <input
              className={parner.inputName}
              value={formikPartner.values.Email}
              onChange={formikPartner.handleChange}
              placeholder="Email"
              type="text"
              name="Email"
              id="Email"
            />
          </div>
        </div>
        {formikPartner.errors.Email && formikPartner.touched.Email && (
          <p className={parner.errtext}>{formikPartner.errors.Email}</p>
        )}
        <div style={{ width: "100%", padding: "8px 0" }}>
          <div className={parner.wrapInput}>
            <img className={parner.inputImgName} src={icon.Buildings} alt="" />
            <input
              className={parner.inputName}
              value={formikPartner.values.Enterprise}
              onChange={formikPartner.handleChange}
              placeholder="Tên doanh nghiệp"
              type="text"
              name="Enterprise"
              id="Enterprise"
            />
          </div>
        </div>
        {formikPartner.errors.Enterprise &&
          formikPartner.touched.Enterprise && (
            <p className={parner.errtext}>{formikPartner.errors.Enterprise}</p>
          )}
        <div style={{ width: "100%", padding: "8px 0" }}>
          <div className={parner.wrapInput}>
            <img className={parner.inputImgName} src={icon.Location} alt="" />
            <input
              className={parner.inputName}
              value={formikPartner.values.Address}
              onChange={formikPartner.handleChange}
              placeholder="Địa chỉ"
              type="text"
              name="Address"
              id="Address"
            />
          </div>
        </div>
        {formikPartner.errors.Address && formikPartner.touched.Address && (
          <p className={parner.errtext}>{formikPartner.errors.Address}</p>
        )}
        <div style={{ width: "100%", padding: "8px 0" }}>
          <div className={parner.wrapInput}>
            <img className={parner.inputImgName} src={icon.Storefront} alt="" />
            <input
              className={parner.inputName}
              value={formikPartner.values.Quantity}
              onChange={formikPartner.handleChange}
              placeholder="Số lượng chi nhánh"
              type="text"
              name="Quantity"
              id="Quantity"
            />
          </div>
        </div>
        {formikPartner.errors.Quantity && formikPartner.touched.Quantity && (
          <p className={parner.errtext}>{formikPartner.errors.Quantity}</p>
        )}
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
            onClick={formikPartner.handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}
