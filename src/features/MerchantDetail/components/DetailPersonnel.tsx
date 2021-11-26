import React, { useContext } from 'react';
import ButtonCus from '../../../components/ButtonCus';
import icon from '../../../constants/icon';
import {AppContext} from '../../../context/AppProvider'

function DetailPersonnel(props: any) {
      const { list } = props;
      const { t } = useContext(AppContext)
      return (
            <>
                  <ul className="flex-row-sp mer__content-info__personnel-list">
                        {
                              list.map((item: any, index: any) => (
                                    <li key={index}>
                                          <div className="flex-row-sp mer__content-info__personnel-item">
                                                <img src={item.avatar} alt="" />
                                                <div className="info__personnel-item-box">
                                                      <span>{item.name}</span>
                                                      <div className="flex-row-sp info__personnel-detail">
                                                            <div>
                                                                  <h4>
                                                                        {t('Mer_de.specialized')}
                                                                  </h4>
                                                                  <p>
                                                                        {item.position}
                                                                  </p>
                                                            </div>
                                                            <div>
                                                                  <h4>
                                                                        {t('Mer_de.experience')}
                                                                  </h4>
                                                                  <p>
                                                                        {item.exp} {t('Mer_de.year')}
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </li>
                              ))
                        }
                  </ul>
                  <ButtonCus
                        text={t('Mer_de.view_all_staff')}
                        imgIcon={icon.next}
                        color="var(--purple)"
                        border="solid 1px var(--purple)"
                        borderRadius="18px"
                  />
            </>
      );
}

export default DetailPersonnel;