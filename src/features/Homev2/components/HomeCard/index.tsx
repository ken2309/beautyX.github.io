import React, { useState } from 'react';
import icon from '../../../../constants/icon';
import TabTrust from './TabTrust';
import TabDealHot from './TabDealHot';
import TabDistance from './TabDistance';

function HomeCard(props: any) {
    const cards = [
        { id: 1, title: 'Địa điểm nhiều Deal HOT', icon: icon.fire },
        { id: 2, title: 'Địa điểm đáng tin cậy', icon: icon.shield },
        { id: 3, title: 'Địa điểm gần bạn', icon: icon.distance },
    ]
    const [acTab, setAcTab] = useState(cards[0].id)
    const switchTab = () => {
        switch (acTab) {
            case 1:
                return <TabDealHot />;
            case 2:
                return <TabTrust />
            case 3:
                return <TabDistance />
            default:
                break
        }
    }
    return (
        <div className='home-card-cnt'>
            <div className="flex-row-sp home-card-cnt__left">
                <ul className="card-list">
                    {
                        cards.map(item => (
                            <li
                                onClick={() => setAcTab(item.id)}
                                key={item.id}
                                className='flex-row-sp'
                                style={
                                    item.id === acTab ?
                                        { boxShadow: '0 15px 20px -16px rgb(0 0 0 / 24%)' }
                                        :
                                        {}
                                }
                            >
                                <div className='flex-row card-item-cnt'>
                                    <img src={item.icon} alt="" />
                                    <span>{item.title}</span>
                                </div>
                                <button>
                                    <img src={icon.chevronRightBlack} alt="" />
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="home-card-cnt__right">
                {switchTab()}
            </div>
        </div>
    );
}

export default HomeCard;