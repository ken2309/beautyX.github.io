import React, { useContext, useState } from "react";
import icon from "../../../constants/icon";
import { Checkbox } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AxiosError } from "axios";
import auth from "../../../api/authApi";
import { AppContext } from "../../../context/AppProvider";
import PopupNoti from "../../SignPage/components/PopupNoti";
import { CircularProgress } from "@mui/material";
import ForgotPass from "./ForgotPass";
import Verification from "./Verification";
import NewPass from "./NewPass";
import { useHistory } from "react-router-dom";

function SignIn(props: any) {
  const { t, setSign } = useContext(AppContext);
  const history = useHistory();
  const {
    activeTabSign,
    setActiveTabSign,
    setOpenSignIn,
    useForSignRes,
    // handleClickOpenVerification,
    // handleCloseForgotPass,
    // handleClickOpenNewPass,
    // handleCloseVerification
  } = props;
  const [typePass, setTypePass] = useState("password");
  const [openForgotPass, setOpenForgotPass] = React.useState(false);
  const [openVerification, setOpenVerification] = React.useState(false);
  const [openNewPass, setOpenNewPass] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [errPass, setErrPass] = useState("");
  const [display_email, setDisplay_email] = useState("");
  const [popup, setPopup] = useState(false);

  //submit form login
  //handle submit login form
  //handle submit login form
  async function submitLogin(values: any) {
    try {
      const response = await auth.login(values);
      localStorage.setItem("_WEB_US", JSON.stringify(response.data.context));
      localStorage.setItem("_WEB_TK", response.data.context.token);
      setSign(true);
      if (useForSignRes === true) {
        history.goBack();
      } else {
        setOpenSignIn(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const err = error as AxiosError;
      switch (err.response?.status) {
        case 401:
          return setErrPass("M???t kh???u ch??a ch??nh x??c. Vui l??ng th??? l???i !");
        case 404:
          return setPopup(true);
        default:
          break;
      }
    }
  }
  const handleLogin = (values: any) => {
    setLoading(true);
    setDisplay_email(values.email);
    submitLogin(values);
  };

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
      email: Yup.string().required("Vui l??ng nh???p email/s??? ??i???n tho???i"),
      password: Yup.string()
        .min(6, "M???t kh???u l???n h??n 8 k?? t???")
        .required("Vui l??ng nh???p m???t kh???u"),
      // .matches(
      //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      //   "M???t kh???u ph???i c?? ??t nh???t 8 k?? t???, 1 ch??? hoa, 1 s??? v?? 1 k?? t??? ch??? 1 ?????c bi???t"
      // ),
    }),
    //SUBMIT LOGIN FORM
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <div
      style={activeTabSign === 1 ? { display: "block" } : { display: "none" }}
    >
      <form
        onSubmit={formikLogin.handleSubmit}
        autoComplete="off"
        className="flex-column sign-form"
      >
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
          style={
            loading === true ? { position: "relative", opacity: "0.6" } : {}
          }
        >
          {loading === true ? (
            <div className="sign-loading">
              <CircularProgress size="25px" color="inherit" />
            </div>
          ) : (
            <></>
          )}
          {loading === true ? (
            <div className="sign-loading">
              <CircularProgress size="25px" color="inherit" />
            </div>
          ) : (
            ""
          )}
          {t("Home.Sign_in")}
        </button>
      </form>
      <p className="sign-or">{t("Home.Sign_or")}</p>
      <div className="flex-row sign-other-social">
        <img src={icon.google} alt="" />
        <img src={icon.facebook} alt="" />
      </div>
      <p className="sign-other-setup">
        B???n ch??a c?? t??i kho???n
        <span onClick={() => setActiveTabSign(2)}>????ng k?? ngay</span>
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
        title={`Emai "${display_email}" ${t("form.is_not_registered")}`}
      />
    </div>
  );
}

export default SignIn;
