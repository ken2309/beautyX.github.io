import React, { useContext, useState } from "react";
import icon from "../../../constants/icon";
import { Checkbox } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dialog from "@mui/material/Dialog";
import ButtonCus from "../../../components/ButtonCus";
import auth from '../../../api/authApi';
import { AppContext } from '../../../context/AppProvider'

function SignIn(props: any) {
  const { t } = useContext(AppContext)
  const { activeTabSign, setActiveTabSign, setOpenSignIn } = props;
  const [typePass, setTypePass] = useState("password");
  const [openForgotPass, setOpenForgotPass] = React.useState(false);
  const [openVerification, setOpenVerification] = React.useState(false);
  const [openNewPass, setOpenNewPass] = React.useState(false);

  //submit form login
  async function handleSubmitLogin(params: any) {
    try {
      const res = await auth.login(params);
      if (res.data.status === 200) {
        const uuid = res.data.context.token;
        const userInfo = res.data.context;
        window.sessionStorage.setItem('_WEB_US', JSON.stringify(userInfo));
        window.sessionStorage.setItem('_WEB_TK', uuid);
        window.location.reload();
        setOpenSignIn(false);
      }
    } catch (err) {
      console.log(err)
    }
  }


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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Vui lòng nhập email/số điện thoại"),
      password: Yup.string()
        .min(6, "Mật khẩu lớn hơn 8 ký tự")
        .required("Vui lòng nhập mật khẩu")
        // .matches(
        //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        //   "Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 số và 1 ký tự chữ 1 đặc biệt"
        // ),
    }),
    //SUBMIT LOGIN FORM
    onSubmit: (values) => {
      handleSubmitLogin(values)
    },
  });
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
      console.log(values);
      handleClickOpenVerification();
      handleCloseForgotPass();
    },
  });
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
      console.log(values);
      handleCloseVerification();
      handleClickOpenNewPass();
    },
  });
  const formikNewpass = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Mật khẩu lớn hơn 8 ký tự")
        .max(32, "Mật khẩu tối đa 32 kí tự")
        .required("Vui lòng nhập mật khẩu mới")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 số và 1 ký tự chữ 1 đặc biệt"
        ),
      confirmPassword: Yup.string()
        .required("Vui lòng xác nhận lại mật khẩu mới")
        .oneOf([Yup.ref("password"), null], "Mật khẩu mới không khớp"),
    }),
    onSubmit: (values) => {
      console.log(values);
      //handleCloseNewPass();
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
        <div style={{ width: "100%", padding: "0 0 8px 0" }}>
          <div className="sign-form__box">
            <img className="sign-form__box-icon" src={icon.User} alt="" />
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              type="text"
              placeholder={t('Home.Sign_in_pl_user_name')}
            />
          </div>
          {formik.errors.email && formik.touched.email && (
            <p className="err-text">{formik.errors.email}</p>
          )}
        </div>
        <div style={{ width: "100%", padding: "8px 0" }}>
          <div className="sign-form__box">
            <img className="sign-form__box-icon" src={icon.Lock} alt="" />
            <input
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              type={typePass}
              placeholder={t('Home.Sign_in_pl_password')}
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
            <span>{t('Home.Sign_remember')}</span>
          </div>
          <span onClick={handleClickOpenForgotPass}>{t('Home.Sign_forgot')} ?</span>
        </div>
        <button type="submit" className="sign-btn">
          {t('Home.Sign_in')}
        </button>
      </form>
      <p className="sign-or">{t}</p>
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
              type={typePass}
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
          <div className="sign-form__box">
            <div
              className="flex-column w-100"
              style={{ width: "100%", padding: "8px 0" }}
            >
              <img className="sign-form__box-icon " src={icon.Lock} alt="" />
              <input
                autoComplete="off"
                value={formikNewpass.values.password}
                onChange={formikNewpass.handleChange}
                name="password"
                id="password"
                type={typePass}
                placeholder="Mật khẩu mới"
              />
              <img
                onMouseEnter={() => setTypePass("text")}
                onMouseLeave={() => setTypePass("password")}
                className="sign-form__box-icon-show"
                src={icon.eye}
                alt=""
              />
            </div>
          </div>
          {formikNewpass.errors.password && formikNewpass.touched.password && (
            <p className="err-text">{formikNewpass.errors.password}</p>
          )}
          <div className="sign-form__box">
            <div
              className="flex-column w-100"
              style={{ width: "100%", padding: "8px 0" }}
            >
              <img className="sign-form__box-icon" src={icon.Lock} alt="" />
              <input
                autoComplete="off"
                value={formikNewpass.values.confirmPassword}
                onChange={formikNewpass.handleChange}
                name="confirmPassword"
                id="confirmPassword"
                type={typePass}
                placeholder="Nhận lại mật khẩu mới"
              />
              <img
                onMouseEnter={() => setTypePass("text")}
                onMouseLeave={() => setTypePass("password")}
                className="sign-form__box-icon-show"
                src={icon.eye}
                alt=""
              />
            </div>
          </div>
          {formikNewpass.errors.confirmPassword &&
            formikNewpass.touched.confirmPassword && (
              <p className="err-text">{formikNewpass.errors.confirmPassword}</p>
            )}

          <div className="dialog-forgot__password-btn">
            <ButtonCus
              onClick={handleCloseNewPass}
              text="Hủy"
              backColor="var(--bg-color)"
              color="var(--purple)"
              fontSize="20px"
              lineHeight="24px"
              borderRadius="20px"
            />
            <ButtonCus
              onClick={formikNewpass.handleSubmit}
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
    </div>
  );
}

export default SignIn;
