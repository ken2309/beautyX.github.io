import React, { useContext, useState } from "react";
import icon from "../../../constants/icon";
import { Checkbox } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
// import Dialog from "@mui/material/Dialog";
// import ButtonCus from "../../../components/ButtonCus";
import axios from 'axios'
import { AppContext } from '../../../context/AppProvider';
import PopupNoti from '../../SignPage/components/PopupNoti';
import {CircularProgress} from '@mui/material';
import ForgotPass from './ForgotPass';
import Verification from './Verification';
import NewPass from './NewPass';

function SignIn(props: any) {
  const { t, setSign } = useContext(AppContext)
  const {
    activeTabSign,
    setActiveTabSign,
    setOpenSignIn,
    // handleClickOpenVerification,
    // handleCloseForgotPass,
    // handleClickOpenNewPass,
    // handleCloseVerification
  } = props;
  const [typePass, setTypePass] = useState("password");
  const [openForgotPass, setOpenForgotPass] = React.useState(false);
  const [openVerification, setOpenVerification] = React.useState(false);
  const [openNewPass, setOpenNewPass] = React.useState(false);
  const [loading, setLoading] = useState(false)
  const [errPass, setErrPass] = useState('')
  const [display_email, setDisplay_email] = useState('')
  const [popup, setPopup] = useState(false)

  //submit form login
  //handle submit login form
  const handleLogin = (values: any) => {
    setLoading(true);
    setDisplay_email(values.email);
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, values)
      .then(function (response: any) {
        window.sessionStorage.setItem('_WEB_US', JSON.stringify(response.context))
        window.sessionStorage.setItem('_WEB_TK', response.context.token)
        setSign(true);
        setLoading(false);
        setOpenSignIn(false);
      })
      .catch(function (err) {
        setLoading(false);
        if (err.response?.status === 401) {
          setErrPass('Mật khẩu chưa chính xác. Vui lòng thử lại !')
        } else if (err.response?.status === 404) {
          setPopup(true)
        }
      })
  }

  // Open Popup Forgot
  const handleClickOpenForgotPass = () => {
    setOpenForgotPass(true);
  };

  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Vui lòng nhập email/số điện thoại"),
      password: Yup.string()
        .min(6, "Mật khẩu lớn hơn 8 ký tự")
        .required("Vui lòng nhập mật khẩu"),
      // .matches(
      //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      //   "Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 số và 1 ký tự chữ 1 đặc biệt"
      // ),
    }),
    //SUBMIT LOGIN FORM
    onSubmit: (values) => {
      handleLogin(values)
    },
  });
  //form forgot pass
  // const formikForgotPass = useFormik({
  //   initialValues: {
  //     email: "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string()
  //       .required("Vui lòng nhập Email/số điện thoại")
  //       .matches(
  //         // eslint-disable-next-line no-useless-escape
  //         /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i,
  //         "Vui lòng nhập đúng định dạng Example@gmail.com"
  //       ),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //     handleClickOpenVerification();
  //     handleCloseForgotPass();
  //   },
  // });
  // const formikVerification = useFormik({
  //   initialValues: {
  //     verification: "",
  //   },
  //   validationSchema: Yup.object({
  //     verification: Yup.string()
  //       .required("Vui lòng nhập mã xác nhận")
  //       .min(6, "Mã xác nhận lớn hơn 6 ký tự")
  //       .max(6, "Mã xác nhận nhỏ hơn 6 ký tự"),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //     handleCloseVerification();
  //     handleClickOpenNewPass();
  //   },
  // });
  // const formikNewpass = useFormik({
  //   initialValues: {
  //     password: "",
  //     confirmPassword: "",
  //   },
  //   validationSchema: Yup.object({
  //     password: Yup.string()
  //       .min(8, "Mật khẩu lớn hơn 8 ký tự")
  //       .max(32, "Mật khẩu tối đa 32 kí tự")
  //       .required("Vui lòng nhập mật khẩu mới")
  //       .matches(
  //         /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //         "Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 số và 1 ký tự chữ 1 đặc biệt"
  //       ),
  //     confirmPassword: Yup.string()
  //       .required("Vui lòng xác nhận lại mật khẩu mới")
  //       .oneOf([Yup.ref("password"), null], "Mật khẩu mới không khớp"),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  return (
    <div
      style={activeTabSign === 1 ? { display: "block" } : { display: "none" }}
    >
      <form
        onSubmit={formikLogin.handleSubmit}
        autoComplete="off"
        className="flex-column sign-form"
      >
        <div style={{ width: "100%", padding: "0 0 8px 0" }}>
          <div className="sign-form__box">
            <img className="sign-form__box-icon" src={icon.User} alt="" />
            <input
              name="email"
              value={formikLogin.values.email}
              onChange={formikLogin.handleChange}
              type="text"
              placeholder={t("Home.Sign_in_pl_user_name")}
            />
          </div>
          {formikLogin.errors.email && formikLogin.touched.email && (
            <p className="err-text">{formikLogin.errors.email}</p>
          )}
        </div>
        <div style={{ width: "100%", padding: "8px 0" }}>
          <div className="sign-form__box">
            <img className="sign-form__box-icon" src={icon.Lock} alt="" />
            <input
              name="password"
              value={formikLogin.values.password}
              onChange={formikLogin.handleChange}
              type={typePass}
              placeholder={t("Home.Sign_in_pl_password")}
            />
            <img
              onMouseEnter={() => setTypePass("text")}
              onMouseLeave={() => setTypePass("password")}
              className="sign-form__box-icon-show"
              src={icon.eye}
              alt=""
            />
          </div>
          {formikLogin.errors.password && formikLogin.touched.password && (
            <p className="err-text">{formikLogin.errors.password}</p>
          )}
          <p className="err-text">{errPass}</p>
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
            <span>{t("Home.Sign_remember")}</span>
          </div>
          <span onClick={handleClickOpenForgotPass}>
            {t("Home.Sign_forgot")} ?
          </span>
        </div>
        <button
          disabled={loading === true ? true : false}
          type="submit"
          className="sign-btn"
          style={loading === true ? { position: 'relative', opacity: '0.6' } : {}}
        >
          {
            loading === true ?
              <div className="sign-loading">
                <CircularProgress size="25px" color="inherit" />
              </div> : <></>
          }
          {t('Home.Sign_in')}
        </button>
      </form>
      <p className="sign-or">{t('Home.Sign_or')}</p>
      <div className="flex-row sign-other-social">
        <img src={icon.google} alt="" />
        <img src={icon.facebook} alt="" />
      </div>
      <p className="sign-other-setup">
        Bạn chưa có tài khoản
        <span onClick={() => setActiveTabSign(2)}>Đăng ký ngay</span>
      </p>
      {/* Dialog ForgotPass */}
      <ForgotPass
        setOpenForgotPass={setOpenForgotPass}
        setOpenVerification={setOpenVerification}
        openForgotPass={openForgotPass}
      />
      {/* Dialog Verification */}
      <Verification
        setOpenVerification={setOpenVerification}
        setOpenNewPass={setOpenNewPass}
        openVerification={openVerification}
      />
      {/* Dialog New Pass */}
      <NewPass openNewPass={openNewPass} setOpenNewPass={setOpenNewPass} />
      <PopupNoti
        popup={popup}
        setPopup={setPopup}
        isSignIn={true}
        title={`Emai "${display_email}" ${t('form.is_not_registered')}`}
      />
    </div>
  );
}

export default SignIn;
