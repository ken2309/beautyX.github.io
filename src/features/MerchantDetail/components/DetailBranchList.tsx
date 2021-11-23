import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle';
import MapWrapper from '../../SearchResult/components/MapWrapper';
import '../../SearchResult/SearchResult.css';
import icon from '../../../constants/icon';
import img from '../../../constants/img';
import branchApi from '../../../api/branchApi';
function DetailBranchList(props: any) {
      const { mer_id } = props;
      const [branches, setBranches] = useState([]);
      useEffect(()=>{
            async function handleGetBranches(){
                  try{
                        const res = await branchApi.getBranchByOrg(mer_id);
                        setBranches(res.data.context);
                  }catch(err){
                        console.log(err)
                  }
            }
            handleGetBranches()
      },[mer_id])
      const [chooseBranch, setChooseBranch] = useState(branches[0])
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
                                                branches?.map((item: any) => (
                                                      <div
                                                            onClick={() => handleChooseBranch(item)}
                                                            key={item.id} className="mer-branch-box__branch-item"
                                                      >
                                                            <img className="mer-branch-box__branch-img" src={img.rectangle} alt="" />
                                                            <div className="flex-row-sp branch-item__info">
                                                                  <div className="branch-item__left">
                                                                        <p className="branch-item__info-name">{item.name}</p>
                                                                        <p>{item.full_address}</p>
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