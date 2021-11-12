import React from 'react';

function Title(props:any) {
      const {title} = props;
      return (
            <div className="title-home">
                  {title}
            </div>
      );
}

export default Title;