import React, { useState } from 'react';
import SectionTitle from '../../SectionTitle';
import MapWrapper from '../../SearchResult/components/MapWrapper';
import '../../SearchResult/SearchResult.css';
import icon from '../../../constants/icon';
import img from '../../../constants/img';
const branchList = [
      { id: 1, name: 'Chi nhánh Phú Nhuận', address: 'quận Phú Nhuận, tp Hồ Chí Minh', lat: 10.800888, long: 106.6707388 },
      { id: 2, name: 'Chi nhánh Thủ Đức', address: 'khu phố 5 Linh Xuân, Thủ Đức, tp Hồ Chí Minh', lat: 10.8814545, long: 106.7626637 },
      { id: 3, name: 'Chi nhánh Hoàn Kiếm', address: 'quận Hoàn Kiếm, thành phố Hà Nội', lat: 21.0304108, long: 105.8461673 },
      { id: 4, name: 'Chi nhánh Dống Đa', address: 'Chùa Bộc, Trung Liệt, Đống Đa, Hà Nội', lat: 21.0080737, long: 105.8250734 }
]
function DetailBranchList(props: any) {
      const [chooseBranch, setChooseBranch] = useState(branchList[0])
      const handleChooseBranch = (item: any) => {
            setChooseBranch(item)
      }
      return (
            <div>
                  <SectionTitle
                        title="Danh sách chi nhánh"
                  />
                  <div className="mer-branch-box">
                        <div className="mer-branch-box__map">
                              <MapWrapper
                                    width='100%'
                                    chooseItem={chooseBranch}
                              />
                        </div>
                        <div className="mer-branch-box__branch">
                              <div className="flex-row-sp mer-branch-box__branch-search">
                                    <input type="text" placeholder="Tìm chi nhánh theo khu vực gần bạn..."/>
                                    <button><img src={icon.search} alt="" /></button>
                              </div>
                              <div className="mer-branch-box__branch-wrapper">
                                    <div className="mer-branch-box__branch-list">
                                          {
                                                branchList.map(item => (
                                                      <div 
                                                            onClick={()=>handleChooseBranch(item)}
                                                            key={item.id} className="mer-branch-box__branch-item"
                                                      >
                                                            <img className="mer-branch-box__branch-img" src={img.rectangle} alt="" />
                                                            <div className="flex-row-sp branch-item__info">
                                                                  <div className="branch-item__left">
                                                                        <p className="branch-item__info-name">{item.name}</p>
                                                                        <p>{item.address}</p>
                                                                  </div>
                                                                  <div className="flex-row-sp branch-item__option">
                                                                        <span className="flex-column-sp">
                                                                              <img src={icon.gps} alt="" />
                                                                              Chỉ đường
                                                                        </span>
                                                                        <span className="flex-column-sp">
                                                                              <img src={icon.phone} alt="" />
                                                                              Liên hệ
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                ))
                                          }
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default DetailBranchList;