import React from 'react';
import SectionTitle from '../../SectionTitle/index';
import icon from '../../../constants/icon';
import ButtonCus from '../../../components/ButtonCus';
import {utilsList} from '../../MerchantDetail/components/DetailInfo'
import {staffList} from '../../MerchantDetail/components/DetailInfo'
import DetailPersonnel from '../../MerchantDetail/components/DetailPersonnel';
import {useHistory} from 'react-router-dom';
import scrollTop from '../../../utils/scrollTop';

function DetailMer(props:any) {
      const { org } = props;
      const history = useHistory();
      const gotoMerDetail=(item:any)=>{
            history.push({
                  pathname: `/Merchant-detail/`,
                  search: `id=${org.id}`,
                  state: item
            })
            scrollTop();
      }
      return (
            <div className="pr-de-mer">
                  <SectionTitle
                        title="Về doanh nghiệp"
                  />
                  <div className="flex-row-sp pr-de-mer__content">
                        <img
                              src={"https://picsum.photos/650/650?random=" + org.id}
                              alt="" className="pr-de-mer__content-avt"
                        />
                        <div className="flex-column detail-mer">
                              <div className="flex-row-sp pr-de-mer__content-info">
                                    <span className="info-name">
                                          {org.name}
                                    </span>
                                    <div className="flex-row info-rate">
                                          <span>4.5</span>
                                          <img src={icon.star} alt="" />
                                          <span>101</span>
                                          <img src={icon.chatAll} alt="" />
                                    </div>
                              </div>
                              <div className="content-left__info">
                                    <div className="content-left__info-detail">
                                          <img src={icon.location} alt="" />
                                          <span className="info-address">
                                                {org?.full_address}
                                          </span>
                                    </div>
                              </div>
                              <div className="flex-row detail-time">
                                    <img src={icon.Clock_purple} alt="" />
                                    Thời gian mở cửa
                                    <span>09.00 - 21.00</span>
                              </div>
                              <div className="flex-row detail-btn">
                                    <ButtonCus
                                          text="Tư vấn"
                                          fontSize="14px"
                                          lineHeight="20px"
                                          color="var(--bg-gray)"
                                          backColor="var(--purple)"
                                          border="solid 1px var(--purple)"
                                          borderRadius="18px"
                                    />
                                    <ButtonCus
                                          margin="0px 0px 0px 16px"
                                          text="Tìm hiểu thêm"
                                          fontSize="14px"
                                          lineHeight="20px"
                                          color="var(--purple)"
                                          backColor="var(--bg-gray)"
                                          border="solid 1px var(--purple)"
                                          borderRadius="18px"
                                          onClick={gotoMerDetail}
                                    />
                              </div>
                        </div>
                  </div>
                  <div className="mer__content-info__util">
                        <SectionTitle
                              title="Tiện ích"
                        />
                        <ul className="mer__content-info__util-list">
                              {
                                    utilsList.map((item, index) => (
                                          <li key={index}>
                                                <div className="flex-row-sp mer__content-info__util-item">
                                                      <img src={item.icon} alt="" />
                                                      <span>
                                                            <h5>{item.text}</h5>
                                                            <p>{item.count}</p>
                                                      </span>
                                                </div>
                                          </li>
                                    ))
                              }
                        </ul>
                  </div>
                  <div className="mer__content-info__util">
                        <SectionTitle
                              title="Đội ngũ nhân sự"
                        />
                        <DetailPersonnel
                              list={staffList}
                        />
                  </div>
            </div>
      );
}

export default DetailMer;