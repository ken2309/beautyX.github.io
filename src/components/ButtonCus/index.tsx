import React from 'react';
import {commonStyle} from '../../constants/style'

function ButtonCus(props:any) {
      const btnStyle = commonStyle();
      const {
            backColor, 
            color, 
            fontSize, 
            lineHeight,
            borderRadius,
            onClick,
            text,
            imgIcon,
            border
      } = props
      const handleOnClick=()=>{
            if(onClick){
                  onClick()
            }
      }
      return (
            <button 
                  style={{
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        color: color,
                        backgroundColor:backColor,
                        borderRadius: borderRadius,
                        border: border
                  }}
                  className={btnStyle.button}
                  onClick={handleOnClick}
            >
                  {text}
                  <img src={imgIcon} alt="" />
            </button>
      );
}

export default ButtonCus;