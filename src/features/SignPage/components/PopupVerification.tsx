import { Dialog } from "@mui/material";
import React from "react";
import ButtonCus from "../../../components/ButtonCus";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function PopupVerification(props: any) {
  const { openVerification, setOpenVerification, handleClickOpenNewPass } =
    props;
  //const [typePass, setTypePass] = useState("password");
  // đóng popup veri code
  const handleCloseVerification = () => {
    setOpenVerification(false);
  };
  const formikVerification = useFormik({
    initialValues: {
      verification: "",
    },
    validationSchema: Yup.object({
      verification: Yup.string()
        .required("Vui lòng nhập mã xác nhận")
        .min(6, "Mã xác nhận lớn hơn 6 ký tự")
        .max(6, "Mã xác nhận nhỏ hơn 6 ký tự"),
    }),
    onSubmit: (values) => {
      console.log("Values Veri", values);
      handleCloseVerification();
      handleClickOpenNewPass();
    },
  });
  return (
    <div>
      {/* dialog nhập mã xác nhận */}
      <Dialog
        open={openVerification}
        keepMounted
        onClose={handleCloseVerification}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialog-forgot__password">
          <h2>Nhập mã xác nhận</h2>
          <p className="dialog-forgot__password-desc">
            Mã xác nhận đã được gửi về email/số điện thoại
          </p>
          <div className="sign-form__box">
            <input
              value={formikVerification.values.verification}
              onChange={formikVerification.handleChange}
              className="input-Verification"
              name="verification"
              id="verification"
              type='password'
            />
          </div>
          {formikVerification.errors.verification &&
            formikVerification.touched.verification && (
              <p className="err-text">
                {formikVerification.errors.verification}
              </p>
            )}
          <div className="dialog-forgot__password-btn">
            <ButtonCus
              onClick={handleCloseVerification}
              text="Trở lại"
              backColor="var(--bg-color)"
              color="var(--purple)"
              fontSize="20px"
              lineHeight="24px"
              borderRadius="20px"
            />
            <ButtonCus
              onClick={formikVerification.handleSubmit}
              text="Tiếp tục"
              backColor="var(--purple)"
              color="var(--bg-color)"
              fontSize="20px"
              lineHeight="24px"
              borderRadius="20px"
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
