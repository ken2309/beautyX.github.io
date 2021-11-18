import React from 'react';
import DetailInfo from './DetailInfo';
import DetailComment from './DetailComment'

function DetailMer(props:any) {
      const {merDetail} = props;
      return (
            <div className="mer-detail__content-desc">
                  <DetailInfo
                        merDetail={merDetail}
                  />
                  <DetailComment/>
            </div>
      );
}

export default DetailMer;