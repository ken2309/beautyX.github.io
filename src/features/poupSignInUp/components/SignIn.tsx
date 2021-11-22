import React, { useState } from 'react';
import icon from '../../../constants/icon';
import {Checkbox} from '@mui/material'

function SignIn(props:any) {
      const { activeTabSign, setActiveTabSign } = props;
      const [typePass, setTypePass] = useState("password");
      return (
            <div style={activeTabSign === 1 ? { display: 'block' } : { display: 'none' }}>
                  <form className="flex-column sign-form">
                        <form className="sign-form__box">
                              <img className="sign-form__box-icon" src={icon.User} alt="" />
                              <input type="text" placeholder="Email/ Số điện thoại" />
                        </form>
                        <div className="sign-form__box">
                              <img className="sign-form__box-icon" src={icon.Lock} alt="" />
                              <input type={typePass} placeholder="Mật khẩu" />
                              <img
                                    onMouseEnter={() => setTypePass("text")}
                                    onMouseLeave={()=>setTypePass("password")}
                                    className="sign-form__box-icon-show"
                                    src={icon.eye} alt=""
                              />
                        </div>
                        <button className="sign-btn">
                              Đăng nhập
                        </button>
                  </form>
                  <div className="flex-row-sp sign-check">
                        <span className="flex-row">
                              <Checkbox
                                    defaultChecked
                                    sx={{
                                          color: "#7161BA",
                                          "&.Mui-checked": {
                                                color: "#7161BA",
                                          },
                                    }}
                              />
                              Ghi nhớ mật khẩu
                        </span>
                        <span>
                              Quên mật khẩu ?
                        </span>
                  </div>
                  <p className="sign-or">
                        Hoặc đăng nhập với
                  </p>
                  <div className="flex-row sign-other-social">
                        <img src={icon.google} alt="" />
                        <img src={icon.facebook} alt="" />
                  </div>
                  <p className="sign-other-setup">
                        Bạn chưa có tài khoản
                        <span onClick={() => setActiveTabSign(2)}>
                              Đăng ký ngay
                        </span>
                  </p>
            </div>
      );
}

export default SignIn;