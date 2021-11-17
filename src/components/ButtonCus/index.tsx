import React from 'react';
import {commonStyle} from '../../constants/style'

function ButtonCus(props:any) {
      const btnStyle = commonStyle();
      const {
            padding,
            paddingLeft,
            backColor, 
            color, 
            fontSize, 
            lineHeight,
            borderRadius,
            onClick,
            text,
            imgIcon,
            border,
            margin,
            disabled
      } = props
      const handleOnClick=()=>{
            if(onClick){
                  onClick()
            }
      }
      return (
            <button 
                  disabled={disabled}
                  style={{
                        padding: padding,
                        paddingLeft: paddingLeft,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        color: color,
                        backgroundColor:backColor,
                        borderRadius: borderRadius,
                        border: border,
                        margin: margin
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