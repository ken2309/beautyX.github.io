import React, { useState,Dispatch,SetStateAction } from 'react';
import {headerStyle} from '../style';
import icon from '../../../constants/icon';
import ButtonCus from '../../../components/ButtonCus';
import CheckNotification from './CheckNotification'
import '../header.css';

interface Toggle {
	openLang: Boolean
	openLangClick: ()=>void
}
function Language({openLang,openLangClick}: Toggle) {
      const lang = headerStyle();
      
      return (
        <div
            className={lang.menuLangItem}
            onClick={()=>openLangClick()}
        >
            <span 
                className={lang.menuLangBtnDropdown}
            >
                <img src={icon.Money} alt="" width="16px"/>
                <span>
                    VND
                </span>
            </span>
            <div className={(openLang)?`${lang.popover} ${lang.popoverOpened}`:`${lang.popover}`}>
                <div className={lang.national}>
                        <a href="#">
                            <img src={icon.VietnamFlat} alt="" width="16px"/>
                            <span>Tiếng Việt</span>
                        </a>
                        <a href="#">
                            <img src={icon.EngFlat} alt="" width="16px"/>
                            <span>English</span>
                        </a>
                </div>
                <div className={lang.curency}>
                        <a href="#">
                            <b> VND </b> 
                            <span> Việt Nam Đồng</span>
                        </a>
                        <a href="#">
                            <b> USD </b> 
                            <span> United States Dollar</span>
                        </a>
                </div>
            </div>
        </div>
      );
}

export default Language;