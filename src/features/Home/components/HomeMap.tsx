import React from 'react';
import SectionTitle from '../../SectionTitle/index'
import img from '../../../constants/img'

const title='Hàng ngàn đối tác \n là các thương hiệu spa uy tín trong và ngoài nước'
function HomeMap(props:any) {
      return (
            <div className="home-map">
                  <SectionTitle
                        title={title}
                        textAlign='center'
                  />
                  <img src={img.mapCustomer} alt=""/>
            </div>
      );
}

export default HomeMap;