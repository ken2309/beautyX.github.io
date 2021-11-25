import React, { useState } from 'react';
import icon from '../../../constants/icon';
import {Checkbox} from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';

function SignIn(props:any) {
      const { activeTabSign, setActiveTabSign, t } = props;
      const [typePass, setTypePass] = useState("password");
      const formik = useFormik({
            initialValues:{
                  userName:'',
                  password:''
            },
            validationSchema: Yup.object({
                  userName: Yup.string()
                        .required(t('Home.Sign_val_user')),
                  password: Yup.string()
                        .min(6, t('Home.Sign_val_length_pass'))
                        .required(t('Home.Sign_val_password'))
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
                                          placeholder={t('Home.Sign_in_pl_user_name')}
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
                                          placeholder={t('Home.Sign_in_pl_password')}
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
                              {t('Home.Sign_in')}
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
                              {t('Home.Sign_remember')}
                        </span>
                        <span>
                              {t('Home.Sign_forgot')} ?
                        </span>
                  </div>
                  <p className="sign-or">
                        {t('Home.Sign_or')}
                  </p>
                  <div className="flex-row sign-other-social">
                        <img src={icon.google} alt="" />
                        <img src={icon.facebook} alt="" />
                  </div>
                  <p className="sign-other-setup">
                        {t('Home.Sign_no_acc')} ?
                        <span onClick={() => setActiveTabSign(2)}>
                              {t('Home.Sign_up_now')}
                        </span>
                  </p>
            </div>
      );
}

export default SignIn;