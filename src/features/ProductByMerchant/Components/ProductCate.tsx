import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/index';
import icon from '../../../constants/icon';
import categoryApi from '../../../api/categoryApi';
import {Category} from '../../../interface/category';
import Skeleton from 'react-loading-skeleton'

function ProductCate(props:any) {
      const { mer_id, t, setCate_id, setPage, activeTab } = props;
      const [activeCate, setActiveCate] = useState();
      const [categories, setCategories] = useState<Category[]>([]);
      const [loading, setLoading] = useState(false);
      const handleActiveCateClick = (cate: any) => {
            setActiveCate(cate)
            setCate_id(cate.id);
            setPage(1);
      }
      useEffect(() => {
            setLoading(true);
            async function getCateByOrgId() {
                  try {
                        const res = await categoryApi.getByOrgId(mer_id);
                        setCategories(res.data.context.data);
                        setLoading(false)
                  } catch (err) { console.log(err) }
            }
            if (activeTab === 3) {
                  getCateByOrgId()
            }
      }, [activeTab, mer_id])
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
                              <li
                                    onClick={()=>setCate_id(0)}
                                    className="ser-category-box__item"
                              >
                                    <div className="flex-row-sp">
                                          Tất cả
                                          <img src={icon.next} alt="" />
                                    </div>
                              </li>
                              {
                                    loading === true ?
                                          <Skeleton
                                                count={8}
                                                style={{
                                                      width: '100%',
                                                      height: '20px',
                                                      margin: '6px 0px'
                                                }}
                                          />
                                          :
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
                                                </li>
                                          ))
                              }
                        </ul>
                  </div>
            </div>
      );
}

export default ProductCate;