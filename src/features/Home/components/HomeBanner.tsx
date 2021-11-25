import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppProvider';
import HomeFilter from './HomeFilter'

const styleFilter={
      position:'absolute',
      width:'600px',
      boxShadow:'0px 6px 37px rgba(113, 97, 186, 0.1)',
      padding:'36px'
}
function HomeBanner(props: any) {
      const { t } = useContext(AppContext)
      return (
            <div className="home-banner">
                  <span className="home-banner__slogan">
                        {/* <p>Khám phá và trải nghiệm</p>
                        <p>thiên đường làm đẹp ngay gần bạn với</p>
                        <p>Booking Flatform Myspa</p> */}
                        {t('Banner.1')}
                  </span>
                  <HomeFilter
                        styleFilter={styleFilter}
                  />
            </div>
      );
}

export default HomeBanner;