import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const AppContext = createContext();
export default function AppProvider({ children }) {
      const { t } = useTranslation();
      const lg = localStorage.getItem('i18nextLng')
      const [language, setLanguage] = useState();
      useEffect(() => {
            if (lg === 'en-US' || lg === 'en') {
                  setLanguage('en')
            } else if (lg === 'vi-VN' || lg === 'vn') {
                  setLanguage('vn')
            }
      }, [lg])
      const test = "test"
      const value = {
            t,
            test,
            language,
            setLanguage
      }
      return (
            <AppContext.Provider
                  value={value}
            >
                  {children}
            </AppContext.Provider>
      )
}