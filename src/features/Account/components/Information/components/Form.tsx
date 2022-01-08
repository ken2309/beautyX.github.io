import icon from "../../../../../constants/icon";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { dataDate } from "../../../../../data/listDays";
function Form(props: any) {
  const { formik } = props;
  interface IDay {
    id: number;
    day: string;
  }
  interface IMonth {
    id: number;
    month: string;
  }
  interface IYear {
    id: number;
    year: string;
  }

  const [chooseDay, setChooseDay] = useState<IDay>({ id: 0, day: "1" });
  const [chooseMonth, setChooseMonth] = useState<IMonth>({
    id: 0,
    month: "1",
  });
  const [chooseYear, setChooseYear] = useState<IYear>({ id: 0, year: "2001" });
  const [openDay, setOpenDay] = useState(false);
  const [openMonth, setOpenMonth] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const openDayClick = () => {
    if (openDay === true) {
      setOpenDay(false);
    } else {
      setOpenDay(true);
      setOpenMonth(false);
      setOpenYear(false);
    }
  };
  const openMonthClick = () => {
    if (openMonth === true) {
      setOpenMonth(false);
    } else {
      setOpenMonth(true);
      setOpenDay(false);
      setOpenYear(false);
    }
  };
  const openYearClick = () => {
    if (openYear === true) {
      setOpenYear(false);
    } else {
      setOpenYear(true);
      setOpenMonth(false);
      setOpenDay(false);
    }
  };
  const handleSetChooseDay = (day: any) => {
    setChooseDay(day);
    setOpenDay(false);
  };
  const handleSetChooseMonth = (month: any) => {
    setChooseMonth(month);
    setOpenMonth(false);
  };
  const handleSetChooseYear = (day: any) => {
    setChooseYear(day);
    setOpenYear(false);
  };
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
          {/* name */}
          <div style={{ width: "100%" }}>
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
          {/* date of birth */}
          <div style={{ width: "100%" }}>
            <div className="form-account__label">
              <span>Ngày sinh</span>
            </div>
            <div className="dateofbirth-list">
              <div className="dateofbirth-item " onClick={openDayClick}>
                <div className="dateofbirth__item__wrap">
                  <span>
                    {chooseDay.day.length === 0 ? "0" : chooseDay.day}
                  </span>
                  <img src={icon.arrowPurple} alt="" />
                  <div
                    style={
                      openDay === true
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    className="drop-category"
                  >
                    <ul>
                      {dataDate.days.map((item: any) => (
                        <li
                          style={
                            item === chooseDay
                              ? {
                                  color: "var(--bg-color)",
                                  backgroundColor: "var(--purple)",
                                }
                              : {}
                          }
                          onClick={() => handleSetChooseDay(item)}
                          key={item.id}
                        >
                          {item.day}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="dateofbirth-item" onClick={openMonthClick}>
                <div className="dateofbirth__item__wrap">
                  <span>
                    {chooseMonth.month.length === 0 ? "0" : chooseMonth.month}
                  </span>
                  <img src={icon.arrowPurple} alt="" />
                  <div
                    style={
                      openMonth === true
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    className="drop-category"
                  >
                    <ul>
                      {dataDate.month.map((item: any) => (
                        <li
                          style={
                            item === chooseMonth
                              ? {
                                  color: "var(--bg-color)",
                                  backgroundColor: "var(--purple)",
                                }
                              : {}
                          }
                          onClick={() => handleSetChooseMonth(item)}
                          key={item.id}
                        >
                          {item.month}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="dateofbirth-item" onClick={openYearClick}>
                <div className="dateofbirth__item__wrap">
                  <span>
                    {chooseYear.year.length === 0 ? "0" : chooseYear.year}
                  </span>
                  <img src={icon.arrowPurple} alt="" />
                  <div
                    style={
                      openYear === true
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    className="drop-category"
                  >
                    <ul>
                      {dataDate.year.map((item: any) => (
                        <li
                          style={
                            item === chooseYear
                              ? {
                                  color: "var(--bg-color)",
                                  backgroundColor: "var(--purple)",
                                }
                              : {}
                          }
                          onClick={() => handleSetChooseYear(item)}
                          key={item.id}
                        >
                          {item.year}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* sex */}
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
          {/* email */}
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
          {/* phone */}
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
      </div>

      {/*address */}
      <div className="title_section text-color-purple">
        <h1 className="title">Địa chỉ giao hàng</h1>
        <span className="subtitle cursor-pointer">Thêm địa điểm khác</span>
      </div>
      <hr className="purple_line" />
      <div className="form-address">
        <div className="form-account__wraper">
          <div style={{ width: "100%", padding: "24px 0 8px 0" }}>
            <div className="form-account__label">
              <span>Địa chỉ 1</span>
              <div className="delete-address">
                <span>Mặc định</span>
                <img src={icon.TrashOrange} alt="" />
              </div>
            </div>
            <div className="form-account__wrapinput">
              <input
                className="form-account__input"
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="Địa chỉ 1"
                type="text"
                name="address"
                id="address"
              />
            </div>
            {formik.errors.address && formik.touched.address && (
              <p className="err-text">{formik.errors.address}</p>
            )}
          </div>
        </div>
        <div style={{ paddingTop: "0px" }} className="form-account__wraper">
          <div style={{ width: "100%", padding: "8px 0 8px 0" }}>
            <div className="form-account__label">
              <span>Địa chỉ 2</span>
              <div className="delete-address">
                <span>Mặc định</span>
                <img src={icon.TrashOrange} alt="" />
              </div>
            </div>
            <div className="form-account__wrapinput">
              <input
                className="form-account__input"
                // value={formikPartner.values.Name}
                // onChange={formikPartner.handleChange}
                placeholder="Địa chỉ 2"
                type="text"
                name="address2"
                id="address2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Form;
