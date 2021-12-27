import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function Loading(props:any) {
      return (
            <div style={{
                  width: '100%', height: '156px',
                  display: 'flex', alignItems: 'flex-start',
                  margin:'18px 0px'
            }}>
                  <SkeletonTheme baseColor="#202020" highlightColor="#444" >
                        <Skeleton style={{ height: '156px', width: '234px', borderRadius: '24px' }} />
                  </SkeletonTheme>
                  <Skeleton
                        style={{ width: '234px)', height:'156px' }}
                  />
            </div>
      );
}

export default Loading;