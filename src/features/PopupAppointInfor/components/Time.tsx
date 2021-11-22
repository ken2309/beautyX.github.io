import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import icon from "../../../constants/icon";

export default function Time() {
  const [time, setTime] = React.useState<Date | null>(null);

  return (
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
  );
}
