import React, {useEffect, useRef, useState} from 'react';
import {Container} from '@mui/material';
import icon from '../../../constants/icon';
import {useElementSize} from 'usehooks-ts'
import SimpleImageSlider from 'react-simple-image-slider';
import img from '../../../constants/img';
import DetailTab from './DetailTab';

const images=[
      {url:img.slider},
      {url:img.slider4},
]
function DetailHead(props:any) {
      const { t, merDetail, activeTab, setActiveTab } = props;
      const [heightSlider, setHeightSlider] = useState(0);
      const slider = useRef(null);
      const infoBox = useRef(null);
      const { width } = useElementSize(slider);
      const { height } = useElementSize(infoBox)
      const [follow, setFollow] = useState(false);
      useEffect(()=>{
            setHeightSlider(height)
      },[height])
      return (
            <div className="mer-detail">
                  <Container>
                        <div className="mer-detail__content">
                              <div ref={infoBox} className="mer-detail__content-left">
                                    <div className="content-left__header">
                                          <img src={icon.logoBusiness} alt="" />
                                          <div className="content-left__header-name">
                                                <span>{merDetail?.name}</span>
                                                <div className="mer-detail__rate">
                                                      <span>4.5</span>
                                                      <img src={icon.star} alt="" />
                                                      <span>250</span>
                                                      <img src={icon.chatAll} alt="" />
                                                      <span>121</span>
                                                      <img src={icon.star} alt="" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="content-left__info">
                                          <div className="content-left__info-detail">
                                                <img src={icon.location} alt="" />
                                                <span>
                                                      <h5>{t('Mer_de.address')}</h5>
                                                      {merDetail?.full_address}
                                                </span>
                                          </div>
                                    </div>
                                    <div className="content-left__info">
                                          <div className="content-left__info-detail">
                                                <img src={icon.time} alt="" />
                                                <span>
                                                      <h5>{t('Mer_de.time_work')}</h5>
                                                </span>
                                          </div>
                                    </div>
                                    <div className="content-left__work">
                                          <div className="content-left__work-item">
                                                <span>{t('Mer_de.weeks_day')}</span>
                                                <p>09.00 - 21.00</p>
                                          </div>
                                          <div className="content-left__work-item">
                                                <span>{t('Mer_de.sunday')}</span>
                                                <p>09.00 - 21.00</p>                                          
                                          </div>
                                    </div>
                                    <div className="content-left__follow">
                                          <button>{t('Mer_de.contact')}</button>
                                          <button
                                                style={
                                                      follow === true ?
                                                            {
                                                                  backgroundColor: 'var(--purple)',
                                                                  color: 'var(--bg-gray)'
                                                            }
                                                            :
                                                            {}
                                                }
                                                onClick={() => setFollow(!follow)}
                                          >
                                                {follow === true ? t('Mer_de.flowing') : t('Mer_de.flow')}
                                          </button>
                                    </div>
                              </div>
                              <div ref={slider} className="mer-detail__content-right">
                                    <SimpleImageSlider
                                          width={width}
                                          height={heightSlider}
                                          images={images}
                                          showBullets={false}
                                          showNavs={false}
                                          autoPlay={true}
                                          autoPlayDelay={3}
                                    />
                              </div>
                        </div>
                        <DetailTab
                              t={t}
                              setActiveTab={setActiveTab}
                              activeTab={activeTab}
                        />
                  </Container>
            </div>
      );
}

export default DetailHead;