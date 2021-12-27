import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import icon from "../../../constants/icon";
import { AppContext } from "../../../context/AppProvider";

export default function Time(props: any) {
  const { t } = useContext(AppContext)
  const { timeValue, setTimeValue } = props;
  //console.log(timeValue?.toLocaleTimeString());
  return (
    <div className="timing-time">
      <div className="service-label">
        <p>{t('booking.time')}</p>
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          value={timeValue}
          // placeHolder="hh:mm (a|p)m"
          onChange={(newValue) => {
            setTimeValue(newValue);
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
  );
}
