import React, { useContext } from 'react';
import {RadioGroup, FormControlLabel, Radio} from '@mui/material';
import SectionTitle from '../../SectionTitle';
import { AppContext } from '../../../context/AppProvider';

function PaymentMethod(props:any) {
      const {t} = useContext(AppContext)
      const { methodList, value, setValue } = props;
      const handleChange = (event: any) => {
            setValue(event.target.value);
      };
      return (
            <div>
                  <SectionTitle
                        title={t('pm.choose_payment_method')}
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