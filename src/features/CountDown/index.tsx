import { Dialog } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ButtonCus from "../../components/ButtonCus";
import icon from "../../constants/icon";
import "./countdown.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
export default function CountDown() {
  const [popupContact, setPopupContact] = useState(false);
  const [countDown, setcountDown] = useState(true);
  const [timeDay, setTimeDay] = useState(0);
  const [timeHour, setTimeHour] = useState(0);
  const [timeMinute, setTimeMinute] = useState(0);
  const [timeSecond, setTimeSecond] = useState(0);
  // const [timer, setTimer] = useState({
  //   tDay: "00",
  //   tHour: "00",
  //   tMinute: "00",
  //   tSecond: "00",
  // });
  let interval: any = useRef();
  const handleOpenContact = () => {
    setPopupContact(true);
  };
  const handleCloseContact = () => {
    setPopupContact(false);
  };
  const startTime = () => {
    const countDownDate = new Date("Jan 21, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now: any = new Date().getTime();
      const dis: any = countDownDate - now;
      const days: any = Math.floor(dis / (1000 * 60 * 60 * 24));
      const hours: any = Math.floor(
        (dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes: any = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
      const seconds: any = Math.floor((dis % (1000 * 60)) / 1000);
      if (dis < 0) {
        clearInterval(interval.current);
        setcountDown(false);
      } else {
        setTimeDay(days);
        setTimeHour(hours);
        setTimeMinute(minutes);
        setTimeSecond(seconds);
        // setTimer({ ...timer, tDay: days });
      }
    }, 1000);
  };
  useEffect(() => {
    startTime();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(interval.current);
    };
  });
  const params = new URLSearchParams();
  const handleContact = (values: any) => {
    // add data
    params.append("reg_phone", `${values.phone}`);
    params.append("reg_email", `${values.gmail}`);
    params.append("reg_name", `${values.name}`);
    params.append("reg_business_name", `${values.business}`);
    params.append("reg_business_add", `${values.address}`);
    // ---------

    // config axios
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    // ---------
    axios
      .post(
        `https://myspa.vn/Frontend/register_beautyx`,
        params,
        config
      )
      .then(function (response) {
        console.log("response :>> ", JSON.stringify(response));
        handleCloseContact();
      })
      .catch(function (err) {
        console.log(`err`, err);
      });
  };
  const formikContact = useFormik({
    initialValues: {
      name: "",
      gmail: "",
      phone: "",
      address: "",
      business: "",
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Vui l??ng nh???p ?????a ch???"),
      business: Yup.string().required("Vui l??ng nh???p lo???i kinh doanh"),
      name: Yup.string()
        .min(2, "T??n l???n h??n 2 k?? t???")
        .max(32, "T??n nh??? h??n 32 k?? t???")
        .required("Vui l??ng nh???p h??? v?? t??n")
        .matches(
          /^[a-zA-Z??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\s\W|_]+$/,
          "T??n kh??ng ????ng ?????nh d???ng"
        ),
      gmail: Yup.string()
        .required("Vui l??ng nh???p Email")
        .matches(
          // eslint-disable-next-line no-useless-escape
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i,
          "Email kh??ng ????ng ?????nh d???ng Example@gmail.com"
        ),
      phone: Yup.string()
        .min(10, "S??? ??i???n tho???i ph???i l???n h??n 10 ch??? s???")
        .max(11, "S??? ??i???n tho???i ph???i nh??? h??n 11 ch??? s???")
        .required("Vui l??ng nh???p s??? ??i???n tho???i")
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          "S??? ??i???n tho???i kh??ng ????ng ?????nh d???ng"
        ),
    }),
    onSubmit: (values: any) => {
      handleContact(values);
      // handleCloseContact();
    },
  });

  return (
    <div>
      <Dialog className="countDownSection" fullScreen open={countDown}>
        <div className="countdown">
          <div className="wraper">
            <h1 className="countdown-title">happy lunar new year</h1>
            <span className="countdown-desc">
              Our website is under construction
            </span>
            <div className="countdown-list">
              <div className="countdown-item">
                <span>{timeDay < 10 ? `0${timeDay}` : timeDay}</span>
                <span>DAYS</span>
              </div>
              <div className="countdown-item">
                <span className="hours">
                  {timeHour < 10 ? `0${timeHour}` : timeHour}
                </span>
                <span>HOURS</span>
              </div>
              <div className="countdown-item">
                <span className="minutes">
                  {timeMinute < 10 ? `0${timeMinute}` : timeMinute}
                </span>
                <span>MINITES</span>
              </div>
              <div className="countdown-item">
                <span className="seconds">
                  {timeSecond < 10 ? `0${timeSecond}` : timeSecond}
                </span>
                <span>SECONDS</span>
              </div>
            </div>
            <div onClick={handleOpenContact} className="countdown-btn">
              Follow us for update now
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        keepMounted
        open={popupContact}
        onClose={handleCloseContact}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="form-contact">
          <h2 className="form-contact__title">Li??n h??? v???i ch??ng t??i</h2>
          <span className="form-contact__desc">
            Vui l??ng cho ch??ng t??i bi???t th??ng tin c???a b???n
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
                placeholder="H??? v?? t??n"
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
                placeholder="S??? ??i???n th???ai"
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
                placeholder="Lo???i kinh doanh"
              />
            </div>
            {formikContact.errors.business &&
              formikContact.touched.business && (
                <p className="err-text">{formikContact.errors.business}</p>
              )}

            <div className="sign-form__box">
              <img
                className="sign-form__box-icon "
                src={icon.Location}
                alt=""
              />
              <input
                autoComplete="off"
                value={formikContact.values.address}
                onChange={formikContact.handleChange}
                name="address"
                id="address"
                placeholder="?????a ch???"
              />
            </div>
            {formikContact.errors.address && formikContact.touched.address && (
              <p className="err-text">{formikContact.errors.address}</p>
            )}
          </div>

          <div className="dialog-forgot__password-btn">
            <ButtonCus
              onClick={handleCloseContact}
              text="H???y"
              backColor="var(--bg-color)"
              color="var(--purple)"
              fontSize="20px"
              lineHeight="24px"
              borderRadius="20px"
            />
            <ButtonCus
              onClick={formikContact.handleSubmit}
              text="X??c nh???n"
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
