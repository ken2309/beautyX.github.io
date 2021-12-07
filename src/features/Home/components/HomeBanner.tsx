import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppProvider';
import HomeFilter from './HomeFilter'

const styleFilter={
      position:'absolute',
      width:'66.66%',
      boxShadow:'0px 6px 37px rgba(113, 97, 186, 0.1)',
      padding:'36px'
}
function HomeBanner(props: any) {
      const { t } = useContext(AppContext)
      return (
            <div className="home-banner">
                  <span className="home-banner__slogan">
                        {t('Banner.1')}
                  </span>
                  <HomeFilter
                        styleFilter={styleFilter}
                  />
            </div>
      );
}

export default HomeBanner;