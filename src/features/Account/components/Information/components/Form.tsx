import icon from "../../../../../constants/icon";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
function Form(props: any) {
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
                // value={formikPartner.values.Name}
                // onChange={formikPartner.handleChange}
                placeholder="Họ và tên"
                type="text"
                name="Name"
                id="Name"
              />
            </div>
          </div>

          <div style={{ width: "100%", padding: "0 0 8px 0" }}>
            <div className="form-account__label">
              <span>Ngày sinh</span>
            </div>
            <div className="dateofbirth-list">
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
            </div>
          </div>

          <div className="form-account__sex" style={{ padding: "0 0 8px 0" }}>
            <div className="form-account__label">
              <span>Giới tính</span>
            </div>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="gender"
                name="Sex"
                // value={formik.values.Sex}
                // onChange={formik.handleChange}
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
        </div>

        <div className="form-account__wraper">
          <div style={{ width: "234px", padding: "0 0 8px 0" }}>
            <div className="form-account__label">
              <span>Email</span>
            </div>
            <div className="form-account__wrapinput">
              <input
                className="form-account__input"
                // value={formikPartner.values.Name}
                // onChange={formikPartner.handleChange}
                placeholder="Email"
                type="text"
                name="Name"
                id="Name"
              />
            </div>
          </div>
          <div style={{ width: "234px", padding: "0 0 8px 0" }}>
            <div className="form-account__label">
              <span>Số điện thoại</span>
            </div>
            <div className="form-account__wrapinput">
              <input
                className="form-account__input"
                // value={formikPartner.values.Name}
                // onChange={formikPartner.handleChange}
                placeholder="Số điện thoại"
                type="text"
                name="Name"
                id="Name"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Form;
