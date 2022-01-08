import React from 'react';
import TimePicker from '../../../components/TimePicker'

function OrgTime(props:any) {
      const {setChooseTime, openTime} = props;
      return (
            <div
            style={
                  openTime === true ?
                        { opacity: 1, top: '50px', visibility: 'visible' }
                        :
                        { opacity: 0, top: '80px', visibility: 'hidden' }
            }
                  className="ser-choose-time"
            >
                  <TimePicker
                        setChooseTime={setChooseTime}
                  />
            </div>
      );
}

export default OrgTime;