import React, { useContext } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import DesktopDatePicker from "@mui/lab/DatePicker";
import { AppContext } from "../../../context/AppProvider";
export default function DateComponent(props: any) {
  const { t } = useContext(AppContext)
  const { dateValue, setDateValue, today } = props;
  return (
    <div className="timing-date">
      <div className="service-label">
        <p>{t('booking.date')}</p>
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          minDate={today}
          label="Custom input"
          value={dateValue}
          onChange={(newValue) => {
            setDateValue(newValue);
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
  );
}
