import React, { useState } from 'react';
import { Container } from '@mui/material';
import ButtonCus from '../../../components/ButtonCus';
import icon from '../../../constants/icon';
import OrgBranch from './OrgBranch';

function ServiceBottom(props: any) {
      const {servicesBook, setOpenNoti, orgAll} = props;
      const [openNext, setOpenNext] = useState(false)
      const itemFirst = servicesBook[0];
      const arrFirst = servicesBook.filter((item: any) => item.organization_id === itemFirst.organization_id)
      const orgChoose = orgAll.find((item:any) => item.id === itemFirst?.organization_id)
      const branches = orgChoose?.branches
      console.log(branches)
      const handleNextStep = () => {
            if (servicesBook.length > 0) {
                  if (arrFirst.length === servicesBook.length) {
                        setOpenNext(!openNext)
                        console.log(servicesBook)
                  } else {
                        setOpenNoti(true)
                  }
            }
      }
      return (
            <div
                  className={openNext === true ? "my-ser-bot my-ser-bot__up" : "my-ser-bot"}
            >
                  <Container>
                        <div className="my-ser-bot__cnt">
                              <span className="my-ser-bot__cnt-count">
                                    Đã chọn {servicesBook.length} dịch vụ
                              </span>
                              <ButtonCus
                                    imgIcon={openNext === true ? icon.chevronDownWhite : icon.chevronUpWhite}
                                    text={openNext === true ? 'Đóng' : 'Tiếp tục'}
                                    color='var(--bgWhite)'
                                    backColor='var(--purple)'
                                    padding='8px 16px'
                                    borderRadius='16px'
                                    margin='0px 0px 0px 12px'
                                    opacity={servicesBook.length > 0 ? '1' : '.3'}
                                    onClick={handleNextStep}
                              />
                        </div>
                        <div className="flex-row-sp my-ser-bot__check">
                              <div className="my-ser-bot__check-left">
                                    <div className='title'>
                                          Dahh sách dịch vụ đã chọn
                                    </div>
                                    <div className="my-ser-choose">
                                          <ul>
                                                {
                                                      servicesBook.map((item: any, index: number) => (
                                                            <li
                                                                  key={index}
                                                            >
                                                                  <div className="flex-row my-ser-choose__item">
                                                                        <img
                                                                              src={"https://picsum.photos/650/976?random=1" + item.id}
                                                                              alt=""
                                                                        />
                                                                        <div className="flex-row-sp my-ser-choose__item-cnt">
                                                                              <span>
                                                                                    {item.service_name}
                                                                              </span>
                                                                              <span>
                                                                                    {item.price}đ
                                                                              </span>
                                                                        </div>
                                                                  </div>
                                                            </li>
                                                      ))
                                                }
                                          </ul>
                                          
                                    </div>
                              </div>
                              <div className="my-ser-bot__check-right">
                                    <div className="flex-row-sp choose-branch">
                                          <span>
                                                Chọn chi nhánh bạn muốn đặt hẹn
                                          </span>
                                          <img src={icon.dashboard} alt="" />
                                          <OrgBranch
                                                branches={branches}
                                          />
                                    </div>
                                    <div className="flex-row-sp choose-time">
                                          <div className="flex-row-sp date">
                                                <span>Chọn thời gian</span>
                                                <img src={icon.Calendar} alt="" />
                                          </div>
                                          <div className="flex-row-sp date">
                                                <span>Chọn thời gian</span>
                                                <img src={icon.time} alt="" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
}

export default ServiceBottom;