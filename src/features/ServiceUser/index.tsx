import React, { useState } from 'react';
import Head from '../Head';
import { Container } from '@mui/material';
import icon from '../../constants/icon'
//import DatePicker from '../../components/DatePicker';
//import TimePicker from '../../components/TimePicker';
import myServices from '../../data/listMyServices'
import './mySer.css';
import OrgSelect from './components/OrgSelect';
import ServiceBook from './components/ServiceBook';
import {IOrganization} from '../../interface/organization';
import PopupNoti from './components/PopupNoti';
import ServiceBottom from './components/ServiceBottom';
import Footer from '../Footer'

function ServicesUser(props: any) {
      const [chooseOrg, setChooseOrg] = useState(0);
      const [orgAll, setOrgAll] = useState<IOrganization[]>([])
      const [openNoti, setOpenNoti] = useState(true)
      const [servicesBook, setServicesBook] = useState([])
      return (
            <>
                  <Head />
                  <Container>
                        <div className="flex-row-sp my-ser">
                              <div 
                                    style={{position:'sticky', top:0}}
                                    className="my-ser__left"
                              >
                                    <span className="flex-row my-ser__left-title">
                                          <img src={icon.dashboard} alt="" />
                                          Doanh nghiệp
                                    </span>
                                    <OrgSelect
                                          chooseOrg={chooseOrg}
                                          setChooseOrg={setChooseOrg}
                                          setOrgAll={setOrgAll}
                                          myServices={myServices}
                                          servicesBook={servicesBook}
                                          setServicesBook={setServicesBook}
                                    />
                              </div>
                              <div className="my-ser__right">
                                    <ServiceBook
                                          chooseOrg={chooseOrg}
                                          orgAll={orgAll}
                                          servicesBook={servicesBook}
                                          setServicesBook={setServicesBook}
                                    />
                              </div>
                        </div>
                  </Container>
                  <ServiceBottom
                        orgAll={orgAll}
                        servicesBook={servicesBook}
                        setOpenNoti={setOpenNoti}
                  />
                  <Footer/>
                  <PopupNoti
                        open={openNoti}
                        setOpen={setOpenNoti}
                  />
            </>
      );
}

export default ServicesUser;