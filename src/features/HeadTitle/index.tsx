import React from 'react';

function HeadTitle(props:any) {
      const {title} = props;
      document.title = `${title} - BeautyX`
      return (
            <></>
      );
}

export default HeadTitle;