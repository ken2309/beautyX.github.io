import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonCus from "../../../../components/ButtonCus";
import DialogChangePass from "./components/DialogChangePass";
import DialogNewPass from "./components/DialogNewPass";
import Form from "./components/Form";
import "./style.css";
import { t } from "i18next";
function Information(props: any) {
  const [openChangePass, setOpenChangePass] = useState(false);
  const [openNewPass, setOpenNewPass] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      gmail: "",
      phone: "",
      address: "",
      address2: "",
      sex: "",
      ok: "",
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Vui lòng nhập địa chỉ"),
      name: Yup.string()
        .min(2, "Tên lớn hơn 2 ký tự")
        .max(32, "Tên nhỏ hơn 32 ký tự")
        .required("Vui lòng nhập họ và tên"),
      // .matches(
      //   /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
      //   "Tên không đúng định dạng"
      // ),
      gmail: Yup.string()
        .required(t("form.please_enter_email"))
        .matches(
          // eslint-disable-next-line no-useless-escape
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i,
          t("form.email_format")
        ),
      phone: Yup.string()
        .min(10, "Số điện thoại phải lớn hơn 10 chữ số")
        .max(11, "Số điện thoại phải nhỏ hơn 11 chữ số")
        .required("Vui lòng nhập số điện thoại"),
      // .matches(
      //   /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
      //   "Số điện thoại không đúng định dạng"
      // ),
      sex: Yup.string().required(t("form.please_choose_sex")),
    }),
    onSubmit: (values: any) => {
      console.log("values :>> ", values);
      // handleCloseContact();
    },
  });
  // Open Change Pass
  const handleOpenChange = () => {
    setOpenChangePass(true);
  };
  // Open New Pass
  const handleOpenNewPass = () => {
    setOpenNewPass(true);
  };

  return (
    <div className="info_section">
      <Form formik={formik} />

      <div className="btn-success">
        <ButtonCus
          onClick={handleOpenChange}
          text="Thay đổi mật khẩu"
          fontSize="14px"
          lineHeight="20px"
          color="var(--purple)"
          border="solid 1px var(--purple)"
          borderRadius="26px"
          backColor="transparent"
        />
        <ButtonCus
          onClick={formik.handleSubmit}
          text="Lưu thay đổi"
          fontSize="14px"
          lineHeight="20px"
          color="#ffffff"
          border="solid 1px var(--purple)"
          borderRadius="26px"
          backColor="var(--purple"
          type="button"
        />
      </div>
      <DialogChangePass
        openChangePass={openChangePass}
        setOpenChangePass={setOpenChangePass}
        handleOpenNewPass={handleOpenNewPass}
      />
      <DialogNewPass
        openNewPass={openNewPass}
        setOpenNewPass={setOpenNewPass}
      />
    </div>
  );
}
export default Information;
