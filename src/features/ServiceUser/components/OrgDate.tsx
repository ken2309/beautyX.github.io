import React from 'react';
import DatePicker from '../../../components/DatePicker';

function OrgDate(props: any) {
      const { setChooseDate, openDate } = props;
      return (
            <div
                  style={
                        openDate === true ?
                              { opacity: 1, top: '50px', visibility: 'visible' }
                              :
                              { opacity: 0, top: '80px', visibility: 'hidden' }
                  }
                  className="ser-choose-date"
            >
                  <DatePicker
                        setChooseDate={setChooseDate}
                  />
            </div>
      );
}

export default OrgDate;