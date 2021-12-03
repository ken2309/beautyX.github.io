import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


export const AppContext = createContext();
export default function AppProvider({ children }) {
      const { t } = useTranslation();
      const lg = localStorage.getItem('i18nextLng')
      const [language, setLanguage] = useState();
      const [tk, setTk] = useState();
      const [userInfo, setUserInfo] = useState()
      useEffect(() => {
            if (lg === 'en-US' || lg === 'en') {
                  setLanguage('en')
            } else if (lg === 'vi-VN' || lg === 'vn') {
                  setLanguage('vn')
            }
      }, [lg])
      useEffect(() => {
            const TK = window.sessionStorage.getItem('_WEB_TK')
            function handleGetToken() {
                  if (TK) {
                        setTk(window.sessionStorage.getItem('_WEB_TK'))
                        const res = JSON.parse(`${window.sessionStorage.getItem('_WEB_US')}`)
                        setUserInfo(res)
                  }
            }
            handleGetToken()
      }, [])
      const test = "test"
      const value = {
            t,
            test,
            language,
            setLanguage,
            tk, userInfo
      }
      return (
            <AppContext.Provider
                  value={value}
            >
                  {children}
            </AppContext.Provider>
      )
}