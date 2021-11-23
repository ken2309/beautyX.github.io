import React from 'react';
import {RadioGroup, FormControlLabel, Radio} from '@mui/material';
import SectionTitle from '../../SectionTitle';

function PaymentMethod(props:any) {
      const { methodList, value, setValue } = props;
      const handleChange = (event: any) => {
            setValue(event.target.value);
      };
      return (
            <div>
                  <SectionTitle
                        title="Chọn phương thức thanh toán"
                  />
                  <RadioGroup
                        aria-label="gender"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                  >
                        <ul className="payment-method" >
                              {
                                    methodList.map((item: any) => (
                                          <li key={item.id} >
                                                <FormControlLabel
                                                      value={item.method}
                                                      control={
                                                            <Radio
                                                                  sx={{ '&.Mui-checked': { color: 'var(--purple)' } }}
                                                            />
                                                      }
                                                      label={item.title}
                                                />
                                                <img src={item.img} alt="" />
                                          </li>
                                    ))
                              }
                        </ul>
                  </RadioGroup>
            </div>
      );
}

export default PaymentMethod;