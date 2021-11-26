import React, { useContext } from 'react';
import img from '../../../constants/img';
import { AppContext } from '../../../context/AppProvider';
import SectionTitle from '../../SectionTitle';


function HomeFlatForm(props:any) {
      const {t} = useContext(AppContext)
      return (
            <div className="home-flatform">
                  <SectionTitle
                        title={t('Home.Flat_form')}
                        textAlign="center"
                  />
                  <div className="home-flatform__content">
                        <div className="flatform-card">
                              <img src={img.flatform1} alt="" />
                              <div>
                                    {t('Home.Flat_form_item_1')}
                              </div>
                        </div>
                        <div className="flatform-card">
                              <img src={img.flatform1} alt="" />
                              <div>
                                    {t('Home.Flat_form_item_2')}
                              </div>
                        </div>
                        <div className="flatform-card">
                              <img src={img.flatform1} alt="" />
                              <div>
                                    {t('Home.Flat_form_item_3')}
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default HomeFlatForm;