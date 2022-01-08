import React from 'react';
import CardItem from '../../features/CardItem/index';
import './recommendList.css'

const style={
      width:'172px'
}
function RecommendListMb(props:any) {
      const {org, productsSale} = props;
      return (
            <div className="mb-rcm-wrapper">
                  <div className="mb-rcm-wrapper__title">
                        Ưu đãi khác của "{org?.name}"
                  </div>
                  <div className="mb-rcm-wrapper__cnt">
                        <ul className="mb-rcm-wrapper__cnt-list">
                              {
                                    productsSale.map((item:any) => (
                                          <li key={item.id}>
                                                <CardItem
                                                      is_type={1}
                                                      name={item.product_name}
                                                      detail={item}
                                                      style={style}
                                                      retail_price={item.retail_price}
                                                      special_price={item.special_price}
                                                      org={org}
                                                      org_id={org.id}
                                                      org_name={org.name}
                                                />
                                          </li>
                                    ))
                              }
                        </ul>
                  </div>
            </div>
      );
}

export default RecommendListMb;