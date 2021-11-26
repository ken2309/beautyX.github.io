import React, { useContext } from 'react';
import SectionTitle from '../../SectionTitle/index'
import img from '../../../constants/img'
import { AppContext } from '../../../context/AppProvider';

function HomeMap(props: any) {
      const { t } = useContext(AppContext)
      return (
            <div className="home-map">
                  <SectionTitle
                        title={t('Home.Mini_map_title')}
                        textAlign='center'
                  />
                  <img src={img.mapCustomer} alt="" />
            </div>
      );
}

export default HomeMap;