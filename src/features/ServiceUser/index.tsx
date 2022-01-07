import React from 'react';
import Head from '../Head';
import { Container } from '@mui/material';
import DatePicker from '../../components/DatePicker';
import TimePicker from '../../components/TimePicker';
import './mySer.css';

function ServicesUser(props: any) {
      return (
            <>
                  <Head />
                  <div className="my-ser__cnt">
                        <Container>
                              <div className="flex-row-sp my-ser">
                                    <div className="my-ser__left">

                                    </div>
                                    <div className="my-ser__right">
                                          <span className="my-ser__right-title">
                                                Chọn ngày đặt hẹn
                                          </span>
                                          <div className="my-ser__right-date">
                                                <DatePicker />
                                          </div>
                                          <span className="my-ser__right-title">
                                                Chọn giờ đặt hẹn
                                          </span>
                                          <div className="my-ser__right-date">
                                                <TimePicker />
                                          </div>
                                    </div>
                              </div>
                        </Container>
                  </div>
            </>
      );
}

export default ServicesUser;