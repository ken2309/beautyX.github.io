import React, { useState } from "react";
import icon from "../../../constants/icon";
import { Checkbox } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import ButtonCus from "../../../components/ButtonCus";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function SignIn(props: any) {
  const { activeTabSign, setActiveTabSign } = props;
  const [typePass, setTypePass] = useState("password");
  const [openForgotPass, setOpenForgotPass] = React.useState(false);
  const [openVerification, setOpenVerification] = React.useState(false);
  const [openNewPass, setOpenNewPass] = React.useState(false);

  // mở popup forgot
  const handleClickOpenForgotPass = () => {
    setOpenForgotPass(true);
  };
  // mở popup veri code
  const handleClickOpenVerification = () => {
    setOpenVerification(true);
  };
  // mở popup New Pass
  const handleClickOpenNewPass = () => {
    setOpenNewPass(true);
  };

  // đóng popup forgot
  const handleCloseForgotPass = () => {
    setOpenForgotPass(false);
  };
  // đóng popup veri code
  const handleCloseVerification = () => {
    setOpenVerification(false);
  };
  // đóng popup New Pass
  const handleCloseNewPass = () => {
    setOpenNewPass(false);
  };

  // back popup forgot
  function handleClickBackForgotPass() {
    handleCloseForgotPass();
  }
  // next popup forgot
  function handleClickNextForgotPass(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    handleClickOpenVerification();
    handleCloseForgotPass();
  }

  // back popup veri
  function handleClickBackVerification() {
    handleCloseVerification();
  }
  // next popup veri
  function handleClickNextVerification(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    handleCloseVerification();
    handleClickOpenNewPass();
  }

  //back popup new pass
  function handleClickBackNewPass() {
    handleCloseNewPass();
  }
  // next popup new pass
  function handleClickNextNewPass(e: React.FormEvent<HTMLInputElement>) {
    console.log("next NewPass");
    e.preventDefault();
    handleCloseNewPass();
  }
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Vui lòng nhập email/số điện thoại"),
      password: Yup.string()
        .min(6, "Mật khẩu lơn hơn 6 ký tự")
        .required("Vui lòng nhập mật khẩu"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div
      style={activeTabSign === 1 ? { display: "block" } : { display: "none" }}
    >
      <form
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        className="flex-column sign-form"
      >
        <div style={{ width: "100%", padding: "6px 0px" }}>
          <div className="sign-form__box">
            <img className="sign-form__box-icon" src={icon.User} alt="" />
            <input
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              type="text"
              placeholder="Email/ Số điện thoại"
            />
          </div>
          {formik.errors.userName && formik.touched.userName && (
            <p className="err-text">{formik.errors.userName}</p>
          )}
        </div>
        <div style={{ width: "100%", padding: "6px 0px" }}>
          <div className="sign-form__box">
            <img className="sign-form__box-icon" src={icon.Lock} alt="" />
            <input
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              type={typePass}
              placeholder="Mật khẩu"
            />
            <img
              onMouseEnter={() => setTypePass("text")}
              onMouseLeave={() => setTypePass("password")}
              className="sign-form__box-icon-show"
              src={icon.eye}
              alt=""
            />
          </div>
          {formik.errors.password && formik.touched.password && (
            <p className="err-text">{formik.errors.password}</p>
          )}
        </div>
        <div className="signIn-checkbox sign-check">
          <div className="signIn-checkbox__wrap">
            <Checkbox
              defaultChecked
              sx={{
                color: "#7161BA",
                "&.Mui-checked": {
                  color: "#7161BA",
                },
              }}
            />
            <span>Ghi nhớ mật khẩu</span>
          </div>
          <span onClick={handleClickOpenForgotPass}>Quên mật khẩu ?</span>
        </div>
        <button type="submit" className="sign-btn">
          Đăng nhập
        </button>
      </form>
      <p className="sign-or">Hoặc đăng nhập với</p>
      <div className="flex-row sign-other-social">
        <img src={icon.google} alt="" />
        <img src={icon.facebook} alt="" />
      </div>
      <p className="sign-other-setup">
        Bạn chưa có tài khoản
        <span onClick={() => setActiveTabSign(2)}>Đăng ký ngay</span>
      </p>
      {/* dialog quên mật khẩu */}
      <Dialog
        open={openForgotPass}
        TransitionComponent={Transition}
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
              autoComplete="off"
              name="forgotPass"
              id="forgotPass"
              type="text"
              placeholder="Email/ Số điện thoại"
            />
          </div>

          <div className="dialog-forgot__password-btn">
            <ButtonCus
              onClick={handleClickBackForgotPass}
              text="Trở lại"
              backColor="var(--bg-gray)"
              color="var(--purple)"
              fontSize="20px"
              lineHeight="24px"
              borderRadius="20px"
            />
            <ButtonCus
              onClick={(e: any) => handleClickNextForgotPass(e)}
              text="Tiếp tục"
              backColor="var(--purple)"
              color="var(--bg-gray)"
              fontSize="20px"
              lineHeight="24px"
              borderRadius="20px"
            />
          </div>
        </div>
      </Dialog>
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
              className="input-Verification"
              autoComplete="off"
              name="verification"
              id="verification"
              type={typePass}
            />
          </div>

          <div className="dialog-forgot__password-btn">
            <ButtonCus
              onClick={handleClickBackVerification}
              text="Trở lại"
              backColor="var(--bg-gray)"
              color="var(--purple)"
              fontSize="20px"
              lineHeight="24px"
              borderRadius="20px"
            />
            <ButtonCus
              onClick={(e: any) => handleClickNextVerification(e)}
              text="Tiếp tục"
              backColor="var(--purple)"
              color="var(--bg-gray)"
              fontSize="20px"
              lineHeight="24px"
              borderRadius="20px"
            />
          </div>
        </div>
      </Dialog>
      {/* dialog đặt lại mật khẫu mới */}
      <Dialog
        open={openNewPass}
        keepMounted
        onClose={handleCloseNewPass}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialog-forgot__password">
          <h2>Đặt lại mật khẩu mới</h2>
          <p className="dialog-forgot__password-desc">
            Lưu ý mật khẩu mới không được trùng với các mật khẩu được <br />{" "}
            dùng trước đó
          </p>
          <div className="sign-form__box mb-16">
            <img className="sign-form__box-icon " src={icon.Lock} alt="" />
            <input
              autoComplete="off"
              name="newpass"
              id="newpass"
              type="text"
              placeholder="Email/ Số điện thoại"
            />
          </div>
          <div className="sign-form__box">
            <img className="sign-form__box-icon" src={icon.Lock} alt="" />
            <input
              autoComplete="off"
              name="newpass"
              id="newpass"
              type="text"
              placeholder="Email/ Số điện thoại"
            />
          </div>

          <div className="dialog-forgot__password-btn">
            <ButtonCus
              onClick={handleClickBackNewPass}
              text="Trở lại"
              backColor="var(--bg-gray)"
              color="var(--purple)"
              fontSize="20px"
              lineHeight="24px"
              borderRadius="20px"
            />
            <ButtonCus
              onClick={(e: any) => handleClickNextNewPass(e)}
              text="Xác nhận"
              backColor="var(--purple)"
              color="var(--bg-gray)"
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

export default SignIn;
