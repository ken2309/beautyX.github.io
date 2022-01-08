import React from 'react';

function TimeItem(props: any) {
      const { Time, setChooseTime } = props;
      const chooseTimeClick = () => {
            if (setChooseTime) {
                  setChooseTime(Time.format('HH:mm'))
            }
      }
      return (
            <div
                  onClick={chooseTimeClick}
                  className="date-pk__item"
            >
                  <div className="date-pk__item-box">
                        {Time.format('HH:mm')}
                  </div>
            </div>
      );
}

export default TimeItem;