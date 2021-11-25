import React from 'react';
import DetailInfo from './DetailInfo';
import DetailComment from './DetailComment'

function DetailMer(props:any) {
      const {merDetail, t} = props;
      return (
            <div className="mer-detail__content-desc">
                  <DetailInfo
                        t={t}
                        merDetail={merDetail}
                  />
                  <DetailComment
                        t={t}
                  />
            </div>
      );
}

export default DetailMer;