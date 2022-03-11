import React from 'react';
import { dealHot } from '../../../../constants/img';

function HomeDeal(props: any) {
    return (
        <div className='home-deal-cnt'>
            <div className="deal-first">
                <img src={dealHot.dealhot} alt="" />
            </div>
            <div className="deal-second">
                <div className="deal-second__item">
                    <img src={dealHot.dealhot1} alt="" />
                </div>
                <div className="deal-second__item">
                    <img src={dealHot.dealhot2} alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomeDeal;