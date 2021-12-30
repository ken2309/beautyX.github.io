import { Dialog } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import ButtonCus from "../../../components/ButtonCus";
import icon from "../../../constants/icon";
import * as Yup from "yup";

export default function PopupForgot(props: any) {
  const { openForgotPass, setOpenForgotPass, setOpenVerification } = props;
  // mở popup veri code
  const handleClickOpenVerification = () => {
    setOpenVerification(true);
  };
  // đóng popup forgot
  const handleCloseForgotPass = () => {
    setOpenForgotPass(false);
  };
  //form forgot pass
  const formikForgotPass = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Vui lòng nhập Email/số điện thoại")
        .matches(
          // eslint-disable-next-line no-useless-escape
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i,
          "Vui lòng nhập đúng định dạng Example@gmail.com"
        ),
    }),
    onSubmit: (values) => {
      console.log("Values Forgot", values);
      handleClickOpenVerification();
      handleCloseForgotPass();
    },
  });
  return (
    <div>
      {/* dialog quên mật khẩu */}
      <Dialog
        open={openForgotPass}
        keepMounted
        onClose={handleCloseForgotPass}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialog-forgot__password">
          <h2>Quên mật khẩu?</h2>
          <p className="dialog-forgot__password-desc">
            Vui lòng cho chúng tôi biết thông tin đăng ký của bạn
          </p>
          <div className="sign-form__box">
            <img className="sign-form__box-icon" src={icon.Lock} alt="" />
            <input
              value={formikForgotPass.values.email}
              onChange={formikForgotPass.handleChange}
              name="email"
              id="email"
              type="text"
              placeholder="Email/ Số điện thoại"
            />
          </div>
          {formikForgotPass.errors.email && formikForgotPass.touched.email && (
            <p className="err-text">{formikForgotPass.errors.email}</p>
          )}

          <div className="dialog-forgot__password-btn">
            <ButtonCus
              onClick={handleCloseForgotPass}
              text="Trở lại"
              backColor="var(--bg-color)"
              color="var(--purple)"
              fontSize="20px"
              lineHeight="24px"
              borderRadius="20px"
            />
            <ButtonCus
              onClick={formikForgotPass.handleSubmit}
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
