import icon from "../../../../../constants/icon";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useState } from "react";
function Form(props: any) {
  const { formik } = props;

  const [value, setValue] = useState<Date | null>();
  return (
    <>
      <div className="title_section text-color-purple">
        <h1 className="title">Thông tin cá nhân</h1>
        <span className="subtitle">
          Cập nhật đầy đủ thông tin cá nhân giúp tài khoản được bảo mật tốt hơn
        </span>
      </div>
      <hr className="purple_line" />

      <div className="form-account">
        <div className="form-account__wraper">
          <div style={{ width: "100%", padding: "0 0 8px 0" }}>
            <div className="form-account__label">
              <span>Họ và tên</span>
            </div>
            <div className="form-account__wrapinput">
              <input
                className="form-account__input"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Họ và tên"
                type="text"
                name="name"
                id="name"
              />
            </div>
            {formik.errors.name && formik.touched.name && (
              <p className="err-text">{formik.errors.name}</p>
            )}
          </div>

          <div style={{ width: "100%", padding: "0 0 8px 0" }}>
            <div className="form-account__label">
              <span>Ngày sinh</span>
            </div>
            {/* <div className="dateofbirth-list">
              <div className="dateofbirth-item">
                <div className="dateofbirth__item__wrap">
                  <span>01</span>
                  <img src={icon.arrowPurple} alt="" />
                </div>
              </div>
              <div className="dateofbirth-item">
                <div className="dateofbirth__item__wrap">
                  <span>01</span>
                  <img src={icon.arrowPurple} alt="" />
                </div>
              </div>
              <div className="dateofbirth-item">
                <div className="dateofbirth__item__wrap">
                  <span>2001</span>
                  <img src={icon.arrowPurple} alt="" />
                </div>
              </div>
            </div>  */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>

          <div className="flex-column w-100">
            <div className="form-account__sex" style={{ padding: "0 0 8px 0" }}>
              <div className="form-account__label">
                <span>Giới tính</span>
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
            {formik.errors.sex && formik.touched.sex && (
              <p className="err-text cus-sex">{formik.errors.sex}</p>
            )}
          </div>
        </div>

        <div className="form-account__wraper">
          <div style={{ minWidth: "225px", padding: "0 0 8px 0" }}>
            <div className="form-account__label">
              <span>Email</span>
            </div>
            <div className="form-account__wrapinput">
              <input
                className="form-account__input"
                value={formik.values.gmail}
                onChange={formik.handleChange}
                placeholder="Email"
                type="text"
                name="gmail"
                id="gmail"
              />
            </div>
            {formik.errors.gmail && formik.touched.gmail && (
              <p className="err-text">{formik.errors.gmail}</p>
            )}
          </div>
          <div style={{ minWidth: "225px", padding: "0 0 8px 0" }}>
            <div className="form-account__label">
              <span>Số điện thoại</span>
            </div>
            <div className="form-account__wrapinput">
              <input
                className="form-account__input"
                value={formik.values.phone}
                onChange={formik.handleChange}
                placeholder="Số điện thoại"
                type="text"
                name="phone"
                id="phone"
              />
            </div>
            {formik.errors.phone && formik.touched.phone && (
              <p className="err-text">{formik.errors.phone}</p>
            )}
          </div>
        </div>
        {/* <button type="submit" onClick={formik.handleSubmit}>
          ok
        </button> */}
      </div>
    </>
  );
}
export default Form;
