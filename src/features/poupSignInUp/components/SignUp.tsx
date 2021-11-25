import React, { useState } from "react";
import icon from "../../../constants/icon";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";

function SignUp(props: any) {
  const { activeTabSign } = props;
  const [typePass, setTypePass] = useState("password");

  function handleRegis(e: React.FormEvent<HTMLInputElement>) {
    console.log("ok");
    e.preventDefault();
  }
  return (
    <div
      style={activeTabSign === 2 ? { display: "block" } : { display: "none" }}
    >
      <form className="flex-column sign-form">
        <div className="wrapper-name-sex">
          <div className="sign-form__box ">
            <img className="sign-form__box-icon" src={icon.User} alt="" />
            <input name="name" id="name" type="text" placeholder="Họ và tên" />
          </div>

          <FormControl component="fieldset">
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    sx={{
                      color: "#7161BA",
                      "&.Mui-checked": {
                        color: "#7161BA",
                      },
                    }}
                  />
                }
                label="Nam"
              />
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      color: "#7161BA",
                      "&.Mui-checked": {
                        color: "#7161BA",
                      },
                    }}
                  />
                }
                label="Nữ"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    sx={{
                      color: "#7161BA",
                      "&.Mui-checked": {
                        color: "#7161BA",
                      },
                    }}
                  />
                }
                label="Khác"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="sign-form__box mb-16">
          <img className="sign-form__box-icon" src={icon.Calendar} alt="" />
          <input
            autoComplete="off"
            name="dateofbirth"
            id="dateofbirth"
            type="text"
            placeholder="Ngày/tháng/năm sinh"
          />
        </div>

        <div className="sign-form__box  mb-16 ">
          <img className="sign-form__box-icon" src={icon.Message} alt="" />
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Email/Số điện thoại"
          />
        </div>

        <div className="sign-form__box mb-16">
          <img className="sign-form__box-icon" src={icon.Lock} alt="" />
          <input
            name="password"
            id="password"
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

        <div className="sign-form__box mb-16">
          <img className="sign-form__box-icon" src={icon.Lock} alt="" />
          <input
            name="password"
            id="password"
            type={typePass}
            placeholder="Nhập lại mật khẩu"
          />
          <img
            onMouseEnter={() => setTypePass("text")}
            onMouseLeave={() => setTypePass("password")}
            className="sign-form__box-icon-show"
            src={icon.eye}
            alt=""
          />
        </div>
        <div className="flex-row">
          <Checkbox
            defaultChecked
            sx={{
              color: "#7161BA",
              "&.Mui-checked": {
                color: "#7161BA",
              },
            }}
          />
          <p className="sign-other-setup">
            Tôi đã đọc và đồng ý với
            <span>Điều khoản & Điều kiện của Myspa</span>
          </p>
        </div>
        <button onClick={(e: any) => handleRegis(e)} className="sign-btn mt-38">
          Đăng ký
        </button>
        <p className="sign-or">Hoặc đăng kí với</p>
        <div className="flex-row sign-other-social">
          <img src={icon.google} alt="" />
          <img src={icon.facebook} alt="" />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
