import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import auth from '../api/authApi'


export const AppContext = createContext();
export default function AppProvider({ children }) {
      const { t } = useTranslation();
      const lg = localStorage.getItem('i18nextLng')
      const [language, setLanguage] = useState();
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

      const TK = window.sessionStorage.getItem('_WEB_TK')
      useEffect(() => {
            function handleGetToken() {
                  if (TK) {
                        setTk(window.sessionStorage.getItem('_WEB_TK'))
                        const res = JSON.parse(`${window.sessionStorage.getItem('_WEB_US')}`)
                        setUserInfo(res)
                  }
            }
            handleGetToken()
            return () => {
                  //console.log('clean')
            }
      }, [TK, sign])

      useEffect(() => {
            async function handleGetProfile() {
                  try {
                        const res = await auth.getUserProfile();
                        setProfile(res.data);
                  } catch (err) {
                        setProfile(undefined)
                        //console.log(err)
                  };
            }
            handleGetProfile();
      }, [sign])

      const test = "test"
      const value = {
            t,
            test,
            language,
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