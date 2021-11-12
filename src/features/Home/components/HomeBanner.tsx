import React from 'react';
import HomeFilter from './HomeFilter'

function HomeBanner(props:any) {
      return (
            <div className="home-banner">
                  <span className="home-banner__slogan">
                        <p>Khám phá và trải nghiệm</p>
                        <p>thiên đường làm đẹp ngay gần bạn với</p>
                        <p>Booking Flatform Myspa</p>
                  </span>
                  <HomeFilter/>
            </div>
      );
}

export default HomeBanner;