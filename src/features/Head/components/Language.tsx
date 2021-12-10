import React, {useContext} from 'react';
import icon from '../../../constants/icon';
import { AppContext } from '../../../context/AppProvider';
import i18next from 'i18next'

const languages = [
      { code: 'vn', title: 'Tiếng việt', icon: icon.VietnamFlat, currency: 'Việt Nam Đồng', unit: 'VND' },
      { code: 'en', title: 'English', icon: icon.EngFlat, currency: 'United States Dollar', unit: 'USD' }
]

function Language(props: any) {
      const { setOpenLang, openLang, unit, setUnit } = props;
      const { language, setLanguage } = useContext(AppContext);
      const handleChangeLang = (code: string) => {
            setLanguage(code)
            i18next.changeLanguage(code);
            setOpenLang(false)
      }
      const handleChangeUnit = (unit: string) => {
            setUnit(unit)
            setOpenLang(false)
      }
      return (
            <div
                  style={openLang === true ?
                        { top: '3rem', opacity: '1', visibility: 'visible' }
                        :
                        { top: '5rem', opacity: '0', visibility: 'hidden' }}
                  className="flex-row hd-lang-box"
            >
                  <div className="hd-lang-box__left">
                        {
                              languages.map((item) => (
                                    <div
                                          onClick={() => handleChangeLang(item.code)}
                                          key={item.code}
                                          className="flex-row hd-lang-box__item"
                                    >
                                          <img src={item.icon} alt="" />
                                          <span
                                                style={item.code === language ? { color: 'var(--purple)' } : {}}
                                          >{item.title}</span>
                                    </div>
                              ))
                        }
                  </div>
                  <div className="hd-lang-box__right">
                        {
                              languages.map((item) => (
                                    <div
                                          onClick={() => handleChangeUnit(item.unit)}
                                          style={item.unit === unit ? { color: 'var(--purple)' } : {}}
                                          key={item.code}
                                          className="flex-row hd-lang-box__item"
                                    >
                                          <span className="hd-lang-box__item-unit">{item.unit}</span>
                                          <span className="hd-lang-box__item-curr">{item.currency}</span>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      );
}

export default Language;