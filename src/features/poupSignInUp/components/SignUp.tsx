import React, {useState} from 'react';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';

function SignUp(props: any) {
      const { activeTabSign } = props;
      const [value, setValue] = React.useState<Date | null>(new Date());
      return (
            <div style={activeTabSign === 2 ? { display: 'block' } : { display: 'none' }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                              label="Custom input"
                              value={value}
                              onChange={(newValue) => {
                                    setValue(newValue);
                              }}
                              renderInput={({ inputRef, inputProps, InputProps }) => (
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                          <input ref={inputRef} {...inputProps} />
                                          {InputProps?.endAdornment}
                                    </Box>
                              )}
                        />
                  </LocalizationProvider>
            </div>
      );
}

export default SignUp;