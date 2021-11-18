import React, { useRef, useState } from 'react';
import {headerStyle} from '../style';
import icon from '../../../constants/icon';
import '../header.css';

interface Toggle {
	openLang: Boolean
	openLangClick: ()=>void
}
function Language({openLang,openLangClick}: Toggle) {
      const lang = headerStyle();
      const ref:any = useRef();
        const handleLang:any = (props:any) =>{
            console.log('props',props.target.classList);
        }
        const active:any =()=>{
            return("active")
        }
      return (
        <div
            className={lang.menuLangItem+ ' '}
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
            <div className={((openLang)?`${lang.popover} ${lang.popoverOpened}`:`${lang.popover}`)+' quicksand-md'}>
                <div className={lang.national} >
                        <a href="#" onClick={(e)=>handleLang(e)} className={active}>
                            <img src={icon.VietnamFlat} alt="" width="16px"/>
                            <span>Tiếng Việt</span>
                        </a>
                        <a href="#" onClick={(e)=>handleLang(e)}>
                            <img src={icon.EngFlat} alt="" width="16px"/>
                            <span>English</span>
                        </a>
                </div>
                <div className={lang.curency}>
                        <a href="#" onClick={(e)=>handleLang(e)}>
                            <b> VND </b> 
                            <span> Việt Nam Đồng</span>
                        </a>
                        <a href="#" onClick={(e)=>handleLang(e)}>
                            <b> USD </b> 
                            <span> United States Dollar</span>
                        </a>
                </div>
            </div>
        </div>
      );
}

export default Language;