import { Dialog } from "@mui/material";
import React from "react";
import ButtonCus from "../../../components/ButtonCus";
import icon from "../../../constants/icon";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function PopupDetailContact(props: any) {
  const { setOpenPopupContact, openPopupContact } = props;
  function handleClosePopupContact() {
    setOpenPopupContact(false);
  }
  const formikContact = useFormik({
    initialValues: {
      name: "",
      gmail: "",
      phone: "",
      address: "",
      business: "",
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Vui lòng nhập địa chỉ"),
      business: Yup.string().required("Vui lòng nhập loại kinh doanh"),
      name: Yup.string()
        .min(2, "Tên lớn hơn 2 ký tự")
        .max(32, "Tên nhỏ hơn 32 ký tự")
        .required("Vui lòng nhập họ và tên")
        .matches(
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
          "Tên không đúng định dạng"
        ),
      gmail: Yup.string()
        .required("Vui lòng nhập Email")
        .matches(
          // eslint-disable-next-line no-useless-escape
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i,
          "Email không đúng định dạng Example@gmail.com"
        ),
      phone: Yup.string()
        .min(10, "Số điện thoại phải lớn hơn 10 chữ số")
        .max(11, "Số điện thoại phải nhỏ hơn 11 chữ số")
        .required("Vui lòng nhập số điện thoại")
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          "Số điện thoại không đúng định dạng"
        ),
    }),
    onSubmit: (values: any) => {
      console.log(values);
      // handleCloseContact();
    },
  });
  return (
    <Dialog onClose={handleClosePopupContact} open={openPopupContact}>
      <div className="form-contact">
        <h2 className="form-contact__title">Liên hệ tư vấn</h2>
        <span className="form-contact__desc">
          Vui lòng cho chúng tôi biết thông tin của bạn
        </span>

        <div className="wrap-btn">
          <div className="sign-form__box">
            <img className="sign-form__box-icon " src={icon.User} alt="" />
            <input
              autoComplete="off"
              value={formikContact.values.name}
              onChange={formikContact.handleChange}
              name="name"
              id="name"
              placeholder="Họ và tên"
            />
          </div>
          {formikContact.errors.name && formikContact.touched.name && (
            <p className="err-text">{formikContact.errors.name}</p>
          )}

          <div className="sign-form__box">
            <img className="sign-form__box-icon " src={icon.Message} alt="" />
            <input
              autoComplete="off"
              value={formikContact.values.gmail}
              onChange={formikContact.handleChange}
              name="gmail"
              id="gmail"
              placeholder="Email"
            />
          </div>
          {formikContact.errors.gmail && formikContact.touched.gmail && (
            <p className="err-text">{formikContact.errors.gmail}</p>
          )}

          <div className="sign-form__box">
            <img className="sign-form__box-icon " src={icon.Phone} alt="" />
            <input
              autoComplete="off"
              value={formikContact.values.phone}
              onChange={formikContact.handleChange}
              name="phone"
              id="phone"
              placeholder="Số điện thọai"
            />
          </div>
          {formikContact.errors.phone && formikContact.touched.phone && (
            <p className="err-text">{formikContact.errors.phone}</p>
          )}

          <div className="sign-form__box">
            <img className="sign-form__box-icon " src={icon.DeskAlt} alt="" />
            <input
              autoComplete="off"
              value={formikContact.values.business}
              onChange={formikContact.handleChange}
              name="business"
              id="business"
              placeholder="Loại kinh doanh"
            />
          </div>
          {formikContact.errors.business && formikContact.touched.business && (
            <p className="err-text">{formikContact.errors.business}</p>
          )}

          <div className="sign-form__box">
            <img className="sign-form__box-icon " src={icon.Location} alt="" />
            <input
              autoComplete="off"
              value={formikContact.values.address}
              onChange={formikContact.handleChange}
              name="address"
              id="address"
              placeholder="Địa chỉ"
            />
          </div>
          {formikContact.errors.address && formikContact.touched.address && (
            <p className="err-text">{formikContact.errors.address}</p>
          )}
        </div>

        <div className="dialog-forgot__password-btn">
          <ButtonCus
            onClick={handleClosePopupContact}
            text="Hủy"
            backColor="var(--bg-color)"
            color="var(--purple)"
            fontSize="20px"
            lineHeight="24px"
            borderRadius="20px"
          />
          <ButtonCus
            onClick={formikContact.handleSubmit}
            text="Xác nhận"
            backColor="var(--purple)"
            color="var(--bg-color)"
            fontSize="20px"
            lineHeight="24px"
            borderRadius="20px"
          />
        </div>
      </div>
    </Dialog>
  );
}
