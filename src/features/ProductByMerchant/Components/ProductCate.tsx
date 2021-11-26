import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/index';
import icon from '../../../constants/icon';
import categoryApi from '../../../api/categoryApi';
import {Category} from '../../../interface/category'

function ProductCate(props:any) {
      const { mer_id, t } = props;
      const [activeCate, setActiveCate] = useState();
      const [categories, setCategories] = useState<Category[]>([]);
      const handleActiveCateClick = (cate: any) => {
            setActiveCate(cate)
      }
      useEffect(()=>{
            async function getCateByOrgId(){
                  try{
                        const res = await categoryApi.getByOrgId(mer_id);
                        setCategories(res.data.context.data);
                  }catch(err){console.log(err)}
            }
            getCateByOrgId()
      },[mer_id])
      return (
            <div className="ser-category">
                  <div className="flex-row">
                        <img src={icon.dashboard} alt="" />
                        <SectionTitle
                              title={t('Home.Filter_category')}
                        />
                  </div>
                  <div className="ser-category-box">
                        <ul className="ser-category-box__list">
                              {
                                    categories.map(item => (
                                          <li
                                                onClick={() => handleActiveCateClick(item)}
                                                key={item.id}
                                                className="ser-category-box__item"
                                          >
                                                <div
                                                      style={activeCate === item ?
                                                            { color: 'var(--purple)' }
                                                            :
                                                            { color: 'var(--text-hover)' }
                                                      }
                                                      className="flex-row-sp"
                                                >
                                                      {item.name}
                                                      <img src={icon.next} alt="" />
                                                </div>
                                                {/* <ul
                                                      style={activeCate === item ?
                                                            { display: 'block' }
                                                            :
                                                            { display: 'none' }}
                                                      className="ser-category-box__item-child"
                                                >
                                                      {
                                                            item.child.map(itemChild => (
                                                                  <li key={itemChild.id} >{itemChild.name}</li>
                                                            ))
                                                      }
                                                </ul> */}
                                          </li>
                                    ))
                              }
                        </ul>
                  </div>
            </div>
      );
}

export default ProductCate;