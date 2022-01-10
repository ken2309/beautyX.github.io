import React, { useContext, useState } from 'react';
import { Container } from '@mui/material';
import ButtonCus from '../../../components/ButtonCus';
import icon from '../../../constants/icon';
import OrgBranch from './OrgBranch';
import OrgDate from './OrgDate';
import OrgTime from './OrgTime';
import {IBranch} from '../../../interface/branch';
import apointmentApi from '../../../api/apointmentApi';
import PopupNotiApp from './PopupNotiApp';
import {AxiosError} from 'axios'
import { AppContext } from '../../../context/AppProvider';

function ServiceBottom(props: any) {
      const {t} = useContext(AppContext)
      const {servicesBook, setOpenNoti, orgAll} = props;
      const [openNext, setOpenNext] = useState(false)
      const itemFirst = servicesBook[0];
      const arrFirst = servicesBook.filter((item: any) => item.organization_id === itemFirst.organization_id)
      const orgChoose = orgAll.find((item:any) => item.id === itemFirst?.organization_id)
      const branches = orgChoose?.branches
      const [openBranches, setOpenBranches] = useState(false)
      const [openDate, setOpenDate] = useState(false);
      const [openTime, setOpenTime] = useState(false);
      const [chooseBranch, setChooseBranch] = useState<IBranch>();
      const [chooseDate, setChooseDate] = useState();
      const [chooseTime, setChooseTime] = useState();
      const [note, setNote] = useState('note')
      const [openNotiApp, setOpenNotiApp] = useState(false)
      const [errCode, setErrCode] = useState<number | undefined>()
      const handleNextStep = () => {
            if (servicesBook.length > 0) {
                  if (arrFirst.length === servicesBook.length) {
                        setOpenNext(!openNext)
                        // reset state
                        setChooseDate(undefined);
                        setChooseBranch(undefined);
                        setChooseTime(undefined);
                  } else {
                        setOpenNoti(true)
                  }
            }
      }
      const openBranchesClick=()=>{
            setOpenBranches(!openBranches)
            setOpenDate(false)
            setOpenTime(false)
      }
      const openDateClick=()=>{
            setOpenDate(!openDate)
            setOpenBranches(false)
            setOpenTime(false)
      }
      const openTimeClick=()=>{
            setOpenTime(!openTime)
            setOpenBranches(false)
            setOpenDate(false)
      }
      const handleOnChange = (e: any) => {
            const {value} = e.target;
            setNote(value);
      }
      //handle submit appointment
      async function handleSubmitAppApi(params: any, org_id: any) {
            try {
                  await apointmentApi.postAppointment(params, org_id)
                  setOpenNotiApp(true)
                  setErrCode(200)
            } catch (error) {
                  setOpenNotiApp(true)
                  const err = error as AxiosError;
                  setErrCode(err.response?.status)
            }
      }
      const handleSubmitApp = () => {
            const service_ids = [];
            for (var ser of servicesBook) {
                  service_ids.push(ser.id)
            }
            const time_start = `${chooseDate} ${chooseTime}:00`
            const branch_id = chooseBranch?.id
            if (chooseBranch && chooseDate && chooseTime) {
                  const params = { service_ids, time_start, branch_id, note }
                  handleSubmitAppApi(params, orgChoose?.id)
            }
      }
      return (
            <div
                  className={openNext === true ? "my-ser-bot my-ser-bot__up" : "my-ser-bot"}
            >
                  <Container>
                        <div className="my-ser-bot__cnt">
                              <span className="my-ser-bot__cnt-count">
                                    {t('my_ser.selected')} {servicesBook.length} {t('my_ser.service')}
                              </span>
                              <ButtonCus
                                    imgIcon={openNext === true ? icon.chevronDownWhite : icon.chevronUpWhite}
                                    text={openNext === true ? t('my_ser.close') : t('my_ser.continue')}
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
                                          {t('my_ser.services_selected')}
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
                                    <div 
                                          onClick={openBranchesClick}
                                          className="flex-row-sp choose-branch"
                                    >
                                          <span>
                                                {
                                                      chooseBranch ?
                                                            chooseBranch.full_address
                                                            :
                                                            t('my_ser.branch_select')
                                                }
                                          </span>
                                          <img src={icon.dashboard} alt="" />
                                          <OrgBranch
                                                openBranches={openBranches}
                                                setChooseBranch={setChooseBranch}
                                                branches={branches}
                                          />
                                    </div>
                                    <div className="flex-row-sp choose-time">
                                          <div 
                                                onClick={openDateClick}
                                                className="flex-row-sp date"
                                          >
                                                <span>
                                                      {
                                                            chooseDate ?
                                                                  chooseDate :
                                                                  t('my_ser.date_select')
                                                      }
                                                </span>
                                                <img src={icon.Calendar} alt="" />
                                                <OrgDate
                                                      openDate={openDate}
                                                      setChooseDate={setChooseDate}
                                                />
                                          </div>
                                          <div
                                                onClick={openTimeClick} 
                                                className="flex-row-sp date"
                                          >
                                                <span>
                                                      {
                                                            chooseTime ?
                                                                  chooseTime :
                                                                  t('my_ser.time_select')
                                                      }
                                                </span>
                                                <img src={icon.time} alt="" />
                                                <OrgTime
                                                      openTime={openTime}
                                                      setChooseTime={setChooseTime}
                                                />
                                          </div>
                                    </div>
                                    <div className="flex-column-sp my-ser-submit">
                                          <div
                                                style={{ width: '100%' }}
                                          >
                                                <div className="my-ser-submit__title">
                                                      {t('my_ser.app_info')}
                                                </div>
                                                <div className="time">
                                                      <span className="section__title">
                                                            {t('order.time')}
                                                      </span>
                                                      <span className="info">
                                                            {
                                                                  !chooseTime || !chooseDate ?
                                                                        t('my_ser.pl_select_date')
                                                                        :
                                                                        `Ngày : ${chooseTime}, ${chooseDate}`
                                                            }
                                                      </span>
                                                </div>
                                                <div className="time">
                                                      <span className="section__title">
                                                            {t('booking.branch')}
                                                      </span>
                                                      <div className="branch-info">
                                                            {
                                                                  !chooseBranch ?
                                                                        <span className="info">
                                                                              {t('my_ser.pl_select_br')}
                                                                        </span>
                                                                        :
                                                                        <>
                                                                              <span className="flex-row">
                                                                                    <h4>{t('my_ser.name_br')} :</h4>
                                                                                    <h3>{chooseBranch?.name}</h3>
                                                                              </span>
                                                                              <span className="flex-row">
                                                                                    <h4>{t('pm.phone_number')} :</h4>
                                                                                    <h3>{chooseBranch?.telephone}</h3>
                                                                              </span>
                                                                              <span className="flex-row">
                                                                                    <h4>{t('Mer_de.address')} :</h4>
                                                                                    <h3>{chooseBranch?.full_address}</h3>
                                                                              </span>
                                                                        </>
                                                            }
                                                      </div>
                                                </div>
                                                <textarea
                                                      onChange={handleOnChange}
                                                      className="my-ser-submit__note"
                                                      placeholder={t('pm.note')}
                                                ></textarea>
                                          </div>
                                          <div className="my-ser-submit__btn">
                                                <ButtonCus
                                                      text={t('my_ser.bk_now')}
                                                      color='var(--bgWhite)'
                                                      backColor='var(--purple)'
                                                      padding='10px 16px'
                                                      borderRadius='18px'
                                                      onClick={handleSubmitApp}
                                                />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </Container>
                  <PopupNotiApp
                        errCode={errCode}
                        setOpen={setOpenNotiApp}
                        open={openNotiApp}
                  />
            </div>
      );
}

export default ServiceBottom;