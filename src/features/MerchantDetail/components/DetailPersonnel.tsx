import React from 'react';
import ButtonCus from '../../../components/ButtonCus';
import icon from '../../../constants/icon';

function DetailPersonnel(props: any) {
      const { list } = props;
      return (
            <>
                  <ul className="flex-row-sp mer__content-info__personnel-list">
                        {
                              list.map((item: any, index:any) => (
                                    <li key={index}>
                                          <div className="flex-row-sp mer__content-info__personnel-item">
                                                <img src={item.avatar} alt="" />
                                                <div className="info__personnel-item-box">
                                                      <span>{item.name}</span>
                                                      <div className="flex-row-sp info__personnel-detail">
                                                            <div>
                                                                  <h4>
                                                                        Chuyên môn
                                                                  </h4>
                                                                  <p>
                                                                        {item.position}
                                                                  </p>
                                                            </div>
                                                            <div>
                                                                  <h4>
                                                                        Năm kinh nghiệm
                                                                  </h4>
                                                                  <p>
                                                                        {item.exp} Năm
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
                        text="Xem tất cả nhân sự"
                        imgIcon={icon.next}
                        color="var(--purple)"
                        border="solid 1px var(--purple)"
                        borderRadius="18px"
                  />
            </>
      );
}

export default DetailPersonnel;