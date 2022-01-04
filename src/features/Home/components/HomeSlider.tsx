import React, { useContext } from 'react';
import img from '../../../constants/img';
import { AppContext } from '../../../context/AppProvider';
import SectionTitle from '../../SectionTitle';
import Slider from 'react-elastic-carousel';
function HomeSlider(props: any) {
      const { t } = useContext(AppContext)
      const items = [
            { image: img.homeSt1, step: 1, title: t('Home.Order_step_1') },
            { image: img.homeSt2, step: 2, title: t('Home.Order_step_2') },
            { image: img.homeSt3, step: 3, title: t('Home.Order_step_3') },
            { image: img.homeSt4, step: 4, title: t('Home.Order_step_4') },
            { image: img.homeSt4, step: 4, title: t('Home.Order_step_4') },
            { image: img.homeSt4, step: 4, title: t('Home.Order_step_4') },
            { image: img.homeSt4, step: 4, title: t('Home.Order_step_4') }
      ]
      return (
            <div className="home-slider-section">
                <Slider
                    isRTL={false}
                    itemsToShow={3}
                    focusOnSelect={true}
                    enableSwipe={true}
                    initialActiveIndex={1}
                    itemPosition={'CENTER'}
                    showEmptySlots={true}
                    showArrows={true}
                >
                    {items.map((item,index) => 
                        <div style={{maxWidth: 'calc(100% / 3)'}}>
                            <img src={item.image} alt="dd"/>
                        </div>
                    )}
                </Slider>
            </div>
      );
}

export default HomeSlider;