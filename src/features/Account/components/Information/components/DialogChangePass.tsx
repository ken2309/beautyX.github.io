import React, { useState } from "react";
import ButtonCus from "../../../../../components/ButtonCus";
import icon from "../../../../../constants/icon";
import Dialog from "@mui/material/Dialog";
import * as Yup from "yup";
import { useFormik } from "formik";
import ForgotPass from "./DialogForgotPass";

export default function DialogChangePass(props: any) {
  const { setOpenChangePass, openChangePass, handleOpenNewPass } = props;
  const [typePass, setTypePass] = useState("password");
  const [openForgotPass, setOpenForgotPass] = React.useState(false);

  // Open Popup Forgot
  const handleOpenForgotPass = () => {
    setOpenForgotPass(true);
    handleCloseChange();
  };

  // Close Change Pass
  const handleCloseChange = () => {
    setOpenChangePass(false);
  };

  // Validate Form
  const formikForgotPass = useFormik({
    initialValues: {
      passwork: "",
    },
    validationSchema: Yup.object({
      passwork: Yup.string().required("Vui lòng nhập mật khẩu"),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleOpenNewPass();
      handleCloseChange();
    },
  });

  return (
    <div>
      <Dialog
        open={openChangePass}
        keepMounted
        onClose={handleCloseChange}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialog-forgot__password" style={{ width: "480px" }}>
          <h2>Thay đổi mật khẩu</h2>
          <p className="dialog-forgot__password-desc">
            Vui lòng nhập mật khẩu hiện tại để tiếp tục
          </p>
          <div className="sign-form__box">
            <img className="sign-form__box-icon" src={icon.Lock} alt="" />
            <input
              value={formikForgotPass.values.passwork}
              onChange={formikForgotPass.handleChange}
              name="passwork"
              id="passwork"
              type={typePass}
              placeholder="Mật khẩu hiện tại"
            />
            <img
              onMouseEnter={() => setTypePass("text")}
              onMouseLeave={() => setTypePass("password")}
              className="sign-form__box-icon-show"
              src={icon.eye}
              alt=""
            />
          </div>
          {formikForgotPass.errors.passwork &&
            formikForgotPass.touched.passwork && (
              <p className="err-text">{formikForgotPass.errors.passwork}</p>
            )}
          <div className="forgot-pass">
            <span onClick={() => handleOpenForgotPass()}>Quên mật khẩu?</span>
          </div>
          <div className="dialog-forgot__password-btn">
            <ButtonCus
              onClick={handleCloseChange}
              text="Hủy"
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
      <ForgotPass
        setOpenForgotPass={setOpenForgotPass}
        openForgotPass={openForgotPass}
      />
    </div>
  );
}
