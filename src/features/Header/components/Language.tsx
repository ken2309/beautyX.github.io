/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useRef } from 'react';
import {headerStyle} from '../style';
import icon from '../../../constants/icon';
import { AppContext } from '../../../context/AppProvider';
import i18next from 'i18next'
import '../header.css';

interface Toggle {
    openLang: Boolean
    openLangClick: () => void
}
const languages = [
    { code: 'vn', title: 'Tiếng việt', icon: icon.VietnamFlat }, { code: 'en', title: 'English', icon: icon.EngFlat }
]
function Language({ openLang, openLangClick }: Toggle) {
    const lang = headerStyle();
    const { language, setLanguage } = useContext(AppContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ref: any = useRef();
    const handleLang = (code: any) => {
        setLanguage(code)
        i18next.changeLanguage(code);
    }
    // const active: any = () => {
    //     return ("active")
    // }
    return (
        <div
            className={lang.menuLangItem + ' '}
            onClick={() => openLangClick()}
        >
            <span
                className={lang.menuLangBtnDropdown}
            >
                <img src={icon.Money} alt="" width="16px" />
                <span>
                    VND
                </span>
            </span>
            <div className={((openLang) ? `${lang.popover} ${lang.popoverOpened}` : `${lang.popover}`) + ' quicksand-md'}>
                <div className={lang.national} >
                    {
                        languages.map((item: any) => (
                            <div
                                className={lang.changeLangBtn}
                                key={item.code}
                                onClick={() => handleLang(item.code)}
                            >
                                <img src={item.icon} alt="" width="16px" />
                                <span>{item.title}</span>
                                {
                                    item.code === language ?
                                        <img
                                            style={{ width: '20px', borderRadius: '100%', marginLeft: '8px' }}
                                            src={icon.success}
                                            alt=""
                                        />
                                        :
                                        ''
                                }
                            </div>
                        ))
                    }
                </div>
                <div className={lang.curency}>
                    <a href="#" onClick={(e) => handleLang(e)}>
                        <b> VND </b>
                        <span> Việt Nam Đồng</span>
                    </a>
                    <a href="#" onClick={(e) => handleLang(e)}>
                        <b> USD </b>
                        <span> United States Dollar</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Language;