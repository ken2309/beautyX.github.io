import React, { useState } from 'react';
import SectionTitle from '../../../features/SectionTitle';
import icon from '../../../constants/icon';
import Map from '../../Map'

function DetailBranchesList(props: any) {
      const { branches } = props;
      const [openMap, setOpenMap] = useState(false);
      const openMapBranch=()=>{
            setOpenMap(true);
      }
      return (
            <>
                  <SectionTitle
                        title="Danh sách chi nhánh"
                        textAlign='center'
                  />
                  <Map
                        openMap={openMap}
                        setOpenMap={setOpenMap}
                        list={branches}
                  />
                  <div className="mb-br-content">
                        <ul className="mb-br-content__list">
                              {
                                    branches?.map((item: any) => (
                                          <li
                                                key={item.id}
                                          >
                                                <div className="flex-row-sp mb-br-content__item">
                                                      <img src={"https://picsum.photos/150/120?random=" + item.id}
                                                            alt=""
                                                            className="mb-br-content__item-img"
                                                      />
                                                      <div className="mb-br-content__content">
                                                            <div className="content-name">
                                                                  {item.name}
                                                            </div>
                                                            <div 
                                                                  onClick={openMapBranch}
                                                                  className="flex-row-sp content-address"
                                                            >
                                                                  <span>
                                                                        {item.full_address}
                                                                  </span>
                                                                  <img src={icon.chevronRight_2} alt="" />
                                                            </div>
                                                      </div>
                                                </div>
                                          </li>
                                    ))
                              }
                        </ul>
                  </div></>
      );
}

export default DetailBranchesList;