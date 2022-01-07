import React from 'react';

function TimeItem(props: any) {
      const { Time } = props;
      return (
            <div className="date-pk__item">
                  <div className="date-pk__item-box">
                        {Time.format('HH:mm')}
                  </div>
            </div>
      );
}

export default TimeItem;