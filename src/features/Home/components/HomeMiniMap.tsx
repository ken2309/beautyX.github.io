import React, { useContext } from 'react';
import SectionTitle from '../../SectionTitle';
import img from '../../../constants/img';
import icon from '../../../constants/icon';
import { AppContext } from '../../../context/AppProvider';

//const title = 'Dễ dàng xem xét và chọn lựa \n sản phẩm, dịch vụ, địa điểm làm đẹp ưng ý';
function HomeMiniMap(props: any) {
      const { t } = useContext(AppContext)
      const miniCards = [
            { icon: icon.miniMapIcon, text: t('Home.Mini_map_item_1') },
            { icon: icon.miniMapIcon, text: t('Home.Mini_map_item_2') },
            { icon: icon.miniMapIcon, text: t('Home.Mini_map_item_3') }

      ]
      return (
            <div className="home-mini-map">
                  <SectionTitle
                        title={t('Home.Mini_map_title_1')}
                        textAlign='center'
                  />
                  <div className="home-mini-map__content">
                        <img className="home-mini-map__img" src={img.miniMap} alt="" />
                        <div className="home-mini-map__card">
                              {
                                    miniCards.map((item, index) => (
                                          <div key={index} className="mini-map__content-item">
                                                <img src={item.icon} alt="" />
                                                <span>
                                                      {item.text}
                                                </span>
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
            </div>
      );
}

export default HomeMiniMap;