import React, { useContext } from 'react';
import img from '../../../constants/img';
import { AppContext } from '../../../context/AppProvider';
import SectionTitle from '../../SectionTitle';

function HomeOrder(props: any) {
      const { t } = useContext(AppContext)
      const steps = [
            { image: img.homeSt1, step: 1, title: t('Home.Order_step_1') },
            { image: img.homeSt2, step: 2, title: t('Home.Order_step_2') },
            { image: img.homeSt3, step: 3, title: t('Home.Order_step_3') },
            { image: img.homeSt4, step: 4, title: t('Home.Order_step_4') }
      ]
      return (
            <div className="home-order">
                  <SectionTitle
                        title={t('Home.Order_title')}
                        textAlign='center'
                  />
                  <div className="home-step__line"></div>
                  <div className="home-order__step">
                        {
                              steps.map((item, index) => (
                                    <div key={index} className="home-order__card">
                                          <span className="home-order__card-step">
                                                {t('Home.Order_step')} {item.step}
                                          </span>
                                          <span className="home-order__card-title">
                                                {item.title}
                                          </span>
                                          <img src={item.image} alt="" />
                                    </div>
                              ))
                        }
                  </div>
            </div>
      );
}

export default HomeOrder;