import React from 'react';
import ComboItem from './ComboItem'

function ComboTab(props: any) {
      const { combos, tab_id, org } = props;
      return (
            <div
                  style={tab_id === 3 ? { display: 'block' } : { display: 'none' }}
            >
                  <ul className="order-item-list">
                        {
                              combos?.map((item: any, index: number) => (
                                    <ComboItem
                                          key={index}
                                          combotItem={item}
                                          org={org}
                                    />
                              ))
                        }
                  </ul>
            </div>
      );
}

export default ComboTab;