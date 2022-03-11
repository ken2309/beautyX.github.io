import React, { useContext, useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import icon from '../../../constants/icon';
import { FormControl, RadioGroup, FormControlLabel, Radio, Checkbox, CircularProgress } from '@mui/material'
import { AppContext } from '../../../context/AppProvider';
import { AxiosError } from "axios";
import auth from '../../../api/authApi';
import PopupNoti from './PopupNoti';

function SignUps(props: any) {
    const { t } = useContext(AppContext)
    const { activeTabSign, setActiveTabSign } = props;
    const [errAlready, setErrAlready] = useState({
        errMail: '',
        errPhone: ''
    })
    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState(false);


    async function handleSubmitForm(values: any) {
        const params = {
            fullname: values.name,
            email: values.email,
            telephone: values.phone,
            password: values.password,
            platform: 'BEAUTYX'
        }
        try {
            await auth.register(params);
            setLoading(false);
            setPopup(true)
        } catch (error) {
            setLoading(false);
            const err = error as AxiosError;
            if (err.response?.status === 400) {
                setErrAlready({
                    errMail: err.response.data.context.email ? `${err.response.data.context.email}` : ``,
                    errPhone: err.response.data.context.telephone ? `${err.response.data.context.telephone}` : ``
                })
            }
        }
    }


    const [typePass, setTypePass] = useState('password')
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirm_password: '',
            sex: '',
            agree: false
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Tên lớn hơn 2 ký tự")
                .required("Vui lòng nhập họ và tên")
                .matches(
                    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
                    "Tên không đúng định dạng"
                ),
            sex: Yup.string().required("Vui lòng chọn giới tính"),
            email: Yup.string()
                .required("Vui lòng nhập Email hoặc Số điện thoại")
                .matches(
                    // eslint-disable-next-line no-useless-escape
                    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i,
                    "Vui lòng nhập đúng định dạng Example@gmail.com"
                ),
            phone: Yup.string()
                .required(`${t("pm.please_enter")} ${t("pm.phone_number")}`),
            // .matches(
            //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            //     'Số điện thoại không đúng định dạng'
            // ),
            password: Yup.string()
                .min(8, "Mật khẩu lớn hơn 8 ký tự")
                .max(32, "Mật khẩu tối đa 32 kí tự")
                .required("Vui lòng nhập mật khẩu"),
            confirm_password: Yup.string()
                .required("Vui lòng xác nhận lại mật khẩu")
                .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
            agree: Yup.boolean().oneOf(
                [true],
                "Vui lòng đọc và chấp nhận điều khoản"
            ),
        }),
        onSubmit: (values: any) => {
            setLoading(true)
            handleSubmitForm(values)
        }
    })
    return (
        <div
            style={activeTabSign === 2 ? { display: "block" } : { display: "none" }}
        >
            <form
                onSubmit={formik.handleSubmit}
                autoComplete='off'
                className="flex-column sign-form"
            >
                <div className="flex-column">
                    <div className="flex-row w-100">
                        <div className="sign-form__box ">
                            <img className="sign-form__box-icon" src={icon.User} alt="" />
                            <input
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                name="name"
                                type="text"
                                placeholder="Họ và tên"
                            />
                        </div>

                        <FormControl component="fieldset">
                            <RadioGroup
                                row
                                aria-label="gender"
                                name="sex"
                                value={formik.values.sex}
                                onChange={formik.handleChange}
                            >
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
                    <div className="flex-row w-100">
                        {formik.errors.name && formik.touched.name && (
                            <p style={{ marginLeft: "20px" }} className="err-text">
                                {formik.errors.name}
                            </p>
                        )}
                        {formik.errors.sex && formik.touched.sex && (
                            <p style={{ marginLeft: "6px" }} className="err-text">
                                {formik.errors.sex}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex-column w-100">
                    <div className="sign-form__box  mb-16 ">
                        <img className="sign-form__box-icon" src={icon.Message} alt="" />
                        <input
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    {formik.errors.email && formik.touched.email && (
                        <p className="err-text">{formik.errors.email}</p>
                    )}
                    <p className="err-text">{errAlready.errMail}</p>
                </div>
                <div className="flex-column w-100">
                    <div className="sign-form__box  mb-16 ">
                        <img className="sign-form__box-icon" src={icon.Message} alt="" />
                        <input
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            name="phone"
                            type="text"
                            placeholder={t("pm.phone_number")}
                        />
                    </div>
                    {formik.errors.phone && formik.touched.phone && (
                        <p className="err-text">{formik.errors.phone}</p>
                    )}
                    <p className="err-text">{errAlready.errPhone}</p>
                </div>
                <div className="flex-column w-100">
                    <div className="sign-form__box mb-16">
                        <img className="sign-form__box-icon" src={icon.Lock} alt="" />
                        <input
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            name="password"
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
                <div className="flex-column w-100">
                    <div className="sign-form__box mb-16">
                        <img className="sign-form__box-icon" src={icon.Lock} alt="" />
                        <input
                            value={formik.values.confirm_password}
                            onChange={formik.handleChange}
                            name="confirm_password"
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
                    {formik.errors.confirm_password && formik.touched.confirm_password && (
                        <p className="err-text">{formik.errors.confirm_password}</p>
                    )}
                </div>
                <div className="flex-row w-100">
                    <Checkbox
                        value={formik.values.agree}
                        onChange={formik.handleChange}
                        name="agree"
                        //id="agree"
                        // defaultChecked
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
                {formik.errors.agree && formik.touched.agree && (
                    <p style={{ margin: "0px 0px 0px 38px" }} className="err-text">
                        {formik.errors.agree}
                    </p>
                )}
                <button
                    // disabled={agree === true ? false : true}
                    type="submit"
                    className="sign-btn mt-38"
                    style={
                        loading === true ? { position: "relative", opacity: "0.6" } : {}
                    }
                >
                    {loading === true ? (
                        <div className="sign-loading">
                            <CircularProgress size="25px" color="inherit" />
                        </div>
                    ) : (
                        ""
                    )}
                    {t("Home.Sign_up")}
                </button>
                <p className="sign-or">Hoặc đăng kí với</p>
                <div className="flex-row sign-other-social">
                    <img src={icon.google} alt="" />
                    <img src={icon.facebook} alt="" />
                </div>
            </form>
            <PopupNoti
                popup={popup}
                setPopup={setPopup}
                isSignIn={false}
                setActiveTabSign={setActiveTabSign}
            />
        </div>
    );
}

export default SignUps;