import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import DesktopDatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import icon from "../../constants/icon";
import ButtonCus from "../ButtonCus";
export default function PopupAppointInfor() {
  const [date, setDate] = React.useState<Date | null>(null);
  const [time, setTime] = React.useState<Date | null>(null);
  function onSubmit(e: React.FormEvent<HTMLInputElement>) {
    console.log("ok");
    e.preventDefault();
  }
  return (
    <div className="appointInfor">
      <div className="appointInfor-content">
        <h1 className="appointInfor-title">Thông tin đặt hẹn</h1>
        <div className="appointInfor-booked">
          <div className="appointInfor-booked__service">
            <div className="service-label">
              <p>Vui lòng lựa chọn dịch vụ muốn đặt hẹn</p>
            </div>
            <div className="service-wrap">
              <div className="service-input">
                <span className="service-input__place">
                  Liệu trình trẻ hóa da công nghệ hóa da công nghệ
                </span>
              </div>
              <div className="service-input__btn">
                <img src={icon.ArrowDownWhite} alt="" />
              </div>
            </div>
          </div>

          <div className="appointInfor-booked__timing">
            <div className="timing-date">
              <div className="service-label">
                <p>Ngày</p>
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Custom input"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={({ inputRef, inputProps, InputProps }) => (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <input ref={inputRef} {...inputProps} />
                      {InputProps?.endAdornment}
                    </Box>
                  )}
                />
              </LocalizationProvider>
            </div>
            <div className="timing-time">
              <div className="service-label">
                <p>Giờ</p>
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  value={time}
                  // placeHolder="hh:mm (a|p)m"
                  onChange={(newValue) => {
                    setTime(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      InputProps={{
                        endAdornment: <img alt="#" src={icon.ArrowDownWhite} />,
                      }}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <div className="appointInfor-branch">
          <div className="service-label">
            <p>Chi nhánh</p>
          </div>
          <div className="service-wrap">
            <input
              type="text"
              placeholder="Tìm chi nhánh theo khu vực gần bạn..."
            />
            <div className="service-input__btn">
              <img src={icon.SearchWhite} alt="" />
            </div>
          </div>
        </div>
        <div className="appointInfor-map">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="appointInfor-staff">
          <div className="service-label">
            <p>
              Nhân viên thực hiện{" "}
              <span className="color-gray">(Không bắt buộc)</span>
            </p>
            <div className="service-wrap">
              <div className="service-input">
                <span className="color-gray">Tìm theo tên nhân viên</span>
              </div>
              <div className="service-input__btn">
                <img src={icon.ArrowDownWhite} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="appointInfor-btn">
          <ButtonCus
            text="Xác nhận đặt hẹn"
            fontSize="14px"
            lineHeight="20px"
            color="#ffffff"
            border="solid 1px var(--purple)"
            borderRadius="18px"
            backColor="var(--purple"
            onClick={(e: any) => onSubmit(e)}
          />
        </div>
      </div>
    </div>
  );
}
