import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import auth from '../api/authApi';
// import axios from 'axios';

export const AppContext = createContext();
export default function AppProvider({ children }) {
      const { t } = useTranslation();
      const lg = localStorage.getItem('i18nextLng')
      const [language, setLanguage] = useState();
      const [openModal, setOpenModal] = useState(false);

      const [tk, setTk] = useState();
      const [userInfo, setUserInfo] = useState()
      const [sign, setSign] = useState();
      const [profile, setProfile] = useState();

      useEffect(() => {
            if (lg === 'en-US' || lg === 'en') {
                  setLanguage('en')
            } else if (lg === 'vi-VN' || lg === 'vn') {
                  setLanguage('vn')
            }
      }, [lg])

      //const TK = localStorage.getItem('_WEB_TK')
      useEffect(() => {
            function handleGetToken() {
                  const res = JSON.parse(`${localStorage.getItem('_WEB_US')}`)
                  setUserInfo(res)
            }
            handleGetToken()
            return () => {
            }
      }, [sign])

      useEffect(() => {
           async function handleGetProfile() {
                  try {
                        const res = await auth.getUserProfile();
                        setProfile(res.data);
                  } catch (err) {
                        setProfile(undefined)
                  } 
            }
            handleGetProfile();
            return ()=>{

            }
      }, [sign])
      //get all tags
      const value = {
            t,
            language,
            openModal, 
            setOpenModal,
            setLanguage,
            tk, userInfo,
            setTk, setUserInfo,
            setSign,
            profile,
      }
      return (
            <AppContext.Provider
                  value={value}
            >
                  {children}
            </AppContext.Provider>
      )
}