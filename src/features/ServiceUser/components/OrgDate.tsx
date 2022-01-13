import React from 'react';
import DatePicker from '../../../components/DatePicker';

function OrgDate(props: any) {
      const { setChooseDate, openDate, setOpenDate } = props;
      return (
            <>
            <div
                  style={
                        openDate === true ?
                              { opacity: 1, top: '50px', visibility: 'visible' }
                              :
                              { opacity: 0, top: '80px', visibility: 'hidden', zIndex: 'inherit' }
                  }
                  className="ser-choose-date"
            >
                  <DatePicker
                        setChooseDate={setChooseDate}
                  />
            </div>
            <div 
                  className={openDate?"back-drop_layout open":"back-drop_layout"}
                  onClick={()=>setOpenDate(!openDate)}
            ></div>
            </>
      );
}

export default OrgDate;