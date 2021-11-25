import React, { useState } from 'react';
import icon from '../../../constants/icon';
import {Checkbox} from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';

function SignIn(props:any) {
      const { activeTabSign, setActiveTabSign } = props;
      const [typePass, setTypePass] = useState("password");
      const formik = useFormik({
            initialValues:{
                  userName:'',
                  password:''
            },
            validationSchema: Yup.object({
                  userName: Yup.string()
                        .required('Vui lòng nhập email/số điện thoại'),
                  password: Yup.string()
                        .min(6, 'Mật khẩu lơn hơn 6 ký tự')
                        .required('Vui lòng nhập mật khẩu')
            }),
            onSubmit: values => {
                  console.log(values);
            }
      })
      return (
            <div style={activeTabSign === 1 ? { display: 'block' } : { display: 'none' }}>
                  <form 
                        onSubmit={formik.handleSubmit}
                        autoComplete="off"
                        className="flex-column sign-form"
                  >
                        <div style={{ width: '100%', padding: '6px 0px' }}>
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
                                    <p>{formik.errors.userName}</p>
                              )}
                        </div>
                        <div style={{ width: '100%', padding: '6px 0px' }}>
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
                                          src={icon.eye} alt=""
                                    />
                              </div>
                              {formik.errors.password && formik.touched.password && (
                                    <p>{formik.errors.password}</p>
                              )}
                        </div>
                        <button type="submit" className="sign-btn">
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