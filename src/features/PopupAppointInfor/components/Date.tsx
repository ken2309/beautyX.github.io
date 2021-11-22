import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import DesktopDatePicker from "@mui/lab/DatePicker";
export default function Date() {
  const [date, setDate] = React.useState<Date | null>(null);
  return (
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
  );
}
