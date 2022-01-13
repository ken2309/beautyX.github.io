import React from 'react';

interface IProps{
      title:string
}

function HeadTitle(props:IProps) {
      const {title} = props;
      document.title = `${title} - BeautyX`
      return (
            <></>
      );
}

export default HeadTitle;