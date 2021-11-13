import React, {useRef, useState} from 'react';
import {Container} from '@mui/material';
import icon from '../../../constants/icon';
import {useElementSize} from 'usehooks-ts'
import SimpleImageSlider from 'react-simple-image-slider';
import img from '../../../constants/img';

const images=[
      {url:img.slider},
      {url:img.slider4},
]
function DetailHead(props:any) {
      const { merDetail } = props;
      const slider = useRef(null);
      const {width, height} = useElementSize(slider);
      const [follow, setFollow] = useState(false);

      return (
            <div className="mer-detail">
                  <Container>
                        <div className="mer-detail__content">
                              <div className="mer-detail__content-left">
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
                                                      <h5>Địa chỉ</h5>
                                                      {merDetail?.address}
                                                </span>
                                          </div>
                                    </div>
                                    <div className="content-left__info">
                                          <div className="content-left__info-detail">
                                                <img src={icon.time} alt="" />
                                                <span>
                                                      <h5>Lịch làm việc</h5>
                                                </span>
                                          </div>
                                    </div>
                                    <div className="content-left__work">
                                          <div className="content-left__work-item">
                                                <span>Thứ 2 - Thứ 7</span>
                                                <p>09.00 - 21.00</p>
                                          </div>
                                          <div className="content-left__work-item">
                                                <span>Thứ 2 - Thứ 7</span>
                                                <p>09.00 - 21.00</p>                                          
                                          </div>
                                    </div>
                                    <div className="content-left__follow">
                                          <button>Liên hệ tư vấn</button>
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
                                                {follow === true ? 'Đang theo dõi' : 'Theo dõi'}
                                          </button>
                                    </div>
                              </div>
                              <div ref={slider} className="mer-detail__content-right">
                                    <SimpleImageSlider
                                          width={width}
                                          height={height}
                                          images={images}
                                          showBullets={false}
                                          showNavs={false}
                                          autoPlay={true}
                                          autoPlayDelay={3}
                                    />
                              </div>
                        </div>
                  </Container>
            </div>
      );
}

export default DetailHead;